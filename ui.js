// 🔄 test commit: updating ui.js ABC



// -------------------------------------

const buttonA = document.getElementById('iconkitButtonA');
        const buttonB = document.getElementById('iconkitButtonB');
        const buttonC = document.getElementById('iconkitButtonC');

        buttonA.addEventListener('click', () => {
            parent.postMessage({ pluginMessage: { type: 'apply-iconkit-button-a' } }, '*');
        });

        buttonB.addEventListener('click', () => {
            parent.postMessage({ pluginMessage: { type: 'apply-iconkit-button-b' } }, '*');
        });

        buttonC.addEventListener('click', () => {
            parent.postMessage({ pluginMessage: { type: 'apply-iconkit-button-c' } }, '*');
        });


// -------------------------------------



      const icons = Array.from(document.getElementsByClassName('icon'));
      let selectedStyle = "line";
      let selectedSize = 'small';
    
      function applyStyle() {
  const svgs = document.querySelectorAll('.icon svg');

  svgs.forEach(svg => {
    if (svg.dataset.style === selectedStyle && !svg.classList.contains('alt-icon')) {
      svg.style.display = "block";
      svg.parentNode.style.display = "inline-flex"; // show parent if it contains matching svg
    } else {
      svg.style.display = "none";
    }
  });
}
      
      let sliderValue = 0;

document.getElementById('dyn-button').addEventListener('click', function() {
  this.style.width = "calc(100% - 0px)";
  document.getElementById('dyn-icon').style.display = "none";
  document.getElementById('dyn-slider').style.display = "block";
  this.style.background = `linear-gradient(to right, #897DFF ${sliderValue}%, #222222 ${sliderValue}%)`;
});

document.getElementById('dyn-slider').addEventListener('input', function() {
  sliderValue = this.value;
  document.getElementById('dyn-button').style.background = `linear-gradient(to right, #897DFF ${sliderValue}%, #222222 ${sliderValue}%)`;
});

document.getElementById('dyn-div').addEventListener('mouseleave', function() {
  document.getElementById('dyn-button').style.width = "32px";
  document.getElementById('dyn-icon').style.display = "block";
  document.getElementById('dyn-slider').style.display = "none";
  document.getElementById('dyn-button').style.background = "#222222";
});

// -----------------------------------------


var presetButtons = document.querySelectorAll('.cc2-button');
presetButtons.forEach(button => {
  button.addEventListener('click', function() {
    presetButtons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
    this.classList.add('active'); // Add active class to clicked button
  });
});

// -----------------------------------------




// CHANGE THEME COLOR

function changeColorText(backgroundColor, textColor, button) {
    // Get the current theme (dark or light)
    var currentTheme = document.body.getAttribute('data-theme');

    // Select all elements with the current theme
    var themeElements = document.querySelectorAll(`[data-theme="${currentTheme}"]`);

    // Update the --detail-A and --text-A variables within each of these elements
    themeElements.forEach(function(elem) {
        elem.style.setProperty('--detail-A', backgroundColor);
        elem.style.setProperty('--text-A', textColor);
    });

    // Set active theme button
    setActiveThemeButton(button);
}


function setActiveThemeButton(activeButton) {
    // Remove 'active' class from all theme buttons
    var buttons = document.querySelectorAll('.theme-button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    activeButton.classList.add('active');
}


// Example usage: changeColor('#666FFF'); // Changes the --detail-A color within the dark theme to #666FFF

// Call this function with the new color when a button is clicked

// -----------------------------------------













// -----------------------------------------



// ICON HOVER TEXT


document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mouseover', function() {
    const fontName = this.id; // Get the id of the hovered icon
    this.setAttribute('data-fontname', fontName); // Set the data-fontname attribute
  });
});


////////////////////////////////////////////////////////////////////



// DARK LIGHT THEME



// STORE SETTINGS 


//////////////////////////////////////////////////









// Initialize copied styles and custom presets
let gridContainer;

let copiedStyles = null;
let customPresets = {};
let currentPresetDiv;
let currentButtonCount = 0;
let isRenaming = false;  // Flag to check if the user is renaming
let buttonToRename = null;  // Store the button element that is being renamed

// Function to update the maxHeight of the expandable section
function updateExpandableSectionHeight(sectionId) {
  const section = document.getElementById(sectionId);
  section.style.maxHeight = section.scrollHeight + "px";
}

// Function to delete a preset button
function deletePresetButton(buttonElement, styleName) {
  const parentDiv = buttonElement.parentElement; // Get the parent div
  buttonElement.remove();
  delete customPresets[styleName];
  parent.postMessage({ pluginMessage: { type: 'delete-custom-preset', payload: styleName } }, '*');
  currentButtonCount--;  // Decrement the current button count
  updateExpandableSectionHeight("expandable-section10");  // Update the section size
  
  // // Check if the parent div is now empty
  // if (!parentDiv.hasChildNodes()) {
  //   parentDiv.remove(); // Remove the parent div if it's empty
  // }
}

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





// // Show submenu when 'More' is hovered
// document.getElementById("moreOption").addEventListener('mouseover', function() {
//   const subMenu = document.getElementById('moreSubMenu');
//   subMenu.style.display = 'block';
// });

// // Hide submenu
// document.getElementById("moreOption").addEventListener('mouseout', function() {
//   const subMenu = document.getElementById('moreSubMenu');
//   subMenu.style.display = 'none';
// });





/////////////////////

// Function to copy SVG to clipboard





/////////////////////









// Function to apply custom style
function applyCustomStyle(styleName) {
  if (customPresets[styleName]) {
    copiedStyles = customPresets[styleName];
    parent.postMessage({ pluginMessage: { type: 'apply-custom-style', styles: copiedStyles } }, '*');
  }
}

// Logic to enable the Save Style button when a style is copied
function enableSaveStyleButton() {
  document.getElementById("saveStyleButton").disabled = false;
}

// Function to save a new preset
function saveCustomPreset(name, styles) {
  parent.postMessage({
    pluginMessage: {
      type: 'save-custom-preset',
      payload: { name, styles }
    }
  }, '*');
}

// Function to get the list of all custom presets
function getCustomPresets() {
  parent.postMessage({
    pluginMessage: {
      type: 'get-custom-presets'
    }
  }, '*');
}

// Listen for messages from the back-end
window.onmessage = (event) => {
  const message = event.data.pluginMessage;
  
  if (message && message.type === 'style-copied') {
    document.getElementById('copyStyleButton').classList.add('copied');
    copiedStyles = message.styles;
    enableSaveStyleButton();
  } else if (message && message.type === 'style-pasted') {
    document.getElementById('copyStyleButton').classList.remove('copied');
    copiedStyles = null;
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copyStyleButton');
  const pasteButton = document.getElementById('pasteStyleButton');
  const saveButton = document.getElementById('saveStyleButton');

  // Initialize the grid container
  const gridContainer = document.createElement("div");
  gridContainer.className = "preset-buttons-grid";  // Class to apply grid styling
  document.getElementById("expandable-section10").appendChild(gridContainer);

  copyButton.addEventListener('click', function() {
    parent.postMessage({ pluginMessage: { type: 'copy-style' } }, '*');
    copyButton.classList.add('copied');
    pasteButton.style.cursor = 'pointer';
    enableSaveStyleButton();
  });

  pasteButton.addEventListener('click', function() {
    if (pasteButton.style.cursor !== 'not-allowed') {
      parent.postMessage({ pluginMessage: { type: 'paste-style' } }, '*');
    }
  });

// New code to close the modal when the element with class 'save-style-close' is clicked
document.querySelector('.save-style-close').addEventListener('click', function() {
    document.getElementById("save-style-modal").style.display = "none";
  });

  saveButton.addEventListener("click", function() {
    isRenaming = false;  // Reset the renaming flag
    buttonToRename = null;  // Reset the button to rename
    document.getElementById("save-style-modal").style.display = "block";
  });

  document.getElementById("save-style-confirmSaveButton").addEventListener("click", function() {
    let styleName = document.getElementById("save-style-styleNameInput").value;

    // Capitalize the first letter of each word
    styleName = toTitleCase(styleName);

    if (styleName) {
      customPresets[styleName] = copiedStyles;
      document.getElementById('copyStyleButton').classList.remove('copied');

// If renaming, update the existing button
if (isRenaming && buttonToRename) {
  buttonToRename.innerText = styleName;
} else {
  // Otherwise, create a new button
  const newButton = document.createElement("button");
  newButton.className = "preset-button"; // For general styling
  newButton.id = "preset-button-custom"; // For specific targeting
  newButton.innerText = styleName;
  
  // Apply custom style when clicked
  newButton.addEventListener('click', function() {
    applyCustomStyle(styleName);

    // Remove 'active' class from all preset buttons
    const presetButtons = document.querySelectorAll('.preset-button');
    presetButtons.forEach(button => button.classList.remove('active'));
    
    // Add 'active' class to clicked button
    this.classList.add('active');
  });

  // Show context menu on right-click
  newButton.addEventListener('contextmenu', function(event) {
    showContextMenu(event, newButton, styleName);
  });

  // Initial scale to 1.2
  newButton.style.transform = "scale(1.2)";
  newButton.style.transition = "transform 0.2s ease-in-out";

  // Append the new button to the grid container
  gridContainer.appendChild(newButton);
  currentButtonCount++;

        // Update the maxHeight of the expandable section to fit the new button
        updateExpandableSectionHeight("expandable-section10");

        // Bounce animation sequence
        setTimeout(() => newButton.style.transform = "scale(0.9)", 200);  // Scale down a bit
        setTimeout(() => newButton.style.transform = "scale(1.1)", 400);  // Scale up
        setTimeout(() => newButton.style.transform = "scale(1)", 600);    // Settle to normal size
      }

      // Close the modal
      document.getElementById("save-style-modal").style.display = "none";
    }
  });
});















// ---------------------------------------------------------------------

// COLOR PICKER FRO FIGMA Node












// DROPDOWN FOR SELECTION OR ALL ICONS EDITING 

// Get dropdown input
const applyToDropdown = document.getElementById('applyToDropdown');
let previousValue = applyToDropdown.value; // Store the previous value

applyToDropdown.addEventListener('change', function() {
  if (this.value === 'all') { // Check if "All Icons" is selected
    const isConfirmed = window.confirm('Are you sure you want to apply selected colors to all icons?');
    if (isConfirmed) {
      console.log(`Changed apply to option to ${this.value}`);
      previousValue = this.value; // Update the previous value
      // Resend color and opacity updates with new applyTo option
      sendUpdateColorMessage('primary', primaryColorInput.value, primaryOpacityInput.value / 100);
      sendUpdateColorMessage('secondary', secondaryColorInput.value, secondaryOpacityInput.value / 100);
    } else {
      this.value = previousValue; // Revert to the previous value if the user cancels
    }
  } else {
    console.log(`Changed apply to option to ${this.value}`);
    previousValue = this.value; // Update the previous value
  }
});

// Function to send color and opacity update message
function sendUpdateColorMessage(nodeName, color, opacity) {
  const applyToOption = applyToDropdown.value;
  parent.postMessage({ pluginMessage: { type: 'update-color', nodeName, color, opacity, applyToOption } }, '*');
}

// ------------------------------------------


// Get the new dropdown element
const newSmallDropdown = document.getElementById('newSmallDropdown');

// Add an event listener to the new dropdown
newSmallDropdown.addEventListener('change', function() {
  console.log(`Changed new option to ${this.value}`);
  // Add new functionality here
});


// UPL2 UPLOAD BUTTON

const upl2FileInput = document.querySelector('#upl2FileInput');
const upl2ImageFrame = document.querySelector('#upl2ImageFrame');
const upl2ImageContainer = document.querySelector('.upl2ImageContainer');
const upl2ApplyButton = document.querySelector('#upl2ApplyButton');

upl2ImageContainer.addEventListener('click', function() { // Here we replaced 'dblclick' with 'click'
  upl2FileInput.click();
});

upl2ImageContainer.addEventListener('focus', function() {
  upl2ImageContainer.classList.add('focused');
});

upl2ImageContainer.addEventListener('blur', function() {
  upl2ImageContainer.classList.remove('focused');
});

upl2FileInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = function() {
      upl2ImageFrame.style.display = 'none'; // Hide the image frame first
      upl2ImageFrame.onload = function() { // Add an onload event
        upl2ImageFrame.style.display = 'block'; // Show the image frame when the image loads
        upl2ApplyButton.disabled = false; // Enable the Apply button
      };
      upl2ImageFrame.src = reader.result; // Set the source which triggers the load event
    };
    reader.readAsDataURL(file);
  }
});

upl2ApplyButton.addEventListener('click', function() {
  const reader = new FileReader();
  reader.onload = function(event) {
    const imageData = event.target.result;
    parent.postMessage({ pluginMessage: { type: 'apply-image', imageData } }, '*');
  }
  reader.readAsArrayBuffer(upl2FileInput.files[0]);
});


// -----------------------------------------

// SHOW HIDE STYLE OPTIONS



document.querySelector('.main-reveal-button').addEventListener('click', function() {
  document.querySelector('.style-options').classList.toggle('show'); // Toggle 'show' class
});



// -----------------------------------------



document.getElementById('scalingStepper').addEventListener('input', function(e) {
    window.parent.postMessage({ pluginMessage: { type: 'updateScalingFactor', scalingFactor: e.target.value / 100 } }, '*')
  });


// upl2FileInput.addEventListener('change', function(e) {
//   const file = e.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onloadend = function() {
//       upl2ImageFrame.src = reader.result;
//       upl2ImageFrame.style.display = 'block';
//       upl2ApplyButton.disabled = false; // Enable the Apply button
//       upl2ApplyButton.addEventListener('click', function() {
//         applyImageFillToNodes(new Uint8Array(reader.result));
//       });
//     };
//     reader.readAsArrayBuffer(file);
//   }
// });









//------------------------------------------


// TOGGLE FOR STICKER LAYER


const toggleSwitch = document.getElementById('tgl2Toggle');

function updateInkyIconVisibility(iconElement) {
    // Only apply this logic for Inky style icons
    const inkyIcon = iconElement.querySelector('svg[data-style="inky"]');

    if (inkyIcon) {
        const stickerLayer = inkyIcon.querySelector('path[id="STICKER"]');
        // Check if the stickerLayer exists before modifying its properties
        if (stickerLayer) {
            const totalLayers = inkyIcon.querySelectorAll('path').length;

            if (totalLayers > 1 && toggleSwitch && toggleSwitch.checked) {
                // If both layers are imported and the toggle is ON, set the opacity of the STICKER layer to 20%
                stickerLayer.style.opacity = "0.9";
                stickerLayer.style.display = ""; // Make sure the sticker layer is displayed
            } else if (toggleSwitch && toggleSwitch.checked) {
                // If the toggle is ON, display the STICKER layer with 100% opacity
                stickerLayer.style.opacity = "1";
                stickerLayer.style.display = "";
            } else {
                // If the toggle is OFF, hide the STICKER layer
                stickerLayer.style.display = "none";
            }
        }
    }
}

toggleSwitch.addEventListener('change', function() {
    // When the toggle switch changes, update the visibility and opacity of the STICKER layer for all Inky icons
    const allIcons = document.querySelectorAll('.icon');
    allIcons.forEach(updateInkyIconVisibility);
});

// Initial setup: Make sure the icons are displayed correctly based on the initial state of the toggle
document.addEventListener('DOMContentLoaded', function() {
    const allIcons = document.querySelectorAll('.icon');
    allIcons.forEach(updateInkyIconVisibility);
});


// NEW TOGGLE

document.getElementById("tgl2Toggle2").addEventListener("change", function(event) {
    const textElement = document.querySelector(".toggle-container p");
    if (event.target.checked) {
        textElement.style.opacity = "1";
        textElement.textContent = "Enabled";
    } else {
        textElement.style.opacity = "0.6";
        textElement.textContent = "Disabled";
    }
});









// function adjustInkyIconForSingleLayer(iconElement) {
//     const inkyIcon = iconElement.querySelector('svg[data-style="inky"]');
    
//     if (inkyIcon) {
//         const stickerLayer = inkyIcon.querySelector('path[id="STICKER"]');
//         const primaryLayers = inkyIcon.querySelectorAll('path[id="PRIMARY"]');
        
//         // Set the viewBox and dimensions
//         inkyIcon.setAttribute('viewBox', '0 0 16 16');
//         inkyIcon.setAttribute('width', '16');
//         inkyIcon.setAttribute('height', '16');
        
//         if (stickerLayer) {
//             // If both layers are present
//             // Reset all child transformations
//             Array.from(inkyIcon.children).forEach((child) => {
//                 child.removeAttribute('transform'); 
//             });
//         } else {
//             // If only the primary layer is imported
//             const scaleFactor = 1.3; // scaling by 1.3x
//             Array.from(inkyIcon.children).forEach((child) => {
//                 child.setAttribute('transform', `scale(${scaleFactor})`);
//             });
//         }
//     }
// }




//------------------------------------------







// // Get the range input element for "Size"
// const sizingSlider = document.getElementById('sizingSlider');

// // Get the text input element that holds the sizing value
// const currentSizingValue = document.getElementById('currentSizingValue');

// // Function to update tooltip and text input
// function syncValues() {
//   // Update the tooltip
//   sizingSlider.setAttribute('title', sizingSlider.value + 'px');
  
//   // Update the text input
//   currentSizingValue.value = sizingSlider.value;
// }

// // Attach event listeners for changes
// sizingSlider.addEventListener('input', syncValues);

// // Initial sync
// syncValues();

////////////////////////////


// // JavaScript for synchronizing values
// // JavaScript for synchronizing values
// document.addEventListener("DOMContentLoaded", function() {
//   const currentSizingValue = document.getElementById("currentSizingValue");
//   const mini2TextInput = document.getElementById("mini2TextInput");

//   // Initialize mini2-text-input to match currentSizingValue
//   mini2TextInput.value = currentSizingValue.value;

//   // Update mini2TextInput when currentSizingValue changes
//   currentSizingValue.addEventListener("input", function() {
//     mini2TextInput.value = currentSizingValue.value;
//   });

//   // Update currentSizingValue when mini2TextInput changes
//   mini2TextInput.addEventListener("input", function() {
//     currentSizingValue.value = mini2TextInput.value;
//   });
// });














  











// ------------------------

document.addEventListener('DOMContentLoaded', function() {
  let icons = document.querySelectorAll('.icon');
  let popup = document.querySelector('.popup');
  let currentlyHoveredIcon = null;

  function hidePopup() {
    popup.classList.remove('show'); // Hide the popup
    popup.innerHTML = ''; // Clear the alt icons from the popup

    icons.forEach(icon => {
      icon.classList.remove('show-popup'); // Remove the class from the main icon
    });
  }

  function showPopupForIcon(icon) {
    let altIcons = icon.querySelectorAll('svg.alt-icon');
    if (altIcons.length > 0) {
      hidePopup();

      altIcons.forEach(altIcon => {
        let clonedAltIcon = altIcon.cloneNode(true);
        clonedAltIcon.style.display = 'block';
        clonedAltIcon.addEventListener('click', function(e) { handleAltIconClick(e, icon); });
        popup.appendChild(clonedAltIcon);
      });

      const iconRect = icon.getBoundingClientRect();
      popup.style.top = (iconRect.bottom + window.scrollY) + 'px';
      popup.style.left = (iconRect.left + window.scrollX + (iconRect.width / 2)) + 'px';

      popup.classList.add('show');
      icon.classList.add('show-popup'); // Add the class to the main icon
    }
  }

  function handleAltIconClick(event, icon) {
    console.log('Alt-icon clicked:', event.target);
    console.log('Outer HTML:', event.target.outerHTML);

    var activeColorItem = document.querySelector('.color-item.active');
    if (!activeColorItem) {
      console.error("No active color item found");
      return;
    }

    var color = getComputedStyle(activeColorItem).getPropertyValue('background-color');
    var sizeSlider = document.getElementById('sizeSlider');
    var size = sizeSlider ? sizeSlider.value : null;

    const importOption = document.querySelector('input[name="importOption"]:checked').value;

    console.log('Import Option:', importOption);
    console.log('Color:', color);
    console.log('Size:', size);

    if (importOption === 'icon') {
      console.log('Sending message to import single alt-icon');
      window.parent.postMessage({
        pluginMessage: {
          type: 'import',
          content: event.target.outerHTML,
          id: icon.id + '-alt',
          color: color,
          style: event.target.dataset.style,
          importOption: importOption,
          size: size
        }
      }, '*');
    } else {
      console.error('Import option is not "icon"');
    }

    hidePopup(); // Hide the popup when an alt-icon is clicked
  }

  icons.forEach(icon => {
    icon.addEventListener('mouseenter', function(event) {
      currentlyHoveredIcon = icon;
      if (event.shiftKey) {
        showPopupForIcon(icon);
      }
    });

    icon.addEventListener('mouseleave', function() {
      currentlyHoveredIcon = null;
    });

    icon.addEventListener('click', function() {
      hidePopup(); // Hide the popup when the main icon is clicked
    });
  });

  popup.addEventListener('mouseleave', function() {
    hidePopup(); // Hide the popup when the mouse leaves the popup area
  });

  document.addEventListener('keyup', function(event) {
    if (event.key === 'Shift') {
      hidePopup();
    }
  });

  document.addEventListener('mousemove', function(event) {
    if (event.shiftKey && currentlyHoveredIcon) {
      showPopupForIcon(currentlyHoveredIcon);
    }
  });
});




// ----

// ADDITIONAL IMPORT FOR ALT ICONS


// icons.forEach(icon => {
//   icon.addEventListener('click', (e) => {
//     if (selectionMode) return;

//     var activeColorItem = document.querySelector('.color-item.active');
//     if (!activeColorItem) {
//       console.error("No active color item found");
//       return;
//     }

//     var color = getComputedStyle(activeColorItem).getPropertyValue('background-color');
//     var size = sizeSlider ? sizeSlider.value : null; // Get the size

//     // Check if the clicked element is an alt-icon
//     const isAltIcon = e.target.classList.contains('alt-icon');

//     // Import only the clicked SVG
//     const svgToImport = isAltIcon ? e.target : icon.querySelector(`svg.main-icon[data-style="${selectedStyle}"]`);
//     if (svgToImport) {
//       console.log('Sending message to import single icon');
//       window.parent.postMessage({
//         pluginMessage: {
//           type: 'import',
//           content: svgToImport.outerHTML,
//           id: isAltIcon ? icon.id + '-alt' : icon.id,
//           color: color,
//           style: svgToImport.dataset.style,
//           importOption: importOption,
//           size: size // Pass the size to pluginMessage
//         }
//       }, '*');

//       // Stop propagation to prevent the event from being triggered again
//       e.stopPropagation();
//     }
//   });
// });






// --------------------------------------------------------
// SECTION TITLE STICKY

// document.addEventListener("DOMContentLoaded", function() {
//   const sectionTitles = document.querySelectorAll(".section-title");
//   let lastId, cur = [];

//   window.addEventListener("scroll", function() {
//     let fromTop = window.scrollY;

//     sectionTitles.forEach(function(sectionTitle) {
//       if (sectionTitle.offsetTop <= fromTop) {
//         cur = sectionTitle;
//       }
//     });

//     if (lastId !== cur) {
//       lastId = cur;
//       // Previously "stickied" title
//       sectionTitles.forEach((el) => el.classList.remove("sticky"));
//       // New "stickied" title
//       cur.classList.add("sticky");
//     }
//   });
// });





// STEPPER

// Original Stepper
const scalingStepperContainer = document.getElementById('scalingStepperContainer');
const scalingStepperValue = scalingStepperContainer.querySelector('.stepperValue');
const scalingIncrementButton = scalingStepperContainer.querySelector('.incrementButton');
const scalingDecrementButton = scalingStepperContainer.querySelector('.decrementButton');

scalingIncrementButton.addEventListener('click', function() {
    let currentVal = Number(scalingStepperValue.value);
    if (currentVal < 99) {
        scalingStepperValue.value = (currentVal + 0.5).toFixed(1);
    }
    window.parent.postMessage({ pluginMessage: { type: 'updateScalingFactor', scalingFactor: scalingStepperValue.value / 100 } }, '*');
});

scalingDecrementButton.addEventListener('click', function() {
    let currentVal = Number(scalingStepperValue.value);
    if (currentVal > 0) {
        scalingStepperValue.value = (currentVal - 0.5).toFixed(1);
    }
    window.parent.postMessage({ pluginMessage: { type: 'updateScalingFactor', scalingFactor: scalingStepperValue.value / 100 } }, '*');
});






// Negative Stepper
document.querySelectorAll('.negativeStepperContainer').forEach((stepperContainer) => {
    const stepperValue = stepperContainer.querySelector('.stepperValue');
    const incrementButton = stepperContainer.querySelector('.incrementButton');
    const decrementButton = stepperContainer.querySelector('.decrementButton');

    incrementButton.addEventListener('click', function() {
        let currentVal = Math.floor(Number(stepperValue.value));
        if (currentVal < 99) {
            stepperValue.value = currentVal + 1;
        }
    });

    decrementButton.addEventListener('click', function() {
        let currentVal = Math.ceil(Number(stepperValue.value));
        if (currentVal > -99) {
            stepperValue.value = currentVal - 1;
        }
    });
});

// Alt Stepper
document.querySelectorAll('.altStepperContainer').forEach((altStepperContainer) => {
    const altStepperValue = altStepperContainer.querySelector('.altStepperValue');
    const altIncrementButton = altStepperContainer.querySelector('.altIncrementButton');
    const altDecrementButton = altStepperContainer.querySelector('.altDecrementButton');
    const altStepperSlider = altStepperContainer.nextElementSibling; // get the slider connected to this stepper

    altIncrementButton.addEventListener('click', function() {
        let currentVal = Math.floor(Number(altStepperValue.value));
        if (currentVal < 99) {
            altStepperValue.value = currentVal + 1;
            altStepperSlider.value = altStepperValue.value; // sync slider with the input value
        }
    });

    altDecrementButton.addEventListener('click', function() {
        let currentVal = Math.ceil(Number(altStepperValue.value));
        if (currentVal > 0) {
            altStepperValue.value = currentVal - 1;
            altStepperSlider.value = altStepperValue.value; // sync slider with the input value
        }
    });

    // sync input value with the slider
    altStepperSlider.addEventListener('input', function() {
        altStepperValue.value = altStepperSlider.value;
    });

    // sync slider with the input value
    altStepperValue.addEventListener('input', function() {
        altStepperSlider.value = altStepperValue.value;
    });
});

window.addEventListener('click', function(event) {
  // Get all stepperContainers, negativeStepperContainers and altStepperContainers
  const stepperContainers = document.querySelectorAll('.stepperContainer, .negativeStepperContainer, .altStepperContainer');

  // For each stepperContainer, check if the click was inside or outside
  stepperContainers.forEach(function(container) {
    if (container.contains(event.target)) {
      // Click was inside, add the 'focused' class
      container.classList.add('focused');
    } else {
      // Click was outside, remove the 'focused' class
      container.classList.remove('focused');
    }
  });
});





// Notification stepper code
const notificationStepperContainer = document.getElementById('notification-stepper');
const notificationStepperValue = notificationStepperContainer.querySelector('.stepperValue');
const notificationIncrementButton = notificationStepperContainer.querySelector('.incrementButton');
const notificationDecrementButton = notificationStepperContainer.querySelector('.decrementButton');

notificationIncrementButton.addEventListener('click', function() {
  let currentVal = Number(notificationStepperValue.value);
  if (currentVal < 99) {
    notificationStepperValue.value = currentVal + 1;
  }
});

notificationDecrementButton.addEventListener('click', function() {
  let currentVal = Number(notificationStepperValue.value);
  if (currentVal > 0) {
    notificationStepperValue.value = currentVal - 1;
  }
});

// Event handlers for the notification stepper value
notificationStepperValue.addEventListener('focus', function() {
  if (notificationStepperValue.value === "Padding") {
    updateValue(0);
  }
});

notificationStepperValue.addEventListener('blur', function() {
  if (notificationStepperValue.value.replace("px", "") === "0") {
    updateValue("Padding");
  }
});

// Allow only numbers and "px" in the input field
notificationStepperValue.addEventListener('input', function() {
  notificationStepperValue.value = notificationStepperValue.value.replace(/[^0-9px]/g, '');
});


// ---------------







// Button press animations
const incrementButtons = document.querySelectorAll(".incrementButton, .altIncrementButton, .paddingIncrementButton");
const decrementButtons = document.querySelectorAll(".decrementButton, .altDecrementButton, .paddingDecrementButton");

incrementButtons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.transform = "translateY(-1px)";
  });

  button.addEventListener("mouseup", () => {
    button.style.transform = "translateY(0)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});

decrementButtons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.transform = "translateY(1px)";
  });

  button.addEventListener("mouseup", () => {
    button.style.transform = "translateY(0)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});


// SEGMENTED CONTROL BUTTON


// SEGMENTED CONTROL BUTTON
const segmentedControlContainer = document.querySelector(".segmentedControlContainer");
const segmentedControlButtons = Array.from(segmentedControlContainer.querySelectorAll(".segmentedControlButton"));
const sliderOriginal = segmentedControlContainer.querySelector(".sliderOriginal");

function moveSliderToButton(index) {
  const containerWidth = segmentedControlContainer.getBoundingClientRect().width;
  const containerPadding = parseFloat(window.getComputedStyle(segmentedControlContainer, null).getPropertyValue('padding-left')) * 2;
  const buttonWidth = (containerWidth - containerPadding) / segmentedControlButtons.length;
  const sliderOriginalWidth = sliderOriginal.getBoundingClientRect().width;
  const leftPosition = (buttonWidth * index) + (buttonWidth - sliderOriginalWidth) / 2 + containerPadding / 2;

  sliderOriginal.style.left = `${leftPosition}px`;
}

segmentedControlButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Update button colors
    segmentedControlButtons.forEach(btn => btn.style.color = "var(--secondary-800)");
    button.style.color = "var(--secondary-000)";

    // Move slider to the clicked button
    moveSliderToButton(index);

    // Update the active style
    selectedStyle = button.textContent.trim().toLowerCase(); // Assumes this matches the data-tab values from the old system
    applyStyle(); // Assumes this function applies the selected style
    filterIcons(); // If you have a function to filter icons based on style
  });
});

// Initialize with the selected style
const initialStyle = selectedStyle || 'line'; // Replace 'line' with your default style if 'selectedStyle' is not set
const initialIndex = segmentedControlButtons.findIndex(btn => btn.textContent.trim().toLowerCase() === initialStyle);
if (initialIndex >= 0) {
  segmentedControlButtons[initialIndex].click();
} else {
  segmentedControlButtons[0].click(); // Fallback to the first button if the initial style is not found
}

// -------------------

// For dual segmented control
// For dual segmented control
const segmentedControlContainersDual = Array.from(document.querySelectorAll(".segmentedControlContainerDual"));

segmentedControlContainersDual.forEach((segmentedControlContainerDual) => {
  const segmentedControlButtonsDual = Array.from(segmentedControlContainerDual.querySelectorAll(".segmentedControlButtonDual"));
  const sliderDual = segmentedControlContainerDual.querySelector(".sliderDual");

  segmentedControlButtonsDual.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Calculate the width and left position
      const containerWidth = segmentedControlContainerDual.getBoundingClientRect().width;
      const containerPadding = parseFloat(window.getComputedStyle(segmentedControlContainerDual, null).getPropertyValue('padding-left')) * 2;
      const buttonWidth = (containerWidth - containerPadding) / segmentedControlButtonsDual.length;
      const sliderWidth = sliderDual.getBoundingClientRect().width;
      const leftPosition = (buttonWidth * index) + (buttonWidth - sliderWidth) / 2 + containerPadding / 2;

      // Reset all button colors
      segmentedControlButtonsDual.forEach((btn) => btn.style.color = "var(--secondary-800)");

      // Update the clicked button's color
      button.style.color = "var(--secondary-000)";

      // Move the slider
      sliderDual.style.left = `${leftPosition}px`;

      // Special behavior for segmentedControlContainerDual3
      if (segmentedControlContainerDual.id === "segmentedControlContainerDual3") {
        // Show/hide icon names
        var iconContainers = document.querySelectorAll('.icon');
        if (index === 0) {
          iconContainers.forEach(function(icon) {
            icon.classList.remove('show-name');
          });
        } else {
          iconContainers.forEach(function(icon) {
            icon.classList.add('show-name');
          });
        }
      }
    });
  });

  // Trigger a click event on the first button to set the initial state
  segmentedControlButtonsDual[0].click();

  // Set the initial position after the click event
  let initialPaddingDual = parseFloat(window.getComputedStyle(segmentedControlContainerDual, null).getPropertyValue('padding-left'));
  sliderDual.style.left = `${initialPaddingDual}px`;
});

// -------------------

// SEPARATE SECTION FOR IMPORTING (not the same as other segmented, but looks same)

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button-group input[type="radio"]');
  const sliderFrame = document.querySelector('.slider-frame');

  function updateSliderPosition() {
    const checkedButton = document.querySelector('.button-group input[type="radio"]:checked');
    const checkedLabel = checkedButton.nextElementSibling;
    const labelRect = checkedLabel.getBoundingClientRect();
    const containerRect = checkedLabel.parentElement.getBoundingClientRect();

    const offsetLeft = labelRect.left - containerRect.left;
    const width = labelRect.width;

    sliderFrame.style.left = `${offsetLeft}px`;
    sliderFrame.style.width = `${width}px`;
    sliderFrame.style.visibility = 'visible'; // Ensure the frame is visible
  }

  buttons.forEach(button => {
    button.addEventListener('change', updateSliderPosition);
  });

  // Force the starting position and visibility by triggering a click event
  const initialCheckedButton = document.querySelector('.button-group input[type="radio"]:checked');
  initialCheckedButton.nextElementSibling.click(); // Trigger a click event on the initially checked button
});

//-----------------------

// For triple segmented control
const segmentedControlContainersTriple = Array.from(document.querySelectorAll(".segmentedControlContainerTriple"));



segmentedControlContainersTriple.forEach((segmentedControlContainerTriple) => {
  const segmentedControlButtonsTriple = Array.from(segmentedControlContainerTriple.querySelectorAll(".segmentedControlButtonTriple"));
  const sliderTriple = segmentedControlContainerTriple.querySelector(".sliderTriple");

  segmentedControlButtonsTriple.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Calculate the width and left position
    const containerWidth = segmentedControlContainerTriple.getBoundingClientRect().width;
    const containerPadding = parseFloat(window.getComputedStyle(segmentedControlContainerTriple, null).getPropertyValue('padding-left')) * 2;
    const buttonWidth = (containerWidth - containerPadding) / segmentedControlButtonsTriple.length;
    const sliderWidth = sliderTriple.getBoundingClientRect().width;
    const leftPosition = (buttonWidth * index) + (buttonWidth - sliderWidth) / 2 + containerPadding / 2;

    // Reset the colors for all buttons to their initial state
    segmentedControlButtonsTriple.forEach((btn) => {
      btn.style.color = "var(--secondary-800)";
    });

    // Move slider
    sliderTriple.style.left = `${leftPosition}px`;

    // Update color of the clicked button
    button.style.color = "var(--secondary-000)";
  });
});

  // Trigger a click event on the first button
  segmentedControlButtonsTriple[0].click();

  // Set the initial position after the click event
  let initialPaddingTriple = parseFloat(window.getComputedStyle(segmentedControlContainerTriple, null).getPropertyValue('padding-left'));
  sliderTriple.style.left = `${initialPaddingTriple}px`; // Using the computed padding
});









// --------------------

// Global variable to track the state
let isTransitioning = false;

// Put these variables outside of the function so that their values are shared across all the functions
var previousContent = null;
var previousIcon = null;
var previousLabelIcon = null;

function toggleSection(labelIconId, contentId, iconId) {
    // If a transition is already in progress, return early
    if (isTransitioning) {
        return;
    }

    // Set the flag to indicate a transition is in progress
    isTransitioning = true;

    var labelIcon = document.getElementById(labelIconId);
    var content = document.getElementById(contentId);
    var icon = document.getElementById(iconId);

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.overflow = "hidden"; // Immediately set overflow to hidden when contracting
        icon.style.transform = "rotate(0deg)";
        labelIcon.classList.remove('expanded');
        setTimeout(() => {
            isTransitioning = false; // Reset the flag
        }, 400);
    } else {
        // Close the previously opened section, if any
        if (previousContent) {
            previousContent.style.maxHeight = null;
            previousContent.style.overflow = "hidden"; // Immediately set overflow to hidden for the previous content
            previousIcon.style.transform = "rotate(0deg)";
            previousLabelIcon.classList.remove('expanded');
        }

        // Open the current section and update previousContent and previousIcon
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
        labelIcon.classList.add('expanded');

        setTimeout(() => { // Delay the overflow change until after the transition
            content.style.overflow = "visible";
            isTransitioning = false; // Reset the flag
        }, 400); // Assuming transition time is 0.4s, adjust if it's different

        previousContent = content;
        previousIcon = icon;
        previousLabelIcon = labelIcon;
    }
}

// Attach event listeners
for (let i = 0; i <= 12; i++) {
    document.getElementById(`label-icon${i}`).addEventListener('click', function() {
        toggleSection(`label-icon${i}`, `expandable-section${i}`, `expand-icon${i}`);
    });
}


//     const section7 = document.getElementById('expandable-section7');
// const toggleButton = document.getElementById('your-toggle-button-id');  // Adjust this ID to match your toggle button

// toggleButton.addEventListener('click', function() {
//     section7.classList.toggle('expanded');
// });


// --------------------------------------------------

// CREATE BUTTON UIKIT

// script.js
document.getElementById('createButton').addEventListener('click', function() {
    window.parent.postMessage({ pluginMessage: { type: 'create-button' } }, '*');
});

// --------------------------------------------------


    // EXPORT SVG SPRITE

//     document.getElementById('export-svg-sprite').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default action
//     exportAsSVGSprite();
// });


    // -----

    function exportAsSVGSprite() {
  const padding = Number(notificationStepperValue.value); // Get padding value
  let icons = Array.from(document.querySelectorAll('.icon.selected')); // First try to get the selected icons

  // If no icons are selected, get all icons instead
  if (!icons.length) {
    icons = Array.from(document.querySelectorAll('.icon'));
  }

  let sprite = '<svg xmlns="http://www.w3.org/2000/svg">\n\n'; // changed declaration to include xmlns attribute

  icons.forEach((icon) => {
    styles.forEach((style) => { // Loop through each style
      const svgElement = icon.querySelector(`svg[data-style="${style}"]`); // Get the SVG for the current style

      if (svgElement) {
        const id = `${icon.id}-${style}`;
        const newWidth = svgElement.width.baseVal.value + (2 * padding);
        const newHeight = svgElement.height.baseVal.value + (2 * padding);
        sprite += `<symbol id="${id}" viewBox="0 0 ${newWidth} ${newHeight}">\n`;
        sprite += `  <g transform="translate(${padding}, ${padding})">\n`;

        const paths = Array.from(svgElement.querySelectorAll('path'));
        paths.forEach((path) => {
          // Get the computed style of the path to obtain the current color
          let style = window.getComputedStyle(path);
          let strokeColor = style.getPropertyValue('stroke');
          let fillColor = style.getPropertyValue('fill');

          // Determine which attribute (stroke or fill) to color
          let strokeAttribute = path.getAttribute('stroke') !== null ? `stroke="${strokeColor}" stroke-width="${path.getAttribute('stroke-width')}" stroke-linecap="${path.getAttribute('stroke-linecap')}" stroke-linejoin="${path.getAttribute('stroke-linejoin')}"` : '';
          let fillAttribute = path.getAttribute('fill') !== null ? `fill="${fillColor}"` : '';

          sprite += `    <path d="${path.getAttribute('d')}" ${strokeAttribute} ${fillAttribute}></path>\n`;
        });

        sprite += `  </g>\n`;
        sprite += `</symbol>\n\n`;
      }
    });
  });

  sprite += '</svg>';

  const blob = new Blob([sprite], {type: 'image/svg+xml;charset=utf-8'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'icons-sprite.svg'; // Set the download filename for the SVG sprite

  link.click();
}




// ------------ [ Divider JS ] ------------
 

// CODE FOR REPLACING ICON PLACEHOLDER ON IMPORT


// -------------------------------------

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





















      // RESIZE WINDOW BAR - REENABLE SO IT WORKS

    
      document.getElementById('small-icon-button').addEventListener('click', function() {
        document.body.classList.remove('large-icons');
        this.classList.add('active');
        document.getElementById('large-icon-button').classList.remove('active');
      });
    
      document.getElementById('large-icon-button').addEventListener('click', function() {
        document.body.classList.add('large-icons');
        this.classList.add('active');
        document.getElementById('small-icon-button').classList.remove('active');
      });
    
      // document.getElementById('size1').addEventListener('click', function() {
      //   window.parent.postMessage({ pluginMessage: { type: 'resize', size: [300, 600] } }, '*');
      //   document.body.classList.remove('size2');
      //   document.body.classList.add('size1');
      // });
    
      // document.getElementById('size2').addEventListener('click', function() {
      //   window.parent.postMessage({ pluginMessage: { type: 'resize', size: [120, 500] } }, '*');
      //   document.body.classList.remove('size1');
      //   document.body.classList.add('size2');
      // });


      

      



// ... The rest of the JavaScript code remains the same

function openCustomNavTab(tabName) {
  var i;
  var x = document.getElementsByClassName("custom-nav-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  var buttons = document.getElementsByClassName("custom-nav-bar-item");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active"); 
  }
  
  document.getElementById(tabName).style.display = "block";  
  document.getElementById(tabName+"Button").classList.add("active");

  // Manage the notification visibility and dimmed effect
  const notification = document.getElementById('selected-icon-notification');
  const blurEffect = document.getElementById('blur-effect'); // Replace with the actual ID of your dimmed effect element
  if (notification && blurEffect) {
    if (tabName === 'Explore' && shouldShowNotification()) {
      notification.classList.add('visible');
      blurEffect.style.visibility = 'visible'; // Show the dimmed effect
    } else {
      notification.classList.remove('visible');
      blurEffect.style.visibility = 'hidden'; // Hide the dimmed effect
    }
  }

  // Scroll to the top of the plugin
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function shouldShowNotification() {
  const selectedIcons = document.querySelectorAll('.icon.selected').length;
  return selectedIcons > 0 && selectionMode;
}


////////// OPEN TAB AND GO TO TOP ////////////

// function openCustomNavTab(tabName) {
//   var i;
//   var x = document.getElementsByClassName("custom-nav-tab");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }

//   var buttons = document.getElementsByClassName("custom-nav-bar-item");
//   for (i = 0; i < buttons.length; i++) {
//     buttons[i].classList.remove("active"); 
//   }
  
//   document.getElementById(tabName).style.display = "block";  
//   document.getElementById(tabName+"Button").classList.add("active");

//   // Scroll to the top of the plugin
//   window.scrollTo({top: 0, behavior: 'smooth'});

// }

////


// Function to check if the Explore tab is active
function isExploreTabActive() {
    return document.getElementById('Explore').style.display === 'block';
}

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    // Only execute the logic if the Explore tab is active
    if (isExploreTabActive()) {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Check if at the top of the page
        if (currentScroll <= 0) {
            document.querySelector('.custom-nav-bar').classList.remove('nav-hidden');
        }
        // Check if scrolling down
        else if (currentScroll > lastScrollTop) {
            document.querySelector('.custom-nav-bar').classList.add('nav-hidden');
        }
        // Check if scrolling up
        else if (currentScroll < lastScrollTop) {
            document.querySelector('.custom-nav-bar').classList.remove('nav-hidden');
        }

        lastScrollTop = currentScroll;
    }
}, false);


// --------------
var isDropdownExpanded = false; // flag to track the state

document.getElementById('dropdown-button').addEventListener('click', function () {
  var content = document.getElementById('dropdown-content');
  if (isDropdownExpanded) {
    content.style.maxHeight = null;
    isDropdownExpanded = false;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    isDropdownExpanded = true;
  }
});

// AUTOCLOSE DROPDOWN AFTER INACTIVITY

let inactivityTimer;

function collapseContent() {
  var content = document.getElementById('dropdown-content');
  content.style.maxHeight = null;
  isDropdownExpanded = false; // Update the flag here
}

function startInactivityTimer() {
  // clear any existing timers
  clearTimeout(inactivityTimer);

  // start new timer
  inactivityTimer = setTimeout(collapseContent, 8000); // 8000 milliseconds = 8 seconds
}

var content = document.getElementById('dropdown-content');
var container = document.querySelector('.container'); // Get the container element

// reset inactivity timer on mouse move
content.addEventListener('mousemove', startInactivityTimer);

// reset inactivity timer on click
content.addEventListener('click', startInactivityTimer);

// hide the dropdown content when the mouse leaves the container
container.addEventListener('mouseleave', collapseContent);

// hide the dropdown content when scrolling
// window.addEventListener('scroll', collapseContent);

// start the inactivity timer initially when the page loads
startInactivityTimer();







// APPLY EFFECTS BUTTONS


let buttons = document.querySelectorAll('.preset-button');
const preview = document.getElementById('preview'); // select the preview window

// Set default SVG for preview window
preview.innerHTML = svgIconMap['apply-effects-3'];

// ADD EVENT LISTENER TO EACH BUTTON
buttons.forEach(button => {
  button.addEventListener('click', function() {
        // Remove active class from all buttons
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });

    // Add active class to clicked button
    this.classList.add('active');

    // Get the data type
    let type = this.getAttribute('data-effect-type');
    
    // Update the preview window with the SVG associated with the active button
    preview.innerHTML = svgIconMap[type] || '';  // If type doesn't exist in svgIconMap, default to an empty string

    // Post message to parent
    parent.postMessage({ pluginMessage: { type } }, '*');
  });
});

// REMOVE ACTIVE FROM PRESETS WHEN APPLY BUTTON IS CLICKED
document.getElementById('applyButton').addEventListener('click', function() {
  const radiusValue = document.getElementById('cornerRadiusSlider').value;
  const smoothValue = document.getElementById('cornerSmoothToggle').checked ? 1 : 0;
  parent.postMessage({ pluginMessage: { type: 'apply-radius', value: radiusValue } }, '*');
  parent.postMessage({ pluginMessage: { type: 'apply-smoothing', value: smoothValue } }, '*');

  // Remove active class from all buttons
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Clear the preview window
  preview.innerHTML = svgIconMap['apply-effects-3'];
});





// PIXEL PERFECT BUTTON
document.getElementById('offset-button').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'offset-children' } }, '*');
}









// CLIPBOARD-JS



// SIZE SLIDER

// Define the oninput function
document.getElementById('sizeSlider').oninput = function() {
    let value = this.value;

    // Convert the value to size
    let size;
    if (value == 1) {
      size = "16";
    } else if (value == 2) {
      size = "24";
    } else if (value == 3) {
      size = "32";
    } else if (value == 4) {
      size = "48";
    } else if (value == 5) {
      size = "64";
    }

    // Update the displayed value and send the scale message
    document.getElementById('currentValue2').innerText = size + "px";

    // Select all SVGs and set their size
    let svgs = document.querySelectorAll('.icon svg');
    svgs.forEach(function(svg) {
      svg.setAttribute('width', size + "px");
      svg.setAttribute('height', size + "px");
    });
};















///////////////////// STYLE NAMING FOR TEXT BOX  /////////////////









// Add any other JavaScript code that needs to be executed on DOMContentLoaded below this line