// contextmenu.js


// NOT SURE IF THIS IS PART OF IT?

// Add event listeners to your icon elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.icon').forEach((iconElement) => {
        iconElement.addEventListener('contextmenu', function(event) {
            showIconContextMenu(event, this);
        });
    });
    console.log('Event listeners added to icons');
});

// Function to toggle selection for a particular icon
function toggleIconSelection(iconElement) {
    if (selectionMode) {
        iconElement.classList.add('selected');
    } else {
        toggleSelectionMode();
        iconElement.classList.add('selected');
    }
    updateSelectionNotification();
    console.log('Icon selection toggled');
}




// ICON HOVER TEXT


document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mouseover', function() {
    const fontName = this.id; // Get the id of the hovered icon
    this.setAttribute('data-fontname', fontName); // Set the data-fontname attribute
  });
});


//------------------------------------------------------



// END OF ---- NOT SURE IF THIS IS PART OF IT?

// Function to capitalize the first letter of each word
function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}


// Function to show context menu
function showContextMenu(event, buttonElement, styleName) {
  event.preventDefault();
  
  const contextMenu = document.getElementById('context-menu');
  
  // Temporarily display the menu off-screen to get its dimensions
  contextMenu.style.left = '-9999px';
  contextMenu.style.display = 'block';
  
  // Get button dimensions and position
  const rect = buttonElement.getBoundingClientRect();
  
  // Calculate position to center the context menu below the button
  const menuX = rect.left + window.scrollX + (rect.width / 2) - (contextMenu.offsetWidth / 2);
  const menuY = rect.bottom + window.scrollY;
  
  // Set the calculated position
  contextMenu.style.top = menuY + 'px';
  contextMenu.style.left = menuX + 'px';
  
  // Remove existing event listeners by cloning and replacing the elements
  const newDeleteButton = document.getElementById("delete-button").cloneNode(true);
  const oldDeleteButton = document.getElementById("delete-button");
  oldDeleteButton.parentNode.replaceChild(newDeleteButton, oldDeleteButton);

  const newRenameButton = document.getElementById("rename-button").cloneNode(true);
  const oldRenameButton = document.getElementById("rename-button");
  oldRenameButton.parentNode.replaceChild(newRenameButton, oldRenameButton);

  // Add new event listeners
  newDeleteButton.addEventListener('click', () => {
    deletePresetButton(buttonElement, styleName);
    contextMenu.style.display = "none";  // Hide the context menu
  });
  
  newRenameButton.addEventListener('click', () => {
    isRenaming = true;
    buttonToRename = buttonElement;
    document.getElementById("save-style-modal").style.display = "block";
    document.getElementById("save-style-styleNameInput").value = styleName;
    contextMenu.style.display = "none";  // Hide the context menu
  });
  
  // Hide the menu when clicking anywhere else
  document.addEventListener('click', () => {
    contextMenu.style.display = "none";  // Hide the context menu
  });
}

///////////////////////////////



function copySVGToClipboard(container) {
  var svgElement = container.querySelector('svg');
  var svgCode = svgElement.outerHTML;
  svgCode = svgCode.replace(/!important/g, '');

  var tempDom = document.createElement('div');
  tempDom.innerHTML = svgCode;
  var svgPaths = tempDom.querySelectorAll('path');

  svgPaths.forEach(function(pathElement) {
    if (pathElement.getAttribute('stroke') && !pathElement.getAttribute('fill')) {
      pathElement.setAttribute('fill', 'none');
    }
  });

  var textarea = document.createElement('textarea');
  textarea.value = tempDom.innerHTML;
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    console.log('SVG code copied to clipboard: ' + svgCode);

    // // Show custom notification
    // showNotification('Icon copied.');

  } catch (err) {
    console.error('Failed to copy SVG code to clipboard: ' + err);
  }


  document.body.removeChild(textarea);
}


/////



///////////////


let currentActiveIcon = null;  // Keep track of the current active icon
let isMouseInSubMenu = false;  // NEW: Track if the mouse is in the submenu



function showIconContextMenu(event, iconElement) {
  event.preventDefault();
  
  const contextMenu = document.getElementById('newContextMenu');
  
  if (!contextMenu) {
    console.log("No context menu element found");
    return;
  }

  // Remove active class from the currently active icon if it exists
  if (currentActiveIcon) {
    currentActiveIcon.classList.remove('icon--active');
  }

  // Add active class to the new icon
  iconElement.classList.add('icon--active');

  // Update the currently active icon
  currentActiveIcon = iconElement;

  // Temporarily display the menu off-screen to get its dimensions
  contextMenu.style.left = '-9999px';
  contextMenu.style.display = 'block';
  
  // Get icon dimensions and position
  const rect = iconElement.getBoundingClientRect();
  
  // Initialize menuX and menuY to default values
  let menuX = rect.left + window.pageXOffset + (rect.width / 2) - (contextMenu.offsetWidth / 2);
  let menuY = rect.bottom + window.pageYOffset;

  // Calculate viewport boundaries with margin
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;


  // Check if context menu goes beyond the right edge of the viewport
  if (menuX + contextMenu.offsetWidth + 20 > viewportWidth) {
    menuX = viewportWidth - contextMenu.offsetWidth - 20;
  }

  // Check for the first icon in each row and adjust menuX to 20px from the left edge
  if (rect.left < 70) {  // Assuming 50px position of the first icon and some buffer
    menuX = 20;
  }


  
  // Check if context menu goes beyond the bottom edge of the viewport
  if (menuY + contextMenu.offsetHeight + 20 > viewportHeight + window.pageYOffset) {
    menuY = viewportHeight + window.pageYOffset - contextMenu.offsetHeight - 20;
  }
  
  // Set the calculated position
  contextMenu.style.top = menuY + 'px';
  contextMenu.style.left = menuX + 'px';
  
// Hide the menu when clicking anywhere else
document.addEventListener('click', () => {
  contextMenu.style.display = "none";
  if (currentActiveIcon) {
    currentActiveIcon.classList.remove('icon--active');
  }
});

// UPDATED: Hide the menu when the cursor leaves it
contextMenu.addEventListener('mouseleave', () => {
  setTimeout(() => {  // NEW: Delay to allow time for the mouse to move to submenu
    if (!isMouseInSubMenu) {  // NEW: Check if mouse is in submenu
      contextMenu.style.display = "none";
      if (currentActiveIcon) {
        currentActiveIcon.classList.remove('icon--active');
      }
    }
  }, 300);  // NEW: Delay time in milliseconds
});

// NEW: Listen for mouse entering and leaving the submenu
document.getElementById("moreSubMenu").addEventListener('mouseenter', function() {
  isMouseInSubMenu = true;
});
document.getElementById("moreSubMenu").addEventListener('mouseleave', function() {
  isMouseInSubMenu = false;
  this.style.display = 'none';
  contextMenu.style.display = 'none';
  if (currentActiveIcon) {
    currentActiveIcon.classList.remove('icon--active');
  }
});

// Hide the menu when scrolling
window.addEventListener('scroll', () => {
  contextMenu.style.display = "none";
  if (currentActiveIcon) {
    currentActiveIcon.classList.remove('icon--active');
  }


// Remove the previous event listener
  document.getElementById("selectOption").removeEventListener('click', onSelectOptionClick);
  
  // Add a new event listener
  document.getElementById("selectOption").addEventListener('click', onSelectOptionClick);
   
   
    // Your logic for the "Select" option
    contextMenu.style.display = "none";
  });
}





// Add a new event listener to show the submenu when "More" is hovered
document.getElementById("moreOption").addEventListener('mouseenter', function() {
  const submenu = document.getElementById("moreSubMenu");
  submenu.style.display = 'block';
  
  // Get the bounding client rectangle for the context menu
  const rect = contextMenu.getBoundingClientRect();

  // Adjust the `left` and `top` styles for the submenu
  submenu.style.left = (rect.left + window.pageXOffset + rect.width) + 'px'; // place it to the right of the context menu
  submenu.style.top = (rect.top + window.pageYOffset) + 'px'; // align it with the top of the context menu
});



let submenuHideTimeout; // Declare a variable to hold the submenu timeout

// Function to check if the icon is the 4th or 5th in a row and adjust the "More" submenu position accordingly
function adjustMoreSubMenuPosition() {
  const moreSubMenu = document.getElementById("moreSubMenu");
  const contextMenuRect = document.getElementById("newContextMenu").getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  // Calculate the space on the right side of the context menu
  const spaceOnRight = viewportWidth - (contextMenuRect.right + moreSubMenu.offsetWidth);

  // If space on the right is less than the submenu width, position it to the left
  if (spaceOnRight < 0) {
    moreSubMenu.style.right = '100%'; // Position to the left of the main context menu
    moreSubMenu.style.left = 'auto'; // Reset the left property to its default
  } else {
    moreSubMenu.style.left = '100%'; // Position to the right of the main context menu
    moreSubMenu.style.right = 'auto'; // Reset the right property to its default
  }
}

// Show the submenu when hovering over the "More" option
document.getElementById("moreOption").addEventListener('mouseenter', function() {
  clearTimeout(submenuHideTimeout); // Clear any existing submenu hide timeout
  const moreSubMenu = document.getElementById("moreSubMenu");

  // Adjust the position for the submenu
  moreSubMenu.style.display = 'block';
  adjustMoreSubMenuPosition(); // Adjust the position based on the icon's position
});

// Hide the submenu when the cursor leaves the "More" option
document.getElementById("moreOption").addEventListener('mouseleave', function() {
  submenuHideTimeout = setTimeout(() => { // Set a timeout before hiding the submenu
    const moreSubMenu = document.getElementById("moreSubMenu");
    moreSubMenu.style.display = 'none';
  }, 300); // 300 ms delay
});

// Cancel submenu hide timeout when cursor enters the submenu
document.getElementById("moreSubMenu").addEventListener('mouseenter', function() {
  clearTimeout(submenuHideTimeout); // Clear the submenu hide timeout
});

// Hide the submenu when the cursor leaves it
document.getElementById("moreSubMenu").addEventListener('mouseleave', function() {
  this.style.display = 'none';
});




//// ADD TO FAVORITES - still part of context menu /////////

function addToFavorites(iconElement) {
  const favoritesGrid = document.getElementById('favorites-grid');
  const iconId = iconElement.getAttribute('data-id'); // Use the data-id attribute as identifier

  // Check if the icon is already in favorites
  if (!favoritesGrid.querySelector(`[data-id='${iconId}']`)) {
    // Create a visual representation of the icon
    const visualReplica = document.createElement('div');
    visualReplica.classList.add('icon');
    visualReplica.setAttribute('data-id', iconId);
    visualReplica.innerHTML = iconElement.innerHTML; // Copy the inner HTML of the icon

       // Add animation class
       iconElement.classList.add('favorite-added');

// Optionally remove the class after animation completes
setTimeout(() => {
  iconElement.classList.remove('favorite-added');
}, 500); // The duration here should match the animation duration


    // Append the visual replica to the favorites grid
    favoritesGrid.appendChild(visualReplica);

    // Add a red circle to the original icon to indicate it's a favorite
    if (!iconElement.querySelector('.favorite-indicator')) {
      const redCircle = document.createElement('div');
      redCircle.classList.add('favorite-indicator');
      redCircle.style.width = '4px';
      redCircle.style.height = '4px';
      redCircle.style.backgroundColor = 'var(--detail-A)';
      redCircle.style.borderRadius = '50%';
      redCircle.style.position = 'absolute';
      redCircle.style.top = '0';
      redCircle.style.right = '0';
      
      iconElement.style.position = 'relative';
      iconElement.appendChild(redCircle);
    }
  }
}

document.getElementById("favoriteOption").addEventListener('click', function() {
  if (currentActiveIcon) {
    addToFavorites(currentActiveIcon);
    document.getElementById('newContextMenu').style.display = "none";
  }
});


/////////////////////////




// Add the event listener to your existing context menu setup code
document.getElementById("selectOption").addEventListener('click', onSelectOptionClick);

function onSelectOptionClick() {
  if (currentActiveIcon) {  // Make sure there's an active icon
    toggleIconSelection(currentActiveIcon);
    currentActiveIcon.classList.remove('icon--active');  // Remove the active class
    document.getElementById('newContextMenu').style.display = "none";  // Hide the context menu
  }
}


// Add event listener for "Copy SVG"
document.getElementById("copySvgOption").addEventListener('click', () => {
  if (currentActiveIcon) { // Make sure there's an active icon
    copySVGToClipboard(currentActiveIcon);
    document.getElementById('newContextMenu').style.display = "none";  // Hide the context menu
  }
});

/////

function copyIconAsPng(iconElement) {
    const svgElement = iconElement.querySelector('svg');
    if (!svgElement) {
        console.error('No SVG found in the icon element');
        return;
    }

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(function(blob) {
            if (window.ClipboardItem) {
                const item = new ClipboardItem({ "image/png": blob });
                navigator.clipboard.write([item])
                    .then(() => console.log('PNG copied to clipboard'))
                    .catch(err => console.error('Error copying PNG to clipboard:', err));
            } else {
                // Fallback method for older browsers
                const dataUrl = canvas.toDataURL("image/png");
                const input = document.createElement('input');
                input.value = dataUrl;
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
                document.body.removeChild(input);
                console.log('PNG copied to clipboard using fallback method');
            }
        });
    };

    img.onerror = function() {
        console.error('Error loading SVG as image');
    };

    img.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgData)));
}


// Bind the event listener to the Copy PNG option
document.addEventListener('DOMContentLoaded', () => {
    const copyPngOption = document.getElementById("copyPngOption");
    if (copyPngOption) {
        copyPngOption.addEventListener('click', function() {
            if (currentActiveIcon) {
                console.log('Copy PNG option clicked');
                copyIconAsPng(currentActiveIcon);
                document.getElementById('newContextMenu').style.display = "none";
            } else {
                console.log('No active icon selected for Copy PNG');
            }
        });
    }
});


/////




// function downloadIconAsPng(iconElement, fileName) {
//     const svgElement = iconElement.querySelector('svg');
//     const svgData = new XMLSerializer().serializeToString(svgElement);
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//     const img = new Image();

//     img.onload = function() {
//         canvas.width = img.width;
//         canvas.height = img.height;
//         ctx.drawImage(img, 0, 0);
//         canvas.toBlob(function(blob) {
//             const url = URL.createObjectURL(blob);
//             const a = document.createElement('a');
//             a.href = url;
//             a.download = fileName || 'icon.png';
//             document.body.appendChild(a);
//             a.click();
//             document.body.removeChild(a);
//             URL.revokeObjectURL(url);
//         });
//     };

//     img.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgData)));
// }


/////



/// FAVORITES


// // ADD TO FAVOURITES
// document.getElementById('addToFavoritesButton').addEventListener('click', async function() {
//   // Get all selected icons
//   const selectedIcons = document.querySelectorAll('.icon.selected');
  
//   // Get the favorites container
//   const favoritesContainer = document.querySelector('.icons-grid[data-id="favorites"]');

//   // Array to hold the HTML content of favorite icons
//   let favoritesHTML = [];

//   // Iterate through selected icons and add them to favorites
//   selectedIcons.forEach(icon => {
//     // Clone the selected icon
//     const clonedIcon = icon.cloneNode(true);

//     // Remove the 'selected' class from the cloned icon
//     clonedIcon.classList.remove('selected');

//     // Append the cloned icon to the favorites container
//     favoritesContainer.appendChild(clonedIcon);

//     // Store the icon HTML in the favorites array
//     favoritesHTML.push(clonedIcon.outerHTML);
//   });

//   // Save the favorites HTML to Figma's client storage
//   await figma.clientStorage.setAsync('favorites', favoritesHTML);
//   console.log('Favorites saved.');

//   // Update the favorites counter
//   const favoritesCounter = document.querySelector('.category-counter');
//   if (favoritesCounter) {
//     favoritesCounter.textContent = favoritesContainer.children.length;
//   }
// });

//  // Function to handle adding to favorites
//  function addToFavorites() {
//     // Get selected icons and prepare favorites data
//     const selectedIcons = document.querySelectorAll('.icon.selected');
//     let favorites = [];
//     selectedIcons.forEach((icon) => {
//       favorites.push(icon.outerHTML);
//     });

//     // Send a message to the main entry point to save the favorites
//     parent.postMessage({ pluginMessage: { type: 'saveFavorites', favorites: favorites } }, '*');
//   }

//   // Listen for messages from the main entry point
//   window.onmessage = (event) => {
//     if (event.data.pluginMessage.type === 'loadFavorites') {
//       const favorites = event.data.pluginMessage.favorites;
//       // Use the favorites data to update the UI
//       // ...
//     }
//   };

//   // Event listener for the "Add to Favorites" button
//   document.getElementById('addToFavoritesButton').addEventListener('click', addToFavorites);
