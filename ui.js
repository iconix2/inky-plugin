// 🔄 test commit: updating ui.js 55



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

// ICONKIT COMPONENT BUTTONS


// document.getElementById('iconkit-button-group').addEventListener('click', function(event) {
//         if (event.target.tagName === 'BUTTON' && event.target.id.startsWith('button-item-')) {
//             const itemType = event.target.id.replace('button-', '');
//             parent.postMessage({ pluginMessage: { type: `import-${itemType}` } }, '*');
//         }
//     });

    document.getElementById('import-item-1').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-1' } }, '*');
});

document.getElementById('import-item-2').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-2' } }, '*');
});



document.getElementById('import-item-3').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-3' } }, '*');
});


document.getElementById('import-item-4').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-4' } }, '*');
});


document.getElementById('import-item-5').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-5' } }, '*');
});

document.getElementById('import-item-6').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-6' } }, '*');
});

document.getElementById('import-item-7').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-7' } }, '*');
});

document.getElementById('import-item-8').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-8' } }, '*');
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
// ICON HOVER TEXT


document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mouseover', function() {
    const fontName = this.id; // Get the id of the hovered icon
    this.setAttribute('data-fontname', fontName); // Set the data-fontname attribute
  });
});

// STROKE JOIN AND CAP FIGMA


function setActiveButton(groupName, activeId) {
  const buttons = document.querySelectorAll(`.${groupName}`);
  buttons.forEach(button => button.classList.remove('active'));
  document.getElementById(activeId).classList.add('active');
}

// Default for stroke join
const defaultJoinButton = document.getElementById("fgb3-miter");
if (defaultJoinButton) {
  // Do any initialization you need for the default active button
}

// Default for stroke cap
const defaultCapButton = document.getElementById("fgb3-no-cap");
if (defaultCapButton) {
  // Do any initialization you need for the default active button
}


document.getElementById("fgb3-no-cap").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-cap", capType: "NONE" } }, "*");
  setActiveButton('stroke-cap-button', 'fgb3-no-cap');
});

document.getElementById("fgb3-square-cap").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-cap", capType: "SQUARE" } }, "*");
  setActiveButton('stroke-cap-button', 'fgb3-square-cap');
});

document.getElementById("fgb3-round-cap").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-cap", capType: "ROUND" } }, "*");
  setActiveButton('stroke-cap-button', 'fgb3-round-cap');
});

document.getElementById("fgb3-miter").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-join", joinType: "MITER" } }, "*");
  setActiveButton('stroke-join-button', 'fgb3-miter');
});

document.getElementById("fgb3-bevel").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-join", joinType: "BEVEL" } }, "*");
  setActiveButton('stroke-join-button', 'fgb3-bevel');
});

document.getElementById("fgb3-round").addEventListener("click", function() {
  window.parent.postMessage({ pluginMessage: { type: "apply-stroke-join", joinType: "ROUND" } }, "*");
  setActiveButton('stroke-join-button', 'fgb3-round');
});










// -----------------------------------------


// PADDING MASTER

tippy('.paddingButton', {
  delay: [400, 0], // 0.4-second delay
  offset: [0, 0], // adjust the tooltip's position
  arrow: true,
  content: "Apply padding",
  animation: 'scale', // use the "scale" animation
  duration: [0, 0], // Duration for [show, hide] animations in ms
  trigger: 'mouseenter focus', // shows the tooltip on mouseenter and focus events
  hideOnClick: true
});



// Function to send the padding value to the main plugin code
function applyPadding() {
  let paddingValue = document.getElementById("PaddingInput").value;
  paddingValue = parseInt(paddingValue);

  if (isNaN(paddingValue)) {
    return; // Exit the function if the value is NaN
  }

  paddingValue = Math.max(0, paddingValue); // Ensure padding is not less than 0
  parent.postMessage({ pluginMessage: { type: 'apply-padding', padding: paddingValue } }, '*');
}

// Listening for Enter key press to apply padding
document.getElementById("PaddingInput").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    applyPadding();
  }
});

// Add event listener to the padding apply button
document.querySelector('.paddingButton').addEventListener('click', function() {
  applyPadding();
});

// Listening for real-time changes to the input field
document.getElementById("PaddingInput").addEventListener("input", function() {
  applyPadding();
});

// Padding Stepper
const PaddingStepperContainer = document.getElementById('PaddingStepperContainer');
const PaddingInput = document.getElementById('PaddingInput');
const PaddingIncrementButton = document.getElementById('PaddingIncrementButton');
const PaddingDecrementButton = document.getElementById('PaddingDecrementButton');

PaddingIncrementButton.addEventListener('click', function() {
  let currentVal = Number(PaddingInput.value);
  if (currentVal < 99) {
    PaddingInput.value = currentVal + 1;
  }
  applyPadding(); // Apply the new padding
});

PaddingDecrementButton.addEventListener('click', function() {
  let currentVal = Number(PaddingInput.value);
  if (currentVal > 0) {
    PaddingInput.value = currentVal - 1;
  }
  applyPadding(); // Apply the new padding
});







////////////////////////////////////////////////////////////////////



// DARK LIGHT THEME



// DARK LIGHT THEME
let isAutoModeActive = false;

// Function to set the theme based on the mode
function setTheme(mode) {
  if (mode === 'auto') {
    isAutoModeActive = true;
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    document.body.setAttribute("data-theme", systemPreference);
  } else {
    isAutoModeActive = false;
    document.body.setAttribute("data-theme", mode);
  }

  // Synchronize radio buttons
  document.getElementById("light-mode").checked = (mode === "light");
  document.getElementById("dark-mode").checked = (mode === "dark");

  // Synchronize theme switcher checkbox
  document.querySelector('#tgl2SmoothCorner #tgl2Toggle4').checked = (mode === "dark");

  // Synchronize segmented control
  const tripleButtons = document.querySelectorAll('.segmentedControlButtonTriple');
  tripleButtons.forEach((btn) => {
    btn.classList.remove('active');
    if (btn.textContent.trim().toLowerCase() === mode) {
      btn.classList.add('active');
    }
  });
}

// Function to handle system theme changes
function handleSystemThemeChange(e) {
  if (isAutoModeActive) {
    const newPreference = e.matches ? 'dark' : 'light';
    document.body.setAttribute("data-theme", newPreference);
  }
}

// Event Listener for System Theme changes
const systemThemeListener = window.matchMedia('(prefers-color-scheme: dark)');
systemThemeListener.addListener(handleSystemThemeChange);

// Function to toggle between light and dark mode based on checkbox
function toggleThemeCheckbox() {
  const isChecked = document.querySelector('#tgl2SmoothCorner #tgl2Toggle4').checked;
  const newTheme = isChecked ? "dark" : "light";
  setTheme(newTheme);
}

// Function to toggle between light and dark mode based on radio buttons
function toggleThemeRadio() {
  const lightModeRadio = document.getElementById("light-mode");
  const darkModeRadio = document.getElementById("dark-mode");

  if (lightModeRadio.checked) {
    setTheme("light");
  } else if (darkModeRadio.checked) {
    setTheme("dark");
  }
}

// Function to toggle theme from segmented control
function toggleThemeSegmented() {
  const controlText = this.textContent.trim().toLowerCase();
  setTheme(controlText);
  updateTheme(controlText);
}

function changeColor(newColor) {
    // Get the current theme (dark or light)
    var currentTheme = document.body.getAttribute('data-theme');

    // Select all elements with the current theme
    var themeElements = document.querySelectorAll(`[data-theme="${currentTheme}"]`);

    // Update the --detail-A variable within each of these elements
    themeElements.forEach(function(elem) {
        elem.style.setProperty('--detail-A', newColor);
    });
}


// Add event listener to theme toggle checkbox
document.querySelector('#tgl2SmoothCorner #tgl2Toggle4').addEventListener('change', toggleThemeCheckbox);

// Add event listeners to the radio buttons
document.getElementById("light-mode").addEventListener('change', toggleThemeRadio);
document.getElementById("dark-mode").addEventListener('change', toggleThemeRadio);

// Add event listeners to the segmented control buttons
const segmentedButtons = document.querySelectorAll('.segmentedControlButtonTriple span');
segmentedButtons.forEach(button => {
button.parentNode.addEventListener('click', toggleThemeSegmented);
});

// Handle communication with Figma plugin for theme persistence
document.addEventListener('DOMContentLoaded', function() {
// Function to update theme to the plugin
function updateTheme(theme) {
parent.postMessage({ pluginMessage: { type: 'theme-changed', theme } }, '*');
}

// Event listeners for theme changes
document.querySelector('#tgl2SmoothCorner #tgl2Toggle4').addEventListener('change', () => updateTheme(toggleThemeCheckbox() ? 'dark' : 'light'));
document.getElementById("light-mode").addEventListener('change', () => updateTheme('light'));
document.getElementById("dark-mode").addEventListener('change', () => updateTheme('dark'));

segmentedButtons.forEach(button => {
    button.parentNode.addEventListener('click', () => updateTheme(button.textContent.trim().toLowerCase()));
});

// Handle theme change from the plugin
window.onmessage = (event) => {
    const { type, theme } = event.data.pluginMessage;
    if (type === 'set-theme') {
        setTheme(theme);
    }
};
});

// Retrieve and set the initial theme from Figma plugin when the UI loads
parent.postMessage({ pluginMessage: { type: 'request-theme' } }, '*');
// -----------------------------------


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














// COLO2
const colorItems = ["primary", "secondary"];

colorItems.forEach((item) => {
    const colorPicker = document.querySelector(`#${item}ColorPicker`);
    const colorText = document.querySelector(`#${item}ColorText`);
    const colorItem = colorPicker.parentElement;
    const slider = document.querySelector(`#${item}Slider`);
    const opacityValue = document.querySelector(`#${item}OpacityValue`);

    const updateColorItem = () => {
        let opacity = slider.value / 100; 
        let color = colorPicker.value;
        let r = parseInt(color.slice(1, 3), 16),
            g = parseInt(color.slice(3, 5), 16),
            b = parseInt(color.slice(5, 7), 16);
        colorItem.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        opacityValue.value = slider.value;
        console.log(`Frontend - Updating ${item} color to ${color} and opacity to ${opacity}`);
    };

    colorText.addEventListener("input", function(e) {
        e.target.value = e.target.value.toUpperCase().startsWith('#') ? 
                         e.target.value : '#' + e.target.value;
        e.target.value = e.target.value.substring(0, Math.min(7, e.target.value.length));
        colorPicker.value = e.target.value;
        updateColorItem();
    });

    colorPicker.addEventListener("input", function() {
        colorText.value = colorPicker.value.toUpperCase();
        updateColorItem();
    });

    slider.addEventListener('input', function() {
        opacityValue.value = slider.value;
        // Trigger change event
        const event = new Event('change');
        opacityValue.dispatchEvent(event);
    });

    opacityValue.addEventListener('change', updateColorItem);

    // Trigger the input and change events for the initial values
    colorPicker.dispatchEvent(new Event('input'));
    slider.dispatchEvent(new Event('input'));
    opacityValue.dispatchEvent(new Event('change'));
});

// Function to send color and opacity update message
function sendUpdateColorMessage(nodeName, color, opacity) {
    console.log(`Frontend - Sending update message: nodeName=${nodeName}, color=${color}, opacity=${opacity}`);
    parent.postMessage({ pluginMessage: { type: 'update-color', nodeName, color, opacity } }, '*');
}

// Add event listeners to inputs
const primaryColorInput = document.getElementById('primaryColorPicker');
const primaryOpacityInput = document.getElementById('primaryOpacityValue');
const secondaryColorInput = document.getElementById('secondaryColorPicker');
const secondaryOpacityInput = document.getElementById('secondaryOpacityValue');

primaryColorInput.addEventListener('input', function() {
    sendUpdateColorMessage('primary', primaryColorInput.value, primaryOpacityInput.value / 100);
});

primaryOpacityInput.addEventListener('change', function() {
    sendUpdateColorMessage('primary', primaryColorInput.value, primaryOpacityInput.value / 100);
});

secondaryColorInput.addEventListener('input', function() {
    sendUpdateColorMessage('secondary', secondaryColorInput.value, secondaryOpacityInput.value / 100);
    sendUpdateColorMessage('sticker', secondaryColorInput.value, secondaryOpacityInput.value / 100); // Linking sticker to secondary controls
});

secondaryOpacityInput.addEventListener('change', function() {
    sendUpdateColorMessage('secondary', secondaryColorInput.value, secondaryOpacityInput.value / 100);
    sendUpdateColorMessage('sticker', secondaryColorInput.value, secondaryOpacityInput.value / 100); // Linking sticker to secondary controls
});

// COLO2APPLY
const applyButton = document.querySelector('.colo2button');
applyButton.addEventListener('click', function() {
    colorItems.forEach((item) => {
        const colorPicker = document.querySelector(`#${item}ColorPicker`);
        const colorText = document.querySelector(`#${item}ColorText`);
        const colorItem = colorPicker.closest('.colo2ColorItem'); // Select the correct element
        const slider = document.querySelector(`#${item}Slider`);
        const opacityValue = document.querySelector(`#${item}OpacityValue`);
        sendUpdateColorMessage(item, colorPicker.value, opacityValue.value / 100);

        if (item === "secondary") {
            sendUpdateColorMessage('sticker', colorPicker.value, opacityValue.value / 100);
        }
    });
});

function sendUpdateColorMessage(nodeName, color, opacity) {
    const svgIcons = document.querySelectorAll('svg');
    svgIcons.forEach(svg => {
        const hasStrokes = !!svg.querySelector('[stroke]');
        
        if (hasStrokes) {
            console.log(`Frontend - Sending update message with stroke: nodeName=${nodeName}, color=${color}, opacity=${opacity}`);
            parent.postMessage({
                pluginMessage: {
                    type: 'update-color',
                    nodeName,
                    color,
                    opacity,
                    applyTo: 'stroke'
                }
            }, '*');
        } else {
            console.log(`Frontend - Sending update message with fill: nodeName=${nodeName}, color=${color}, opacity=${opacity}`);
            parent.postMessage({
                pluginMessage: {
                    type: 'update-color',
                    nodeName,
                    color,
                    opacity,
                    applyTo: 'fill'
                }
            }, '*');
        }
    });
}

const swapButton = document.getElementById('swapButton');
swapButton.addEventListener('click', function() {
    // Store the current values
    const primaryColor = primaryColorInput.value;
    const secondaryColor = secondaryColorInput.value;
    const primaryOpacity = primaryOpacityInput.value;
    const secondaryOpacity = secondaryOpacityInput.value;
    const primarySlider = document.getElementById('primarySlider');
    const secondarySlider = document.getElementById('secondarySlider');

    // Swap the color values
    primaryColorInput.value = secondaryColor;
    secondaryColorInput.value = primaryColor;

    // Swap the opacity values
    primaryOpacityInput.value = secondaryOpacity;
    secondaryOpacityInput.value = primaryOpacity;

    // Swap the slider values for opacity
    primarySlider.value = secondaryOpacity;
    secondarySlider.value = primaryOpacity;

    // Trigger the input and change events to reflect the change in the UI and nodes
    primaryColorInput.dispatchEvent(new Event('input'));
    secondaryColorInput.dispatchEvent(new Event('input'));
    primaryOpacityInput.dispatchEvent(new Event('change'));
    secondaryOpacityInput.dispatchEvent(new Event('change'));
    primarySlider.dispatchEvent(new Event('input'));
    secondarySlider.dispatchEvent(new Event('input'));
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














  









//SWITCHABLE COLOR PICKER FOR NEO


document.addEventListener('DOMContentLoaded', function() {
        var button = document.getElementById('applyEffectsButton12');
        var visibleColor = document.getElementById('visible-color');
        var colorOptions = Array.from(document.querySelectorAll('#neo-color-picker .color-option'));
        var selectedColorElement = null;

        colorOptions.forEach(function(colorOption) {
            colorOption.addEventListener('click', function(event) {
                selectedColorElement = event.target; // Save selected color element
            });
        });

        // Apply color changes and collapse the button after the mouse leaves
        button.addEventListener('mouseleave', function() {
            if (selectedColorElement) {
                var selectedColor = selectedColorElement.style.backgroundColor;
                var activeColor = visibleColor.firstElementChild.style.backgroundColor;

                // Swap colors
                selectedColorElement.style.backgroundColor = activeColor;
                visibleColor.firstElementChild.style.backgroundColor = selectedColor;

                // Clear selected color element
                selectedColorElement = null;
            }
        });

        // Expand the button when mouse enters
        button.addEventListener('mouseenter', function() {
            button.style.maxWidth = '500px';
        });
    });



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






// FRAME BUTTON


  document.getElementById("applyStyleButton").addEventListener("click", function() {
    parent.postMessage({ pluginMessage: { type: 'applyStyles' } }, '*');
  });


// ----------

// Get all color option buttons
let colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(button => {
    button.addEventListener('click', function () {
        // Convert color style to RGB values
        let rgb = getComputedStyle(button).backgroundColor;
        let rgbValues = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        let color = [parseInt(rgbValues[1]), parseInt(rgbValues[2]), parseInt(rgbValues[3])];

        // Send color to the plugin
        parent.postMessage({ pluginMessage: { type: 'color-selected', color: color } }, '*');
    });
});


document.getElementById('applyEffectsButton12').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('color-option')) {
        const color = getComputedStyle(e.target).backgroundColor;
        const rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        const selectedColor = [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
        parent.postMessage({ pluginMessage: { type: 'apply-effects-12', selectedColor: selectedColor } }, '*');
    } else {
        parent.postMessage({ pluginMessage: { type: 'apply-effects-12' } }, '*');
    }
});

// document.getElementById('neo-custom-color').addEventListener('click', function() {
//     // Simulate a click on the hidden color input when the custom color button is clicked
//     document.getElementById('neo-color-input').click();
// });

// document.getElementById('neo-color-input').addEventListener('input', function(e) {
//     const color = e.target.value;
//     // Update the custom color button to reflect the chosen color
//     document.getElementById('neo-custom-color').style.backgroundColor = color;
//     // Convert the hex color to RGB values
//     const rgb = hexToRgb(color);
//     // Send the color to the Figma plugin
//     parent.postMessage({ pluginMessage: { type: 'apply-effects-12', color: rgb } }, '*');
// });


document.querySelectorAll('.kt2-option').forEach((option) => {
    option.addEventListener('click', function(e) {
        // remove active class from other options
        document.querySelectorAll('.kt2-option').forEach((option) => {
            option.classList.remove('active');
        });

        // add active class to clicked option
        e.target.classList.add('active');

        const frame = document.getElementById('kt2-frame');
        const rect = e.target.getBoundingClientRect();
        const parentRect = e.target.parentNode.getBoundingClientRect();
        const parentStyle = window.getComputedStyle(e.target.parentNode);
        const paddingLeft = parseInt(parentStyle.paddingLeft, 10);

        const newLeft = rect.left - parentRect.left - paddingLeft + rect.width / 2 - frame.offsetWidth / 2 + 20;

        frame.style.left = `${newLeft}px`;
    });
});

// Set initial frame position based on the first option
const firstOption = document.querySelector('.kt2-option');
const frame = document.getElementById('kt2-frame');
const rect = firstOption.getBoundingClientRect();
const parentRect = firstOption.parentNode.getBoundingClientRect();
const parentStyle = window.getComputedStyle(firstOption.parentNode);
const paddingLeft = parseInt(parentStyle.paddingLeft, 10);

const newLeft = rect.left - parentRect.left - paddingLeft + rect.width / 2 - frame.offsetWidth / 2 + 20;
frame.style.left = `${newLeft}px`;

// Set first option as active
firstOption.classList.add('active');
// ----------------------



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

// ICON SELECTION 

let selectionMode = false;
let timeoutId = null;
let justLongPressed = false;
let mouseMoved = false;

document.getElementById('selectionModeButton').addEventListener('click', function() {
    toggleSelectionMode();
});

function updateSelectionNotification() {
    const selectedIcons = document.querySelectorAll('.icon.selected').length;
    const notification = document.getElementById('selected-icon-notification');
    const notificationCount = document.getElementById('notification-count'); // Get the notification count span
    const notificationText = document.getElementById('notification-text'); // Get the notification text span
    const exportText = document.getElementById('export-text'); // Get the Export text span
    const iconCount = document.getElementById('icon-count'); // Get the icon count span

    // Update the text of the Export button
    exportText.textContent = 'Export';
    iconCount.textContent = selectedIcons > 0 ? selectedIcons : ''; // Set the count

    if (selectedIcons > 0 && selectionMode) {
        notification.classList.add('visible');
        notificationCount.textContent = selectedIcons; // Update only the count
        notificationText.textContent = selectedIcons > 1 ? 'icons selected' : 'icon selected'; // Update the text
    } else {
        notification.classList.remove('visible');
    }
}



document.getElementById('selected-icon-notification').addEventListener('click', function(event) {
    const notificationTextContainer = document.getElementById('notification-text-container');
    if (!this.classList.contains('expanded') && event.target.id !== 'exit-selection-button') {
        this.classList.add('expanded');
        // Hide the text container when the notification is expanded
        notificationTextContainer.classList.add('hidden');
    } else {
        // Show the text container only if the notification is not expanded
        if (!this.classList.contains('expanded')) {
            notificationTextContainer.classList.remove('hidden');
        }
    }
});

// Click event for the document
document.addEventListener('click', function(event) {
    const notification = document.getElementById('selected-icon-notification');
    const notificationTextContainer = document.getElementById('notification-text-container');
    if (!notification.contains(event.target) || event.target.id === 'exit-selection-button') {
        notification.classList.remove('expanded');
        // Show the text container only if the notification is not expanded
        if (!notification.classList.contains('expanded')) {
            notificationTextContainer.classList.remove('hidden');
        }
    }
});

document.getElementById('exit-selection-button').addEventListener('click', function(event) {
    event.stopPropagation(); // Stop the click event from propagating to the parent
    toggleSelectionMode();
});

function toggleSelectionMode() {
    selectionMode = !selectionMode;
    
    const enterSelectionMode = document.getElementById('enterSelectionMode');
    const exitSelectionMode = document.getElementById('exitSelectionMode');
    const icons = document.querySelectorAll('.icon');
    const iconCounters = document.querySelectorAll('.icon-number-counter'); // Get all the icon counters
    
    if (selectionMode) {
        enterSelectionMode.style.display = 'none';
        exitSelectionMode.style.display = 'block';
        icons.forEach(icon => icon.classList.add('selectionMode'));
        document.getElementById('selected-icon-notification').classList.add('visible');
    } else {
        enterSelectionMode.style.display = 'block';
        exitSelectionMode.style.display = 'none';
        icons.forEach(icon => {
            icon.classList.remove('selected');
            icon.classList.remove('selectionMode');
        });
        document.getElementById('selected-icon-notification').classList.remove('visible');

        // Reset all .icon-number-counter elements to their default state
        iconCounters.forEach(counter => counter.classList.remove('active'));
    }

    // Toggle the visibility of the blur effect
    const blurEffect = document.getElementById('blur-effect');
    blurEffect.style.visibility = selectionMode ? 'visible' : 'hidden';

    updateSelectionNotification();
}

// Function to toggle selection for a particular icon
function toggleIconSelection(iconElement) {
  if (selectionMode) {
    iconElement.classList.add('selected');
  } else {
    toggleSelectionMode(); // If not in selection mode, enter it
    iconElement.classList.add('selected');
  }
  updateSelectionNotification();
}


let lastClickedIcon = null;

document.querySelectorAll('.icon').forEach((icon, index) => {
    icon.addEventListener('mousedown', function(e) {
        mouseMoved = false;
        timeoutId = setTimeout(() => {
            if(!selectionMode && !mouseMoved){
              toggleSelectionMode();
              this.classList.add('selected');
              lastClickedIcon = this;
              justLongPressed = true;
            }
        }, 600);
    });
    
    icon.addEventListener('mouseup', function(e) {
        clearTimeout(timeoutId);
    });
    icon.addEventListener('mouseleave', function(e) {
        clearTimeout(timeoutId);
    });
    icon.addEventListener('mousemove', function(e) {
        mouseMoved = true;
    });
    icon.addEventListener('click', function(e) {
        if (selectionMode && !justLongPressed) {
            this.classList.toggle('selected');

            if(e.shiftKey && lastClickedIcon !== null) {
                let lastIdx = Array.from(this.parentNode.children).indexOf(lastClickedIcon);
                let currIdx = Array.from(this.parentNode.children).indexOf(this);
                let start = Math.min(lastIdx, currIdx);
                let end = Math.max(lastIdx, currIdx);
                
                for(let i = start; i <= end; i++) {
                    this.parentNode.children[i].classList.add('selected');
                }
            }

            lastClickedIcon = this;
        }

        justLongPressed = false;
        updateSelectionNotification();
    });
});

// ------------------


// ...

// Click event for the document
document.addEventListener('click', function(event) {
    const notification = document.getElementById('selected-icon-notification');
    const moreOptionsContainer = document.querySelector('.more-options-container');
    const horizontalDividerNotification = document.querySelector('.horizontal-divider-notification');

    if (event.target.id === 'more-options-button') {
        // Toggle more options when the button is clicked
        moreOptionsContainer.style.display = moreOptionsContainer.style.display === 'none' ? 'flex' : 'none';
        horizontalDividerNotification.style.display = horizontalDividerNotification.style.display === 'none' ? 'block' : 'none';
    } else if (!notification.contains(event.target) || event.target.id === 'exit-selection-button') {
        // Hide additional elements when clicked outside or on the exit button
        notification.classList.remove('expanded');
        moreOptionsContainer.style.display = 'none'; // Hide the more options container
        horizontalDividerNotification.style.display = 'none'; // Hide the divider
    }
});

// ...




// document.querySelector('.export-icon').addEventListener('click', function() {
//     // Your export functionality here
// });




// CUSTOM-TOOLTIP



// CUSTOM-TOOLTIP
var notificationClicked = false;
var moreOptionsTooltipShown = false;

document.querySelector('#selected-icon-notification').addEventListener('mouseenter', function() {
  if (notificationClicked || this.classList.contains('expanded')) return;

  var element = this;
  setTimeout(function() {
    if (!element.classList.contains('expanded') && !notificationClicked) {
      element.setAttribute('tooltip', 'Click for export options');
    }
  }, 400);
});

document.querySelector('#selected-icon-notification').addEventListener('mouseleave', function() {
  this.setAttribute('tooltip', '');
});

document.querySelector('#selected-icon-notification').addEventListener('click', function() {
  notificationClicked = true;
  this.setAttribute('tooltip', '');
});

document.querySelector('#more-options-button').addEventListener('mouseenter', function() {
  if (moreOptionsTooltipShown) return;

  var element = this;
  setTimeout(function() {
    if (!moreOptionsTooltipShown) {
      element.setAttribute('tooltip', 'More options');
      moreOptionsTooltipShown = true;
    }
  }, 500);
});

document.querySelector('#more-options-button').addEventListener('mouseleave', function() {
  this.setAttribute('tooltip', '');
});


// ------------------



// ------------ [ Divider JS ] ------------
 

// CODE FOR REPLACING ICON PLACEHOLDER ON IMPORT

// CODE FOR REPLACING ICON PLACEHOLDER ON IMPORT

// Code for selecting a placeholder
let selectedPlaceholderId = null;

// Function to be called when an icon is selected in the plugin UI
function onIconSelected(svgElement) {
  const svgContent = svgElement.outerHTML;
  const style = svgElement.getAttribute('data-style'); // Ensure this line is correctly retrieving the data-style
  importAndReplaceSelectedNode(svgContent, style); // Modified to include style as an argument
}

// Function to send the import and replace command to the Figma backend
function importAndReplaceSelectedNode(svgContent) {
  window.parent.postMessage({
    pluginMessage: {
      type: 'import-and-replace-selected',
      content: svgContent
    }
  }, '*');
}

// Add event listeners to your icon elements in the plugin UI
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => onIconSelected(icon.querySelector('svg')));
});



// ------------ [ Divider JS ] ------------
 

let importOption = 'icon'; // Default to importing as icons

document.querySelectorAll('input[name="importOption"]').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    importOption = event.target.value;
    console.log('Import option changed:', importOption);
  });
});

applyStyle();

const sizeSlider = document.getElementById('sizeSlider');

icons.forEach(icon => {
  icon.addEventListener('dragend', handleImport);
  icon.addEventListener('click', (e) => {
    if (selectionMode) return;

    var activeColorItem = document.querySelector('.color-item.active');
    if (!activeColorItem) {
      console.error("No active color item found");
      return;
    }

    var color = getComputedStyle(activeColorItem).getPropertyValue('background-color');
    var size = sizeSlider ? sizeSlider.value : null; // Get the size

    if(importOption === 'component') {
      if (size == 1) {
        size = "16";
      } else if (size == 2) {
        size = "24";
      } else if (size == 3) {
        size = "32";
      } else if (size == 4) {
        size = "48";
      } else if (size == 5) {
        size = "64";
      }
    }

    // Check if the clicked element is an alt-icon
    const isAltIcon = e.target.classList.contains('alt-icon');

    // Import only the clicked SVG
    const svgToImport = isAltIcon ? e.target : icon.querySelector(`svg[data-style="${selectedStyle}"]:not(.alt-icon)`);
    if (svgToImport) {
      if (importOption === 'icon') {
        console.log('Sending message to import single icon');
        window.parent.postMessage({
          pluginMessage: {
            type: 'import',
            content: svgToImport.outerHTML,
            id: isAltIcon ? icon.id + '-alt' : icon.id,
            color: color,
            style: svgToImport.dataset.style,
            importOption: importOption,
            size: size // Pass the size to pluginMessage
          }
        }, '*');
      } else if (importOption === 'component') {
        const svgs = Array.from(icon.querySelectorAll('svg')).map(svg => {
          return {
            content: svg.outerHTML,
            style: svg.dataset.style
          };
        });
        svgs.forEach(svg => {
          console.log('Sending message to import single component');
          window.parent.postMessage({
            pluginMessage: {
              type: 'import',
              content: svg.content,
              id: `${isAltIcon ? icon.id + '-alt' : icon.id} ${size}px`, // include size in the id using space
              color: color,
              style: svg.style,
              importOption: importOption,
              size: size // Pass the size to pluginMessage
            }
          }, '*');
        });
      }
    }
  });
});




function handleImport(e) {
  console.log('handleImport called');

  if (e.view.length === 0) return;

  // Use the DataTransfer object to set the dropEffect property
  e.dataTransfer.dropEffect = "copy"; // Change this to "move" or "link" as needed

  var activeColorItem = document.querySelector('.color-item.active');
  if (!activeColorItem) {
    console.error("No active color item found");
    return;
  }

  var color = getComputedStyle(activeColorItem).getPropertyValue('background-color');
  var size = sizeSlider ? sizeSlider.value : null; // Get the size

  if (importOption === 'component') {
    if (size == 1) {
      size = "16";
    } else if (size == 2) {
      size = "24";
    } else if (size == 3) {
      size = "32";
    } else if (size == 4) {
      size = "48";
    } else if (size == 5) {
      size = "64";
    }
  }


  if (selectionMode) {
    console.log('Handling multiple icons');
    const selectedIcons = document.querySelectorAll('.icon.selected');
    if (selectedIcons.length === 0) return;

    const iconsPerRow = 5; // Adjusted number of icons per row

    selectedIcons.forEach((icon, index) => {
      if (importOption === 'icon') {
        const matchingSvg = icon.querySelector(`svg[data-style="${selectedStyle}"]`);
        if (matchingSvg) {
          const file = new File([matchingSvg.outerHTML], 'content.svg', { type: 'image/svg+xml' });
          console.log('Sending message to import single icon');
          window.parent.postMessage({
            pluginDrop: {
              clientX: e.clientX,
              clientY: e.clientY,
              files: [file],
              dropMetadata: {
                color: color,
                id: icon.id,
                style: matchingSvg.dataset.style,
                size: size,
                index: index, // Pass the index to dropMetadata
                iconsPerRow: iconsPerRow // Pass iconsPerRow to dropMetadata
                          }
          },
        }, '*');
      }
          } else if (importOption === 'component') {
        const svgs = Array.from(icon.querySelectorAll('svg')).map(svg => {
          return {
            content: svg.outerHTML,
            style: svg.dataset.style
          };
        });

        svgs.forEach(svg => {
          console.log('Sending message to import single component');
          window.parent.postMessage({
            pluginMessage: {
              type: 'import',
              content: svg.content,
              id: `${icon.id} ${size}px`, // include size in the id using space
              color: color,
              style: svg.style,
              importOption: importOption
            },
            pluginDrop: {
              clientX: e.clientX + offsetX,
              clientY: e.clientY + offsetY,
              dropMetadata: {
                color: color,
                id: `${icon.id} ${size}px`, // include size in the id using space
                style: svg.style,
                size: size
              }
            },
          }, '*');
        });
      }
    });
  } else {
    if (importOption === 'icon') {
      console.log('Handling single icon');
      const matchingSvg = e.currentTarget.querySelector(`svg[data-style="${selectedStyle}"]`);
      if (matchingSvg) {
        const file = new File([matchingSvg.outerHTML], 'content.svg', { type: 'image/svg+xml' });
        console.log('Sending message to import single icon');
        window.parent.postMessage({
          pluginDrop: {
            clientX: e.clientX,
            clientY: e.clientY,
            files: [file],
            dropMetadata: {
              color: color,
              id: e.currentTarget.id,
              style: matchingSvg.dataset.style,
              size: size
            }
          },
        }, '*');
      }
    } else if (importOption === 'component') {
      console.log('Handling single component');
      const svgs = Array.from(e.currentTarget.querySelectorAll('svg')).map(svg => {
        return {
          content: svg.outerHTML,
          style: svg.dataset.style
        };
      });

      svgs.forEach(svg => {
        console.log('Sending message to import single component');
        window.parent.postMessage({
          pluginMessage: {
            type: 'import',
            content: svg.content,
            id: `${e.currentTarget.id} ${size}px`, // include size in the id using space
            color: color,
            style: svg.style,
            importOption: importOption
          },
          pluginDrop: {
            clientX: e.clientX,
            clientY: e.clientY,
            dropMetadata: {
              color: color,
              id: `${e.currentTarget.id} ${size}px`, // include size in the id using space
              style: svg.style,
              size: size
            }
          },
        }, '*');
      });
    }
  }
}

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






// CANVAS ICON PREVIEW

document.addEventListener("DOMContentLoaded", function() {
  const icons = document.querySelectorAll('.icon, .alt-icon'); // Select both types of icons
  const canvasContainer = document.querySelector('.canvas-container');
  const canvas = document.getElementById('canvas');
  const iconNameDiv = document.getElementById('icon-name');
  const iconSubnameDiv = document.getElementById('icon-subname'); // Sub-name placeholder
  const iconTagsDiv = document.getElementById('icon-tags');
  const downloadButton = document.getElementById('download-button');
  // const importButton = document.getElementById('import-button');
  const toggleButton = document.getElementById('toggle-canvas');

  // // Initially, the canvas functionality is enabled
  // let canvasEnabled = true;


  // Initially, the canvas functionality is disabled
  let canvasEnabled = false;

  // Set initial styles to disable the canvas
  canvasContainer.style.opacity = '0'; // Hide the canvas
  canvasContainer.style.maxHeight = '0px'; // Collapse the container

  // Function to display an icon inside the canvas
  function displayIcon(icon) {
    const iconContent = icon.innerHTML; // Get the inner HTML content of the main icon
    const iconName = icon.id ? icon.id.charAt(0).toUpperCase() + icon.id.slice(1) : ''; // Capitalize the first letter of the ID
    const iconTags = icon.getAttribute('data-id') ? icon.getAttribute('data-id').split(', ').slice(0, 4) : []; // Get the first 4 tags

    // Clear the content of the canvas
    canvas.innerHTML = '';

    // Append the main icon to the canvas
    canvas.innerHTML += `<div id="preview-icon">${iconContent}</div>`;

    // Set the name
    iconNameDiv.textContent = iconName;

    // Set the sub-name (placeholder)
    iconSubnameDiv.textContent = 'fa-icon-grid'; // Placeholder sub-name

    // Clear previous tags and set the new ones (up to 4)
    iconTagsDiv.innerHTML = '';
    iconTags.forEach(tag => {
      const tagDiv = document.createElement('div');
      tagDiv.className = 'icon-tag';
      tagDiv.textContent = tag;
      tagDiv.addEventListener('click', function() {
        if (tagDiv.classList.contains('active-tag')) {
          // If the tag is already active, deactivate it and clear the search bar
          tagDiv.classList.remove('active-tag');
          iconSearch.value = ''; // Uncomment if using search functionality
          showPlaceholderIcon(); // Uncomment if needed
          toggleClearButton(); // Uncomment if needed
        } else {
          // If the tag is not active, deactivate other tags and activate the clicked tag
          document.querySelectorAll('.icon-tag').forEach(t => t.classList.remove('active-tag'));
          tagDiv.classList.add('active-tag');
          iconSearch.value = tag; // Uncomment if using search functionality
          hidePlaceholderIcon(); // Uncomment if needed
          toggleClearButton(); // Uncomment if needed
        }
        // Call the filterIcons function to filter the icons
        filterIcons(); // Uncomment if needed
      });
      iconTagsDiv.appendChild(tagDiv);
    });
  }

  // Display the first icon by default
  displayIcon(icons[0]);

  // Toggle the canvas display on button click
  toggleButton.addEventListener('click', function() {
    canvasEnabled = !canvasEnabled;
    if (canvasEnabled) {
      canvasContainer.style.opacity = '1'; // Show the canvas
      canvasContainer.style.maxHeight = '150px'; // Set the max-height to the original value
    } else {
      canvasContainer.style.opacity = '0'; // Hide the canvas
      canvasContainer.style.maxHeight = '0px'; // Collapse the container
    }
  });

  // Download button click event (add functionality as needed)
  downloadButton.addEventListener('click', function() {
    // Download functionality here
  });

  icons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
      // If the canvas is disabled, do nothing
      if (!canvasEnabled) return;

      // Display the hovered icon
      displayIcon(icon);
    });
  });


  // Add the transition style to the container
  const container = document.querySelector('.container');
  container.style.transition = ' transform 0.3s ease-in-out';

  let ticking = false;
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const currentScrollTop = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
        // Scrolling down
        container.style.transform = 'translateY(0)';
      } else if (currentScrollTop < lastScrollTop || currentScrollTop === 0) {
        // Scrolling up or at the top
        container.style.transform = 'translateY(38px)';
      }

      // When scroll is at the top, reset transform
      if (currentScrollTop === 0) {
        container.style.transform = 'none';
      }

      lastScrollTop = currentScrollTop;
      ticking = false;
    });

    ticking = true;
  }
});

});

// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const previewElement = document.getElementById("preview");
  const toggleButton = document.getElementById("togglePreviewButton");

  // Set initial states
  toggleButton.textContent = "Hide Preview";
  previewElement.style.display = "flex";  // Explicitly set initial display state
  toggleButton.style.marginTop = "0";  // No margin when preview is shown

  toggleButton.addEventListener("click", () => {
    if (previewElement.style.display === "flex") {
      previewElement.style.display = "none";
      toggleButton.textContent = "Show Preview";
      toggleButton.style.marginTop = "20px";  // Add margin when preview is hidden
    } else {
      previewElement.style.display = "flex";
      toggleButton.textContent = "Hide Preview";
      toggleButton.style.marginTop = "0";  // Remove margin when preview is shown
    }
  });
});



// PATTERN BUTTON


// let patternButton = document.createElement('button');
// patternButton.id = 'patternButton';
// // patternButton.innerHTML = `<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
// // <path fill-rule="evenodd" clip-rule="evenodd" d="M0.585786 0.585786C0 1.17157 0 2.11438 0 4V6C0 7.88562 0 8.82843 0.585786 9.41421C1.17157 10 2.11438 10 4 10H8C9.88562 10 10.8284 10 11.4142 9.41421C12 8.82843 12 7.88562 12 6V4C12 2.11438 12 1.17157 11.4142 0.585786C10.8284 0 9.88562 0 8 0H4C2.11438 0 1.17157 0 0.585786 0.585786ZM3.19031 7.99994H4.50849L4.94009 6.67324H7.0408L7.47156 7.99994H8.78974L6.78406 2.18176H5.19883L3.19031 7.99994ZM6.72903 5.71301L6.01417 3.51131H5.96872L5.25247 5.71301H6.72903Z" fill="#6D6D6D"/></svg>`;

// document.body.appendChild(patternButton);

patternButton.addEventListener('click', function() {
  console.log("Pattern button clicked"); // Add this line
    let selectedIcons = document.querySelectorAll('.icon.selected');
  if (selectedIcons.length === 0) return;

  const patternSize = 6; // Number of repeats in the pattern
  const spacing = 100; // Spacing between icons in the pattern

  selectedIcons.forEach((icon, index) => {
    const x = (index % patternSize) * spacing; // x coordinate for the icon
    const y = Math.floor(index / patternSize) * spacing; // y coordinate for the icon

    const matchingSvg = icon.querySelector(`svg[data-style="${selectedStyle}"]`);
    if (matchingSvg) {
      console.log('Sending message to import single icon for pattern');
      window.parent.postMessage({
        pluginMessage: {
          type: 'import',
          content: matchingSvg.outerHTML,
          id: icon.id,
          color: color,
          style: matchingSvg.dataset.style,
          importOption: importOption,
          size: size,
          position: { x, y } // Pass the position for the icon in the pattern
        }
      }, '*');
    }
  });
});












// SWITCH STYLE



const tabs = document.querySelectorAll(".tab a");
tabs.forEach(tab => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();

    tabs.forEach(tab => {
      tab.classList.remove("active");
    });

    event.target.classList.add("active");
    selectedStyle = event.target.dataset.tab;

    applyStyle();
    filterIcons();  // Add this line
  });
});


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

      let sizeChanged = false;



      // --------------
      // SEARCH BAR


      function filterIcons() {
  const term = iconSearch.value.toLowerCase();
  let displayedCategories = new Set(); // Store the categories that have displayed icons

  icons.forEach(icon => {
    const id = icon.id.toLowerCase();
    const dataId = icon.dataset.id.toLowerCase().split(", ");
    const matchingSvg = icon.querySelector(`svg[data-style="${selectedStyle}"]`);
    const category = icon.closest('.icons-grid').dataset.id.toLowerCase();
    const categoryPanel = document.querySelector(`.category-panel[data-id="${category}"]`);
    const categoryName = categoryPanel.querySelector('.category-name').textContent.toLowerCase();

    // Check if the search term matches the category name, icon ID, or any value in data-id
    if ((categoryName.startsWith(term) || id.startsWith(term) || dataId.some(item => item.startsWith(term))) && matchingSvg) {
      icon.style.display = "inline-flex";
      displayedCategories.add(category); // Add the category to the set of displayed categories
    } else {
      icon.style.display = "none";
    }
  });

  // Handle the display of category panels
  const categoryPanels = document.querySelectorAll('.category-panel');
  categoryPanels.forEach(panel => {
    const category = panel.dataset.id.toLowerCase();

    // Only display the panel if its category has displayed icons
    if (displayedCategories.has(category)) {
      panel.style.display = "flex"; // Show the category panel
    } else {
      panel.style.display = "none"; // Hide the category panel
    }
  });

  const noResultsMessage = document.getElementById('no-results-container');
  noResultsMessage.style.display = displayedCategories.size === 0 ? "block" : "none";
}

const iconSearch = document.getElementById('searchBox');
iconSearch.addEventListener('input', filterIcons);

// ... rest of the code ...

// ... rest of the code ...

      function adjustIconSize() {
        icons.forEach(icon => {
          icon.classList.remove('small', 'large');
          icon.classList.add(selectedSize);
        });
      }
    
      const sizes = document.querySelectorAll('.size-selector .size');
      sizes.forEach(size => {
        size.addEventListener('click', function(e) {
          e.preventDefault();
          selectedSize = this.dataset.size;
          sizes.forEach(size => size.classList.remove('active'));
          this.classList.add('active');
          adjustIconSize();
        });
      });

      // ---------

      function clearInput() {
        const searchBox = document.getElementById('searchBox');
        searchBox.value = '';
        toggleClearButton();
        if (!sizeChanged) {
          showPlaceholderIcon();
        }
        filterIcons(); // call your function to filter the icons
      }

      function toggleClearButton() {
        const searchBox = document.getElementById('searchBox');
        const clearButton = document.querySelector('.clear-button');
        if (searchBox.value.length > 0) {
          clearButton.style.display = 'block';
        } else {
          clearButton.style.display = 'none';
        }
      }

      function hidePlaceholderIcon() {
        const icon = document.querySelector('.placeholder-icon');
        icon.classList.add('hide');
      }

      function showPlaceholderIcon() {
        const searchBox = document.getElementById('searchBox');
        if (searchBox.value.length === 0 && !document.activeElement.isEqualNode(searchBox) && !sizeChanged) {
          const icon = document.querySelector('.placeholder-icon');
          icon.classList.remove('hide');
        }
      }

      // when the size changes
      function sizeChange() {
        sizeChanged = true;
        // your existing code here
      }
      

      
// STROKE SLIDER
document.getElementById('strokeWidthSlider').oninput = function() {
    let value = this.value;

    // Convert the value to stroke width
    let strokeWidth;
    if (value == 1) {
      strokeWidth = "0";
    } else if (value == 2) {
      strokeWidth = "1";
    } else if (value == 3) {
      strokeWidth = "1.5";
    } else if (value == 4) {
      strokeWidth = "2";
    }

    // Update the displayed value
    document.getElementById('currentValue').innerText = strokeWidth + "pt";

    // Select all paths in all SVGs and set their stroke width
    let paths = document.querySelectorAll('.icon svg path');
    paths.forEach(function(path) {
      path.setAttribute('stroke-width', strokeWidth);
    });

    /*
    // Update the SVG elements inside .icon
    let svgs = document.querySelectorAll('.icon svg');
    svgs.forEach(function(svg) {
      if (strokeWidth === "1") {
        svg.classList.add('offset');
      } else {
        svg.classList.remove('offset');
      }
    });
    */
}

  // Keep existing code above this line

  // ADD FILL NONE TO EVERY PATH
  window.addEventListener('DOMContentLoaded', (event) => {
    const paths = document.querySelectorAll('.icon svg path');

    paths.forEach(path => {
      if (path.getAttribute('stroke') && !path.getAttribute('fill')) {
        path.setAttribute('fill', 'none');
      }
    });
    
    const linecapOption = document.getElementById('linecap');
    linecapOption.addEventListener('change', function() {
      applyLinecap(this.value);
    });

    applyLinecap('round');
  });

  function applyLinecap(linecapValue) {
    const paths = document.querySelectorAll('.icon svg path');
    paths.forEach(path => {
      path.setAttribute('stroke-linecap', linecapValue);
    });
  }

  // Stroke cap options
const linecapOptions = document.querySelectorAll('.linecap-option');
linecapOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options
        linecapOptions.forEach(opt => opt.classList.remove('active'));

        // Add active class to clicked option
        this.classList.add('active');

        // Get the value of the clicked option
        let linecapValue = this.dataset.value;

        // Apply the value to all SVG paths
        let paths = document.querySelectorAll('.icon svg path');
        paths.forEach(path => {
            path.setAttribute('stroke-linecap', linecapValue);
        });
    });
});

// Stroke join options
const linejoinOptions = document.querySelectorAll('.linejoin-option');
linejoinOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options
        linejoinOptions.forEach(opt => opt.classList.remove('active'));

        // Add active class to clicked option
        this.classList.add('active');

        // Get the value of the clicked option
        let linejoinValue = this.dataset.value;

        // Apply the value to all SVG paths
        applyLinejoin(linejoinValue);
    });
});

function applyLinejoin(linejoinValue) {
    const paths = document.querySelectorAll('.icon svg path');
    paths.forEach(path => {
        path.setAttribute('stroke-linejoin', linejoinValue);
    });
}

function initializeDropdown() {
  let dropdowns = document.querySelectorAll('.ut2-dropdown');

  dropdowns.forEach((dropdown) => {
    let btn = dropdown.querySelector('.ut2-dropbtn');
    let content = dropdown.querySelector('.ut2-dropdown-content');

    // Set button text to the text of the first link
    let firstLink = content.querySelector('.ut2-dropdown-link');
    if (firstLink) {
      btn.querySelector('span').textContent = firstLink.textContent;
    }

    // Show/hide dropdown content on button click
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      
      // Hide all other dropdown contents
      let allContents = document.querySelectorAll('.ut2-dropdown-content');
      allContents.forEach((dropdownContent) => {
        if (dropdownContent !== content) {
          dropdownContent.style.display = 'none';
        }
      });

      // Toggle display of this dropdown's content
      content.style.display = (content.style.display === 'block') ? 'none' : 'block';

      // If the dropdown is now visible, scroll it into view
      if (content.style.display === 'block') {
        content.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }
    });

    // Change button text and hide dropdown on link click
    let links = dropdown.querySelectorAll('.ut2-dropdown-link');
    links.forEach((link) => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        btn.querySelector('span').textContent = this.textContent;
        content.style.display = 'none';
      });
    });
  });

  // Hide dropdown content when clicking outside
  window.addEventListener('click', function() {
    let contents = document.querySelectorAll('.ut2-dropdown-content');
    contents.forEach((content) => {
      content.style.display = 'none';
    });
  });
}

window.onload = function() {
    // Initialize the plugin
    function initialize() {
        // Stroke width slider
        let slider = document.getElementById('strokeWidthSlider');
        slider.value = 3;
        slider.oninput();

        // Size slider
        let sizeSlider = document.getElementById('sizeSlider');
        sizeSlider.value = 1;
        sizeSlider.oninput();

        // Apply the active stroke-linecap option
        let activeLinecapOption = document.querySelector('.linecap-option.active').dataset.value;
        applyLinecap(activeLinecapOption);
        
        // Apply the active stroke-linejoin option
        let activeLinejoinOption = document.querySelector('.linejoin-option.active').dataset.value;
        applyLinejoin(activeLinejoinOption);
        
     // Set default corner radius
let radiusSlider = document.getElementById('cornerRadiusSlider');
radiusSlider.value = 2;
radiusSlider.oninput();
    }
    
    // Apply the active stroke-linecap option
    let activeLinecapOption = document.querySelector('.linecap-option.active').dataset.value;
    applyLinecap(activeLinecapOption);

    // Apply the active stroke-linejoin option
    let activeLinejoinOption = document.querySelector('.linejoin-option.active').dataset.value;
    applyLinejoin(activeLinejoinOption);

    // Call the initialize function.
    initialize();

    // Initialize the dropdown
    initializeDropdown();
    }


// STROKE WIDTH SLIDER FOR FIGMA NODES


// Initialize a flag to true
let isFirstLoadStrw = true;
let isFirstLoadSizing = true;
let isFirstLoad = true;

// Stroke Width Slider
document.getElementById('strokeWidthSlider-strw').oninput = function() {
  if (isFirstLoadStrw) {
    isFirstLoadStrw = false;
    return;
  }
  let value = this.value;
  let strokeWidth = value / 2;
  document.getElementById('currentStrokeWidthValue-strw').value = strokeWidth;
  parent.postMessage({ pluginMessage: { type: 'apply-stroke-width', value: strokeWidth } }, '*');
}

// // Stroke Width Apply Button
// document.getElementById('applyButton-strw').addEventListener('click', function() {
//   const strokeWidthValue = document.getElementById('strokeWidthSlider-strw').value / 2;
//   parent.postMessage({ pluginMessage: { type: 'apply-stroke-width', value: strokeWidthValue } }, '*');
// });

// Corner Radius Slider
document.getElementById('cornerRadiusSlider').oninput = function() {
  if (isFirstLoad) {
    isFirstLoad = false;
    return;
  }
  let value = this.value;
  let cornerRadius = value;
  document.getElementById('currentRadiusValue').value = cornerRadius;
  parent.postMessage({ pluginMessage: { type: 'apply-radius', value: cornerRadius } }, '*');
}

// Corner Smoothing Toggle
document.getElementById('tgl2Toggle3').onchange = function() {
  let value = this.checked ? 1 : 0;
  parent.postMessage({ pluginMessage: { type: 'apply-smoothing', value: value } }, '*');
};

// // Corner Radius Apply Button
// document.getElementById('applyButton').addEventListener('click', function() {
//   const radiusValue = document.getElementById('cornerRadiusSlider').value;
//   const smoothValue = document.getElementById('tgl2Toggle3').checked ? 1 : 0;
//   parent.postMessage({ pluginMessage: { type: 'apply-radius', value: radiusValue } }, '*');
//   parent.postMessage({ pluginMessage: { type: 'apply-smoothing', value: smoothValue } }, '*');
// });

// Auto-highlight text when input gains focus
document.getElementById('currentStrokeWidthValue-strw').addEventListener('focus', function() {
  this.select();
});

document.getElementById('currentRadiusValue').addEventListener('focus', function() {
  this.select();
});


// Function to handle manual input for Stroke Width
document.getElementById('currentStrokeWidthValue-strw').addEventListener('change', function() {
    let value = this.value.replace("px", "");
    let strokeWidth = Number(value) * 2; // Convert to original scale
    document.getElementById('strokeWidthSlider-strw').value = strokeWidth;
    parent.postMessage({ pluginMessage: { type: 'apply-stroke-width', value: Number(value) } }, '*');
  });
  
  // Function to handle manual input for Corner Radius
  document.getElementById('currentRadiusValue').addEventListener('input', function() {
    let cornerRadius = parseFloat(this.value);
    if (!isNaN(cornerRadius)) {
      document.getElementById('cornerRadiusSlider').value = cornerRadius;
      parent.postMessage({ pluginMessage: { type: 'apply-radius', value: cornerRadius } }, '*');
    }
  });


////////////////////////////////

const flipHorizontalButton = document.getElementById('flipHorizontalButton');
const flipVerticalButton = document.getElementById('flipVerticalButton');

// Flip horizontal button functionality
flipHorizontalButton.addEventListener('click', function() {
  window.parent.postMessage({ pluginMessage: { type: 'flipHorizontal' } }, '*');
});

// Flip vertical button functionality
flipVerticalButton.addEventListener('click', function() {
  window.parent.postMessage({ pluginMessage: { type: 'flipVertical' } }, '*');
});

// ---------------

// SHIFT + V





// ROTATION
const rotationSlider = document.getElementById('rotation');
const rotationValue = document.getElementById('rotationValue');
const rotationIncrementButton = document.getElementById('rotationIncrementButton');
const rotationDecrementButton = document.getElementById('rotationDecrementButton');

// Update the input field when the rotation slider changes
rotationSlider.addEventListener('input', function() {
  const rotationVal = this.value;
  rotationValue.value = rotationVal;
  // Replace the following line with the actual function to rotate the icon
  window.parent.postMessage({ pluginMessage: { type: 'rotate', value: rotationVal } }, '*');
});

// Update the slider when the input field changes
rotationValue.addEventListener('input', function() {
  let value = Number(this.value);
  
  // Check for NaN and set the value to 0 if NaN
  if (isNaN(value)) {
    value = 0;
  }
  
  rotationSlider.value = value;
  // Replace the following line with the actual function to rotate the icon
  window.parent.postMessage({ pluginMessage: { type: 'rotate', value: value } }, '*');
});

// Rotation Stepper
rotationIncrementButton.addEventListener('click', function() {
  let currentVal = Number(rotationValue.value);
  if (currentVal < 360) {
    rotationValue.value = currentVal + 1;
    rotationValue.dispatchEvent(new Event('input')); // Manually dispatch the input event
  }
});

rotationDecrementButton.addEventListener('click', function() {
  let currentVal = Number(rotationValue.value);
  if (currentVal > 0) {
    rotationValue.value = currentVal - 1;
    rotationValue.dispatchEvent(new Event('input')); // Manually dispatch the input event
  }
});

///////////////////////////////////////////////////


// SKEW
const skewXSlider = document.getElementById('skewX');
const skewYSlider = document.getElementById('skewY');
const skewXValue = document.getElementById('skewXValue');
const skewYValue = document.getElementById('skewYValue');
const SkewIncrementButton = document.getElementById('SkewIncrementButton');
const SkewDecrementButton = document.getElementById('SkewDecrementButton');
// Initialize variables for Skew Y Stepper
const SkewYIncrementButton = document.getElementById('SkewYIncrementButton');
const SkewYDecrementButton = document.getElementById('SkewYDecrementButton');

let lastAppliedPreset = "";

// Update the input field when the slider changes
skewXSlider.addEventListener('input', function() {
  const skewValueX = this.value;
  skewXValue.value = skewValueX;
  window.parent.postMessage({ pluginMessage: { type: 'skewX', value: skewValueX } }, '*');
});

skewYSlider.addEventListener('input', function() {
  const skewValueY = this.value;
  skewYValue.value = skewValueY;
  window.parent.postMessage({ pluginMessage: { type: 'skewY', value: skewValueY } }, '*');
});

// Update the slider when the input field changes
skewXValue.addEventListener('input', function() {
  let value = Number(this.value);
  if (isNaN(value)) { value = 0; }
  skewXSlider.value = value;
  window.parent.postMessage({ pluginMessage: { type: 'skewX', value: value } }, '*');
});

skewYValue.addEventListener('input', function() {
  skewYSlider.value = this.value;
  window.parent.postMessage({ pluginMessage: { type: 'skewY', value: this.value } }, '*');
});

function applyPreset(skewX, skewY) {
  const presetKey = `skewX:${skewX},skewY:${skewY}`;
  if (lastAppliedPreset !== presetKey) {
    lastAppliedPreset = presetKey;
    window.parent.postMessage({ pluginMessage: { type: 'reset-skew' } }, '*');
    skewXSlider.value = skewX;
    skewYSlider.value = skewY;
    skewXValue.value = skewX;
    skewYValue.value = skewY;
    skewXSlider.dispatchEvent(new Event('input'));
    skewYSlider.dispatchEvent(new Event('input'));
  } else {
    console.log("This preset is already applied.");
  }
}

// Skew X Stepper
SkewIncrementButton.addEventListener('click', function() {
  adjustValue(skewXValue, 1);
});

SkewDecrementButton.addEventListener('click', function() {
  adjustValue(skewXValue, -1);
});

// Skew Y Stepper
SkewYIncrementButton.addEventListener('click', function() {
  adjustValue(skewYValue, 1);
});

SkewYDecrementButton.addEventListener('click', function() {
  adjustValue(skewYValue, -1);
});

// Helper function to adjust values
function adjustValue(element, delta) {
  let currentValue = Number(element.value);
  if (isNaN(currentValue)) { currentValue = 0; }
  let newValue = currentValue + delta;
  if (newValue >= -45 && newValue <= 45) {
    element.value = newValue;
    element.dispatchEvent(new Event('input'));
  }
}

// Preset buttons
document.getElementById("preset-isometric").addEventListener('click', () => applyPreset(40, -25));
document.getElementById("preset-isometric-left").addEventListener('click', () => applyPreset(-40, 25));
document.getElementById("preset-30").addEventListener('click', () => applyPreset(25, -15));
document.getElementById("preset-45").addEventListener('click', () => applyPreset(35, -25));
document.getElementById("preset-60").addEventListener('click', () => applyPreset(20, 0));
document.getElementById("preset-reset").addEventListener('click', () => applyPreset(0, 0));


// -------

document.getElementById("preset-reset").addEventListener('click', function() {
    applyPreset(0, 0); // Reset skew
    window.parent.postMessage({ pluginMessage: { type: 'resetFlips' } }, '*'); // Reset flips
});


// ---------------




let isProportionalScalingEnabled = true;

document.addEventListener('DOMContentLoaded', function() {
  let isProportionalScalingEnabled = true;

  document.getElementById('tgl2ToggleProportional').addEventListener('change', function() {
    isProportionalScalingEnabled = this.checked;
  });

  // For sizing
  const sizingValueInputs = document.querySelectorAll('.currentSizingValue');
  const sizingSliders = document.querySelectorAll('.sizing-slider');
  const sizes = [16, 24, 32, 48, 64, 96];

  // Sizing Inputs and Sliders
  sizingValueInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.select();
    });

    input.addEventListener('input', function() {
      let enteredSize = parseInt(this.value);
      if (!isNaN(enteredSize)) {
        const sliderValue = sizes.indexOf(enteredSize);
        if (sliderValue !== -1) {
          sizingSliders.forEach(slider => slider.value = sliderValue);
        }
        sizingValueInputs.forEach(otherInput => otherInput.value = enteredSize);
        parent.postMessage({ pluginMessage: { type: 'apply-sizing', value: enteredSize, isProportionalScalingEnabled } }, '*');
      }
    });
  });

  sizingSliders.forEach(slider => {
    slider.addEventListener('input', function() {
      let sliderValue = parseInt(this.value);
      if (!isNaN(sliderValue)) {
        let selectedSize = sizes[sliderValue];
        sizingValueInputs.forEach(input => input.value = selectedSize);
        parent.postMessage({ pluginMessage: { type: 'apply-sizing', value: selectedSize, isProportionalScalingEnabled } }, '*');
      }
    });
  });

  // Stroke Inputs and Slider
  const strokeValueInputs = document.querySelectorAll('#stroke-customizer .currentStrokeValue');
  const strokeSlider = document.getElementById('strokeWidthSlider-strw');

  strokeValueInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.select();
    });

    input.addEventListener('input', function() {
      let enteredStroke = parseFloat(this.value);
      if (!isNaN(enteredStroke) && enteredStroke >= 0.25 && enteredStroke <= 8) {
        strokeSlider.value = enteredStroke;
        strokeValueInputs.forEach(otherInput => otherInput.value = enteredStroke);
        // Ensure the message type matches what your plugin expects
        parent.postMessage({ pluginMessage: { type: 'apply-stroke-width', value: enteredStroke } }, '*');
      }
    });
  });

  strokeSlider.addEventListener('input', function() {
    let sliderValue = parseFloat(this.value);
    if (!isNaN(sliderValue)) {
      strokeValueInputs.forEach(input => input.value = sliderValue);
      parent.postMessage({ pluginMessage: { type: 'apply-stroke-width', value: sliderValue } }, '*');
    }
  });

// For corner radius
const cornerValueInput = document.getElementById('currentRadiusValue');
const cornerSlider = document.getElementById('cornerRadiusSlider');

cornerValueInput.addEventListener('input', function() {
  let cornerRadius = parseFloat(this.value);
  if (!isNaN(cornerRadius)) {
    cornerSlider.value = cornerRadius;
    parent.postMessage({ pluginMessage: { type: 'apply-radius', value: cornerRadius } }, '*');
  }
});

cornerSlider.addEventListener('input', function() {
  let sliderValue = parseFloat(this.value);
  if (!isNaN(sliderValue)) {
    cornerValueInput.value = sliderValue;
    parent.postMessage({ pluginMessage: { type: 'apply-radius', value: sliderValue } }, '*');
  }
});

  
  // Sizing Apply Button
  document.getElementById('applyButton-sizing').addEventListener('click', function() {
    const sliderValue = document.getElementById('sizingSlider').value;
    const sizingValue = sizes[sliderValue];
    parent.postMessage({ pluginMessage: { type: 'apply-sizing', value: sizingValue, isProportionalScalingEnabled } }, '*');
  });
});


// --------------------


// HOVER TO REVEAL CONTROLS - MAIN-BACKGROUND-CONTAINER

let lastExpandedContainer = null;

const mainContainers = document.querySelectorAll('.main-background-container');

mainContainers.forEach((mainContainer) => {
  mainContainer.addEventListener('mouseenter', function() {
    if (lastExpandedContainer && lastExpandedContainer !== mainContainer) {
      lastExpandedContainer.classList.remove('expanded');
    }
    mainContainer.classList.add('expanded');
    lastExpandedContainer = mainContainer;
  });
});


// let lastExpandedContainer = null;

// const mainContainers = document.querySelectorAll('.main-background-container');

// mainContainers.forEach((mainContainer) => {
//   mainContainer.addEventListener('mouseenter', function() {
//     if (lastExpandedContainer && lastExpandedContainer !== mainContainer) {
//       lastExpandedContainer.classList.remove('expanded');
//     }
//     mainContainer.classList.add('expanded');
//     lastExpandedContainer = mainContainer;
//   });

//   mainContainer.addEventListener('mouseleave', function() {
//     mainContainer.classList.remove('expanded');
//   });
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

// PREVIEW WINDOW

const svgIconMap = {
'apply-effects': `<svg width="126" height="126" viewBox="0 0 126 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_di_631_10)">
<path d="M51 36V87" stroke="#F76ECC" stroke-width="6" stroke-linejoin="round"/>
</g>
<g filter="url(#filter1_di_631_10)">
<path d="M102 36H24" stroke="#F76ECC" stroke-width="6" stroke-linejoin="round"/>
</g>
<g filter="url(#filter2_bii_631_10)">
<path d="M88.0294 82.9706C84.5611 86.4389 82.8269 88.1731 80.6216 89.0866C78.4164 90 75.9639 90 71.0589 90H45C33.6863 90 28.0294 90 24.5147 86.4853C21 82.9706 21 77.3137 21 66V30C21 18.6863 21 13.0294 24.5147 9.51472C28.0294 6 33.6863 6 45 6H81C92.3137 6 97.9706 6 101.485 9.51472C105 13.0294 105 18.6863 105 30V56.0589C105 60.9639 105 63.4164 104.087 65.6216C103.173 67.8269 101.439 69.5611 97.9706 73.0294L88.0294 82.9706Z" stroke="#F76ECC" stroke-opacity="0.18" stroke-width="6" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_di_631_10" x="24" y="12" width="54" height="99" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="12"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.431373 0 0 0 0 0.8 0 0 0 0.22 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_631_10"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_631_10" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.8" dy="1.8"/>
<feGaussianBlur stdDeviation="0.9"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_631_10"/>
</filter>
<filter id="filter1_di_631_10" x="0" y="9" width="126" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="12"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.431373 0 0 0 0 0.8 0 0 0 0.22 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_631_10"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_631_10" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.8" dy="1.8"/>
<feGaussianBlur stdDeviation="0.9"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_631_10"/>
</filter>
<filter id="filter2_bii_631_10" x="6" y="-9" width="114" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="6"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_631_10"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_631_10" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.54" dy="0.6"/>
<feGaussianBlur stdDeviation="0.3"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.92549 0 0 0 0 0.976471 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_631_10"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.6" dy="-0.6"/>
<feGaussianBlur stdDeviation="1.8"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.431373 0 0 0 0 0.8 0 0 0 0.55 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_631_10" result="effect3_innerShadow_631_10"/>
</filter>
</defs>
</svg>

`
,

'apply-effects-2': `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_177_1291)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 56C0 38.3269 14.3269 24 32 24H96C113.673 24 128 38.3269 128 56V96C128 113.673 113.673 128 96 128H32C14.3269 128 0 113.673 0 96V56ZM32 40C23.1634 40 16 47.1634 16 56V96C16 104.837 23.1634 112 32 112H96C104.837 112 112 104.837 112 96V56C112 47.1634 104.837 40 96 40H32Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 0C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40C27.5817 40 24 36.4183 24 32V8C24 3.58172 27.5817 0 32 0Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C68.4183 0 72 3.58172 72 8V32C72 36.4183 68.4183 40 64 40C59.5817 40 56 36.4183 56 32V8C56 3.58172 59.5817 0 64 0Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M96 0C100.418 0 104 3.58172 104 8V32C104 36.4183 100.418 40 96 40C91.5817 40 88 36.4183 88 32V8C88 3.58172 91.5817 0 96 0Z" fill="#D9D9D9"/>
<rect x="7.5" y="32.5" width="112" height="87" rx="24.5" stroke="#2F80ED"/>
<path d="M32 8L32 32" stroke="#2F80ED"/>
<path d="M64 8L64 32" stroke="#2F80ED"/>
<path d="M96 8L96 32" stroke="#2F80ED"/>
<circle cx="96" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="64" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="32" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="96" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="64" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="32" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
</g>
<defs>
<clipPath id="clip0_177_1291">
<rect width="128" height="128" rx="1" fill="white"/>
</clipPath>
</defs>
</svg>`, 

'apply-effects-3': `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 64C8 48.9151 8 41.3726 12.6863 36.6863C17.3726 32 24.9151 32 40 32H88C103.085 32 110.627 32 115.314 36.6863C120 41.3726 120 48.9151 120 64V88C120 103.085 120 110.627 115.314 115.314C110.627 120 103.085 120 88 120H40C24.9151 120 17.3726 120 12.6863 115.314C8 110.627 8 103.085 8 88V64Z" stroke="#D9D9D9" stroke-width="12" stroke-linecap="square"/>
<path d="M32 8V32" stroke="#D9D9D9" stroke-width="12" stroke-linecap="square"/>
<path d="M64 8V32" stroke="#D9D9D9" stroke-width="12" stroke-linecap="square"/>
<path d="M96 8V32" stroke="#D9D9D9" stroke-width="12" stroke-linecap="square"/>
<rect x="7.5" y="32.5" width="112" height="87" rx="15.5" stroke="#2F80ED"/>
<path d="M32 8.5L32 32.5" stroke="#2F80ED"/>
<path d="M64 8L64 32" stroke="#2F80ED"/>
<path d="M96 8.5L96 32.5" stroke="#2F80ED"/>
<circle cx="96" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="64" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="32" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="96" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="64" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="32" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
</svg>
`,
};




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



// SCROLL-BACK BUTTON

// //Get the button:
// mybutton = document.getElementById("scrollToTopBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   window.scrollTo({top: 0, behavior: 'smooth'});
// }

// COLOR PICKER

// // Function to change the color of the icons and the active color indicator
// function changeIconColor(color, element) {
//     // If an element was provided (i.e., a color item was clicked), update the active color indicator
//     if (element) {
//         // Remove 'active' class from all color items
//         let colorItems = document.querySelectorAll('.color-item');
//         for (let item of colorItems) {
//             item.classList.remove('active');
//         }

//         // Add 'active' class to the clicked color item
//         element.classList.add('active');
//     }
    
//     // Change the color of the icons
//     var icons = document.querySelectorAll('.icon svg *'); // select all child elements within .icon svg
//     icons.forEach(function(icon) {
//         // If the icon has a stroke-width attribute (i.e., it is a stroked path), change only the stroke color
//         if (icon.getAttribute('stroke-width') !== null) {
//             icon.style.setProperty('stroke', color, 'important');
//         } else {
//             // If the icon does not have a stroke-width attribute (i.e., it is a filled shape), change only the fill color
//             icon.style.setProperty('fill', color, 'important');
//         }
//     });
// }

// // Click event on color items
// document.querySelectorAll('.color-item').forEach(function(item) {
//     item.addEventListener('click', function(event) {
//         var color = event.target.style.backgroundColor;
//         changeIconColor(color, event.target);
//     });
// });

// // Input event on the color picker
// document.querySelector('.color-picker').addEventListener('input', function(event) {
//     var color = event.target.value;
//     changeIconColor(color, event.target.parentElement);
//     event.target.parentElement.style.backgroundColor = color; // Change the color of the last color picker frame
// });

// PIXEL PERFECT BUTTON
document.getElementById('offset-button').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'offset-children' } }, '*');
}




function reactTemplate(svgContent, style, index) {
  const updatedSvgContent = svgContent
    .replace(/ class="/g, ' className="')
    .replace(/ stroke-width="/g, ' strokeWidth="')
    .replace(/ stroke-linecap="/g, ' strokeLinecap="')
    .replace(/ stroke-linejoin="/g, ' strokeLinejoin="');
    
  return `
export function Icon_${style}_${index}() {
  return (
    ${updatedSvgContent}
  );
}
`;
}



function vueTemplate(svgContent, style, index) {
  return `
const template = \`${svgContent}\`;

export default {
  name: 'Icon_${style}_${index}',
  render(h) {
    return h('div', { attrs: { class: 'icon-container' } }, [
      h('div', { domProps: { innerHTML: template } })
    ]);
  }
};
`;
}



function angularTemplate(svgContent, style, index) {
  return `
import { Component } from '@angular/core';

@Component({
  selector: 'icon-${style}-${index}',
  template: \`
    ${svgContent}
  \`,
})
export class Icon${style}${index}Component { }
`;
}


function preactTemplate(svgString) {
  return `
import { h } from 'preact';

export default function Icon() {
  return ${svgString};
}
`;
}







// EXPORT AS ZIP
const styles = ['line', 'solid', 'duo', 'inky']; // the styles of your SVGs
let currentStyle = document.querySelector(".tab a.active").dataset.tab; // Remember the current active style


// Function to switch style
function switchStyle(style, overrideVisibility) {
  const tabs = document.querySelectorAll(".tab a");
  tabs.forEach(tab => {
    tab.classList.remove("active");
    if (tab.dataset.tab === style) {
      tab.classList.add("active");
    }
  });

  selectedStyle = style;

  if (overrideVisibility) {
    showAllSvgs(); // Show all SVGs temporarily
  }

  applyStyle();

  if (overrideVisibility) {
    setTimeout(resetSvgVisibility, 1000); // Reset SVG visibility after 1 second
  }
}

// Ensure all SVGs are visible
function showAllSvgs() {
  let svgs = document.querySelectorAll('svg');
  svgs.forEach((svg) => {
    svg.style.visibility = 'visible';
  });
}

// Reset SVG visibility
function resetSvgVisibility() {
  let svgs = document.querySelectorAll('svg');
  svgs.forEach((svg) => {
    svg.style.visibility = ''; // Resets to default visibility value
  });
}


  function generateZIP(icons, format, zip) {
  const padding = Number(notificationStepperValue.value); // Get padding value

  if (format === 'pdf') {
    let promises = [];

    icons.forEach((icon, index) => {
      const matchingSvg = icon.querySelector(`svg[data-style="${currentStyle}"]`);
      if (matchingSvg) {
        const promise = new Promise((resolve) => {
          // Create an image from the SVG
          const img = new Image();
          img.src = 'data:image/svg+xml,' + encodeURIComponent(matchingSvg.outerHTML);

          img.onload = function() {
            const canvasSize = 1200;
            const iconSize = 1200 - (2 * padding); // Subtract padding
            var canvas = document.createElement('canvas');
            canvas.width = canvasSize; // Set canvas width
            canvas.height = canvasSize; // Set canvas height
            var ctx = canvas.getContext('2d');

            // Draw image with specific dimensions
            ctx.drawImage(img, padding, padding, iconSize, iconSize); // Include padding
            var imageData = canvas.toDataURL('image/png'); // Convert SVG to PNG data URL

            // Create a new PDF document with specific dimensions (1200x1200)
            const pdf = new window.jspdf.jsPDF({ unit: 'px', format: [1200, 1200] });
            pdf.addImage(imageData, 'PNG', 0, 0, canvasSize, canvasSize); // Add the image to the PDF
            const pdfBlob = pdf.output('blob');
            const filename = `icon-${currentStyle}-${index}.pdf`;
            zip.file(filename, pdfBlob); // Add PDF to ZIP with a unique filename
            resolve();
          };
        });

        promises.push(promise);
      }
    });

    Promise.all(promises).then(() => {
  zip.generateAsync({ type: "blob" })
    .then(function(content) {
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(content);
      downloadLink.download = "icons-pdf.zip"; // Set the download filename for PDF
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
});

    return; // Skip the remaining code since we're handling PDF differently
  }

  let reactLibraryContent = ''; // For storing the complete React library
  let vueLibraryContent = ''; 
  let angularLibraryContent = '';
  let preactLibraryContent = ''; // For storing the complete Preact library


  let promises = [];
styles.forEach(style => {
  switchStyle(style, true);

  icons.forEach((icon, index) => {
    // Normalize the icon name: replace spaces and special characters with hyphens, then convert to lowercase
    const iconName = (icon.id || 'unnamed').replace(/[\s+]/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
    const matchingSvg = icon.querySelector(`svg[data-style="${style}"]`);

    if (matchingSvg) {
      // Format the number with leading zeros (e.g., 001)
      const formattedNumber = String(index + 1).padStart(3, '0');
      const filename = `${formattedNumber}-${iconName}-${style.toLowerCase()}.${format}`;

      if (format === 'svg') {
        const svgWithPadding = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const newWidth = matchingSvg.width.baseVal.value + (2 * padding);
        const newHeight = matchingSvg.height.baseVal.value + (2 * padding);
        svgWithPadding.setAttribute('width', newWidth);
        svgWithPadding.setAttribute('height', newHeight);
        svgWithPadding.setAttribute('viewBox', `0 0 ${newWidth} ${newHeight}`);
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute('transform', `translate(${padding}, ${padding})`); // Translation to add padding
        g.appendChild(matchingSvg.cloneNode(true)); // Append cloned SVG
        svgWithPadding.appendChild(g);
        zip.file(filename, new Blob([svgWithPadding.outerHTML], { type: "image/svg+xml;charset=utf-8" }));
      } else if (format === 'png' || format === 'jpeg' || format === 'webp') {
        var img = new Image();
        img.src = 'data:image/svg+xml,' + encodeURIComponent(matchingSvg.outerHTML);

        


        var promise = new Promise((resolve, reject) => {
          img.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = img.width + (2 * padding); // Include padding
            canvas.height = img.height + (2 * padding); // Include padding
            var ctx = canvas.getContext('2d');
            if (format === 'jpeg') {
              ctx.fillStyle = 'white';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            ctx.drawImage(img, padding, padding); // Include padding
            canvas.toBlob(function(blob) {
              zip.file(filename, blob);
              resolve();
            }, 'image/' + format);
          };
        });

        promises.push(promise);


         }   else if (format === 'react') {
          const reactFilename = `Icon-${style}-${index}.jsx`;
          const reactComponentContent = reactTemplate(matchingSvg.outerHTML);
          zip.file(reactFilename, new Blob([reactComponentContent], { type: "application/javascript" }));
          
          const iconName = `Icon_${style}_${index}`;
          reactLibraryContent += `
export function ${iconName}() {
  return (
    ${matchingSvg.outerHTML}
  );
}
`;
        } else if (format === 'vue') {
          const vueFilename = `Icon-${style}-${index}.js`;
          const vueComponentContent = vueTemplate(matchingSvg.outerHTML, style, index);
          zip.file(vueFilename, new Blob([vueComponentContent], { type: "application/javascript" }));
          
          const iconName = `Icon_${style}_${index}`;
          vueLibraryContent += `
import ${iconName} from './${vueFilename}';
export { ${iconName} };


`;
        

} else if (format === 'angular') {
  const angularFilename = `Icon-${style}-${index}.ts`;
  const angularComponentContent = angularTemplate(matchingSvg.outerHTML);
  zip.file(angularFilename, new Blob([angularComponentContent], { type: "application/typescript" }));
  const iconName = `Icon${style}${index}Component`;
  angularLibraryContent += `
import { ${iconName} } from './${angularFilename}';
export { ${iconName} };
`;

} else if (format === 'preact') {
  const preactFilename = `Icon-${style}-${index}.jsx`;
  const preactComponentContent = preactTemplate(matchingSvg.outerHTML);
  zip.file(preactFilename, new Blob([preactComponentContent], { type: "application/javascript" }));
  
  const iconName = `Icon_${style}_${index}`;
  preactLibraryContent += `
export function ${iconName}() {
  return (
    ${matchingSvg.outerHTML}
  );
}
`;
}

    }
  });
});

if (format === 'react') {
  zip.file("IconLibrary.jsx", new Blob([reactLibraryContent], { type: "application/javascript" }));
} else if (format === 'vue') {
  zip.file("VueIconLibrary.js", new Blob([vueLibraryContent], { type: "application/javascript" }));
} else if (format === 'angular') {
  zip.file("AngularIconLibrary.ts", new Blob([angularLibraryContent], { type: "application/typescript" }));
} else if (format === 'preact') {
  zip.file("PreactIconLibrary.jsx", new Blob([preactLibraryContent], { type: "application/javascript" }));
}
  
  
  
  
  

Promise.all(promises).then(() => {
  zip.generateAsync({ type: "blob" })
    .then(function(content) {
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(content);

      // Set the download filename based on the format
      let downloadFilename = "icons.zip";
      if (format === 'png') downloadFilename = "icons-png.zip";
      else if (format === 'jpeg') downloadFilename = "icons-jpeg.zip";
      else if (format === 'webp') downloadFilename = "icons-webp.zip";
      else if (format === 'svg') downloadFilename = "icons-svg.zip";
      else if (format === 'pdf') downloadFilename = "icons-pdf.zip";
      else if (format === 'react') downloadFilename = "icons-react.zip";
      else if (format === 'vue') downloadFilename = "icons-vue.zip";
      else if (format === 'angular') downloadFilename = "icons-angular.zip";
      else if (format === 'preact') downloadFilename = "icons-preact.zip";



      downloadLink.download = downloadFilename;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
});
switchStyle(currentStyle); // Switch back to the original style
  }


document.getElementById('save-all-icons').addEventListener('click', function() {
      const format = document.querySelector("#ut2-dropbtn-export span").textContent.toLowerCase();
  const exportMode = document.querySelector('input[name="exportMode"]:checked').value; // Get export mode
  let icons;
  if (exportMode === 'all') {
    icons = document.querySelectorAll('.icon'); // Select all icons
  } else {
    icons = document.querySelectorAll('.icon.selected'); // Select only selected icons
  }

  if (format === 'sprite') {
    exportAsSVGSprite(icons); // Call the SVG sprite export function
  } else {
    let zip = new JSZip();
    generateZIP(icons, format, zip);
  }
  
});

// New event listener for save-all-icons-2 button
document.getElementById('save-all-icons-2').addEventListener('click', function() {
    const format = document.querySelector("#format-dropdown").value;
  const icons = document.querySelectorAll('.icon.selected'); // Always select only selected icons

  if (format === 'svg-sprite') {
    exportAsSVGSprite(icons); // Call the SVG sprite export function
  } else {
    let zip = new JSZip();
    generateZIP(icons, format, zip);
  }
  
  
});









// OLD JS FOR UT2 DROPDOWN IN CASE SOMETHING GOES WRONG


// ------------------------------------------------------------------

// initializeDropdown(); // Initialize the dropdown

// function initializeDropdown() {
//   let dropdowns = document.querySelectorAll('.ut2-dropdown');

//   dropdowns.forEach((dropdown) => {
//     let btn = dropdown.querySelector('.ut2-dropbtn');
//     let content = dropdown.querySelector('.ut2-dropdown-content');

//     // Set button text to the text of the first link
//     let firstLink = content.querySelector('.ut2-dropdown-link');
//     if (firstLink) {
//       btn.querySelector('span').textContent = firstLink.textContent;
//     }

//     // Show/hide dropdown content on button click
//     btn.addEventListener('click', function(e) {
//       e.stopPropagation();

//       // Hide all other dropdown contents
//       let allContents = document.querySelectorAll('.ut2-dropdown-content');
//       allContents.forEach((dropdownContent) => {
//         if (dropdownContent !== content) {
//           dropdownContent.style.display = 'none';
//         }
//       });

//       // Toggle display of this dropdown's content
//       content.style.display = (content.style.display === 'block') ? 'none' : 'block';

//       // If the dropdown is now visible, scroll it into view
//       if (content.style.display === 'block') {
//         content.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
//       }
//     });

//     // Change button text and hide dropdown on link click
//     let links = dropdown.querySelectorAll('.ut2-dropdown-link');
//     links.forEach((link) => {
//       link.addEventListener('click', function(e) {
//         e.preventDefault();
//         btn.querySelector('span').textContent = this.textContent;
//         content.style.display = 'none';
//       });
//     });
//   });

//   // Hide dropdown content when clicking outside
//   window.addEventListener('click', function() {
//     let contents = document.querySelectorAll('.ut2-dropdown-content');
//     contents.forEach((content) => {
//       content.style.display = 'none';
//     });
//   });
// }

// CLIPBOARD-JS

// CLIPBOARD-JS
// CLIPBOARD-JS
var iconContainers = document.querySelectorAll('.icon');

iconContainers.forEach(function(container) {
  container.addEventListener('contextmenu', function(event) {
    // Ignore the context menu if the shift key is being held down
    if (event.shiftKey) {
      return;
    }
    event.preventDefault(); // Prevent default context menu from showing

    // Show your custom context menu here, instead of copying the SVG immediately
    showIconContextMenu(event, container);
  });
});

// ICON NAME TOGGLE




// // Specific code for segmentedControlContainerDual3
// const segmentedControlContainerDual3 = document.querySelector("#segmentedControlContainerDual3");
// const segmentedControlButtonsDual3 = Array.from(segmentedControlContainerDual3.querySelectorAll(".segmentedControlButtonDual"));
// const sliderDual3 = segmentedControlContainerDual3.querySelector(".sliderDual");

// segmentedControlButtonsDual3.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     // Calculate the width and left position
//     const containerWidth = segmentedControlContainerDual3.getBoundingClientRect().width;
//     const containerPadding = parseFloat(window.getComputedStyle(segmentedControlContainerDual3, null).getPropertyValue('padding-left')) * 2;
//     const buttonWidth = (containerWidth - containerPadding) / segmentedControlButtonsDual3.length;
//     const sliderWidth = sliderDual3.getBoundingClientRect().width;
//     const leftPosition = (buttonWidth * index) + (buttonWidth - sliderWidth) / 2 + containerPadding / 2;

//     // Move slider
//     sliderDual3.style.left = `${leftPosition}px`;

//     // Update button colors
//     segmentedControlButtonsDual3.forEach((btn) => btn.style.color = "rgba(255, 255, 255, 0.75)");
//     button.style.color = "white";

//     // Show/hide icon names
//     var iconContainers = document.querySelectorAll('.icon');
//     if (index === 0) {
//       iconContainers.forEach(function(icon) {
//         icon.classList.remove('show-name');
//       });
//     } else {
//       iconContainers.forEach(function(icon) {
//         icon.classList.add('show-name');
//       });
//     }
//   });
// });

// // Trigger a click event on the first button
// segmentedControlButtonsDual3[0].click();


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







// SIDEBAR




document.addEventListener("DOMContentLoaded", function(event) {
  const sidebar = document.getElementById('sidebar');
  const tabs = document.querySelectorAll(".tab a");
  const sidePanelButton = document.querySelector(".side-panel-button");
  const menuItems = document.querySelectorAll(".menu-item");
  const overlay = document.querySelector('.overlay');
  const sidebarContent = document.getElementById('sidebar-content');

  let clicked = false;

  // Function to handle hover and active behavior of menu items
  const handleMenuItemBehavior = function() {
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("mouseenter", () => {
      menuItem.classList.add("hover");
    });

    menuItem.addEventListener("click", (event) => {
      event.preventDefault();

      if (menuItem.classList.contains("active")) {
        return;
      }

      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
      menuItem.classList.add("active");

      const dataId = menuItem.getAttribute('data-id');
      const iconsGrid = document.querySelector(`.icons-grid[data-id="${dataId}"]`);
      if (iconsGrid) {
        const gridPosition = iconsGrid.getBoundingClientRect().top + window.pageYOffset;
        const viewportHeight = window.innerHeight;
        let instantScrollPosition = gridPosition - (viewportHeight * 0.9);

        const scrollingUp = gridPosition < window.pageYOffset;
        if (scrollingUp) {
          instantScrollPosition = gridPosition - (viewportHeight * 0.1);
        }

        window.scrollTo({
          top: instantScrollPosition,
          behavior: 'auto'
        });

        setTimeout(() => {
          const targetPosition = gridPosition - 150;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }, 10);

        setTimeout(updateActiveCategory, 300);
      }
    });
  });
};


  // Add the new code snippet here
  const segmentedControlContainerDual = document.getElementById('dual-categories');
  segmentedControlContainerDual.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  // Existing code for handling clicks outside the sidebar
  document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && sidebar.classList.contains('active') && clicked) {
      hideSidebar();
    }
  });


const updateActiveCategoryOnScroll = function() {
  const gridElements = document.querySelectorAll('.icons-grid');
  const viewportHeight = window.innerHeight;
  let closestGrid = null;
  let closestGridDistance = Infinity;

  gridElements.forEach((gridElement) => {
    const gridPosition = gridElement.getBoundingClientRect().top + window.pageYOffset;
    const distance = Math.abs(window.scrollY - gridPosition);

    if (distance < closestGridDistance) {
      closestGridDistance = distance;
      closestGrid = gridElement;
    }
  });

  if (closestGrid) {
    const dataId = closestGrid.getAttribute('data-id');
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('active');
      if (menuItem.getAttribute('data-id') === dataId) {
        menuItem.classList.add('active');
      }
    });
  }
};












  const dualCategories = document.getElementById('dual-categories');
  const segmentedControlButtons = dualCategories.querySelectorAll('.segmentedControlButtonDual');

  segmentedControlButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const categoryList = document.getElementById('category-list');
      const groupList = document.getElementById('group-list');
      
      if(index === 0) { // Categories button clicked
        categoryList.style.display = "block";
        groupList.style.display = "none";
      } else { // Groups button clicked
        categoryList.style.display = "none";
        groupList.style.display = "block";
      }
    });
  });

  const hideSidebar = function() {
    sidebar.classList.remove('peek');
    sidebar.classList.remove('active');
    sidebar.classList.add('hidden');
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 500);
    clicked = false;
  };

  const revealSidebar = function() {
    if (!clicked && document.getElementById('ExploreButton').classList.contains('active')) {
      sidebar.classList.remove('hidden');
      sidebar.classList.add('peek');
    }
  };

  const extendSidebar = function() {
  sidebar.classList.remove('peek');
  sidebar.classList.remove('hidden');
  sidebar.classList.add('active');
  overlay.style.display = 'block';
  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 10);
  setTimeout(() => {
    clicked = true;
  }, 50);
};

// Prevent background scrolling when the mouse is inside the sidebar
document.getElementById('sidebar').addEventListener('mouseenter', function() {
  document.body.classList.add('no-scrollbar');
});
document.getElementById('sidebar').addEventListener('mouseleave', function() {
  document.body.classList.remove('no-scrollbar');
});


  tabs.forEach(tab => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();

      tabs.forEach(tab => {
        tab.classList.remove("active");
      });

      event.target.classList.add("active");

      if(event.target.id === 'ExploreButton') {
        revealSidebar();
      } else {
        hideSidebar();
      }
    });
  });

  document.body.addEventListener('mousemove', function(e) {
    if (e.clientX <= 20 && document.getElementById('ExploreButton').classList.contains('active')) {
      revealSidebar();
    }
  });

  sidebar.addEventListener('mouseleave', function() {
    if (clicked) {
      hideSidebar();
    }
  });

  sidebar.addEventListener('click', function() {
    if (clicked) {
      hideSidebar();
    } else {
      if (document.getElementById('ExploreButton').classList.contains('active')) {
        extendSidebar();
      }
    }
  });

  sidePanelButton.addEventListener('click', function() {
    extendSidebar();
  });

  handleMenuItemBehavior();

  // Add the scroll event listener to update the active category
  window.addEventListener('scroll', updateActiveCategoryOnScroll);

  const updateCategoryCounter = function() {
    menuItems.forEach((menuItem) => {
      // Get the data-id attribute of the menu item
      const dataId = menuItem.getAttribute('data-id');

      // Get the icon grid container with the matching data-id attribute
      const iconGridContainer = document.querySelector(`.icons-grid[data-id="${dataId}"]`);

      // Count the number of icons (span elements) in the container
      const iconCount = iconGridContainer ? iconGridContainer.querySelectorAll('span.icon').length : 0;

      // Update the category counter element with the icon count
      const categoryCounterElement = menuItem.querySelector('.category-counter');
      if (categoryCounterElement) {
        categoryCounterElement.textContent = iconCount;
      }
    });
  };

  // Call the function to update the category counters
  updateCategoryCounter();

//   // New Code for Moving Category Panels
// const categoryPanels = document.querySelectorAll('.category-panel');
// let lastKnownScrollPosition = 0;
// let ticking = false;

// function moveCategoryPanels(scrollPos) {
//   categoryPanels.forEach(panel => {
//     if (scrollPos > lastKnownScrollPosition) {
//       // Scrolling down - set top to 146px
//       panel.style.top = '146px';
//     } else {
//       // Scrolling up - set top to 160px
//       panel.style.top = '160px';
//     }
//   });
// }

// window.addEventListener('scroll', function() {
//   let currentScrollTop = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       moveCategoryPanels(currentScrollTop);
//       ticking = false;
//     });

//     ticking = true;
//   }

//   lastKnownScrollPosition = currentScrollTop;
// });

// // New Code for Updating Icon Counter
// document.addEventListener("DOMContentLoaded", function() {
//   const categoryPanels = document.querySelectorAll('.category-panel');

//   categoryPanels.forEach(panel => {
//     const categoryId = panel.getAttribute('data-id');
//     const iconsGrid = document.querySelector(`.icons-grid[data-id="${categoryId}"]`);
//     const numberOfIcons = iconsGrid ? iconsGrid.children.length : 0;

//     const counter = panel.querySelector('.icon-number-counter');
//     if (counter) {
//       counter.textContent = numberOfIcons;
//     }
//   });
// });
});




// // DARK AND LIGHT MODE

// // Dark mode toggle
// // Dark mode toggle
// let darkModeSwitch = document.getElementById('dl-mode-switch');

// darkModeSwitch.addEventListener('change', function() {
//   if(this.checked) {
//     document.body.classList.remove('dark');
//     document.body.classList.add('light');
//     localStorage.setItem('dark-mode-status', 'light');
//   } else {
//     document.body.classList.remove('light');
//     document.body.classList.add('dark');
//     localStorage.setItem('dark-mode-status', 'dark');
//   }
// });

// // Load dark mode status from local storage and apply it to the body
// let darkModeStatus = localStorage.getItem('dark-mode-status');

// if (darkModeStatus === 'light') {
//   document.body.classList.remove('dark');
//   document.body.classList.add('light');
//   darkModeSwitch.checked = true;
// } else {
//   document.body.classList.remove('light');
//   document.body.classList.add('dark');
//   darkModeSwitch.checked = false;
// }











// Global variable to track the state of floating panels
let simpleFloatingPanelsEnabled = false; // Default state is disabled

// CATEGORY PANEL
const categoryPanels = document.querySelectorAll('.category-panel');
let lastKnownScrollPosition = window.scrollY; // Initialize with the current scroll position

function moveCategoryPanels(scrollPos) {
  let isScrollingDown = scrollPos > lastKnownScrollPosition;

  categoryPanels.forEach((panel, index, arr) => {
    if (simpleFloatingPanelsEnabled) {
      panel.style.position = 'sticky'; // Enable sticky positioning

      // // Adjust top based on scroll direction
      // panel.style.top = isScrollingDown ? '122px' : '160px'; // Adjusted value

 // Adjust top based on scroll direction
 panel.style.top = isScrollingDown ? '144px' : '182px'; // Adjusted value


      if (index < arr.length - 1) {
        const nextPanelTop = arr[index + 1].getBoundingClientRect().top;
        const proximityThreshold = 222; // Adjusted value for Distance threshold to trigger the effect

        // Apply or remove scale-down effect
        if (nextPanelTop <= proximityThreshold && nextPanelTop > 164) {  // Adjusted value for edge
          panel.classList.add('scale-down');
        } else {
          panel.classList.remove('scale-down');
        }

        // Hide or show panel based on overlap
        if (nextPanelTop <= 164) {  // Adjusted value for edge
          panel.classList.add('hidden-panel');
        } else {
          panel.classList.remove('hidden-panel');
        }
      } else {
        // Ensure last panel is always visible and without effect
        panel.classList.remove('hidden-panel');
        panel.classList.remove('scale-down');
      }
    } else {
      // Reset styles when disabled
      panel.style.position = 'relative';
      panel.style.top = '';
      panel.classList.remove('hidden-panel');
      panel.classList.remove('scale-down');
    }
  });

  lastKnownScrollPosition = scrollPos; // Update the last known scroll position
}

// Attach the scroll listener
window.addEventListener('scroll', function() {
  let currentScrollTop = window.scrollY;
  moveCategoryPanels(currentScrollTop);
});

// Your existing code for icon counter and toggle handling...


// UPDATE ICON COUNTER AND TOGGLE HANDLING
document.addEventListener("DOMContentLoaded", function() {
  // Your existing code for icon counter and toggle handling...
});

function adjustPanelVisibility() {
  for (let i = 0; i < categoryPanels.length - 1; i++) {
    const currentPanel = categoryPanels[i];
    const nextPanel = categoryPanels[i + 1];

    const nextPanelTop = nextPanel.getBoundingClientRect().top;
    if (nextPanelTop <= 182) {  // Adjusted value for hiding current panel
      currentPanel.classList.add('hidden-panel');
    } else {
      currentPanel.classList.remove('hidden-panel');
    }
  }
}

// Attach the adjustPanelVisibility function to the scroll event
window.addEventListener('scroll', adjustPanelVisibility);

// // Attach the scroll listener
// window.addEventListener('scroll', function() {
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       moveCategoryPanels(window.scrollY);
//       ticking = false;
//     });
//     ticking = true;
//   }
//   lastKnownScrollPosition = window.scrollY;
// });




// UPDATE ICON COUNTER AND TOGGLE HANDLING
document.addEventListener("DOMContentLoaded", function() {
  // Update icon counter
  categoryPanels.forEach(panel => {
    const categoryId = panel.getAttribute('data-id');
    const iconsGrid = document.querySelector(`.icons-grid[data-id="${categoryId}"]`);
    const numberOfIcons = iconsGrid ? iconsGrid.children.length : 0;

    const counter = panel.querySelector('.icon-number-counter');
    if (counter) {
      counter.textContent = numberOfIcons;
    }
  });



  // Function to enter or exit selection mode
function toggleSelectionMode(enterSelectionMode = false) {
    selectionMode = enterSelectionMode ? true : !selectionMode;
    
    const enterSelectionModeButton = document.getElementById('enterSelectionMode');
    const exitSelectionModeButton = document.getElementById('exitSelectionMode');
    
    const icons = document.querySelectorAll('.icon');
    
    if (selectionMode) {
        enterSelectionModeButton.style.display = 'none';
        exitSelectionModeButton.style.display = 'block';
        icons.forEach(icon => {
            icon.classList.add('selectionMode');
        });
    } else {
        enterSelectionModeButton.style.display = 'block';
        exitSelectionModeButton.style.display = 'none';
        icons.forEach(icon => {
            icon.classList.remove('selected');
            icon.classList.remove('selectionMode');
        });
    }

    updateSelectionNotification();
}

// Function to toggle selection of all icons in a category
function toggleSelectionOfIconsInCategory(categoryPanel) {
    if (!selectionMode) {
        toggleSelectionMode(true); // Enter selection mode if not already in
    }

    const categoryId = categoryPanel.getAttribute('data-id');
    const iconsGrid = document.querySelector(`.icons-grid[data-id="${categoryId}"]`);
    const iconsInCategory = iconsGrid.querySelectorAll('.icon');
    let allSelected = Array.from(iconsInCategory).every(icon => icon.classList.contains('selected'));

    iconsInCategory.forEach(icon => {
        if (allSelected) {
            // If all icons are selected, deselect them
            icon.classList.remove('selected');
        } else {
            // If not all icons are selected, select them
            icon.classList.add('selected');
        }
    });

    updateSelectionNotification();
}

// Add event listeners to each icon-number-counter
document.querySelectorAll('.icon-number-counter').forEach(counter => {
    counter.addEventListener('click', function() {
        const categoryPanel = this.closest('.category-panel');
        if (categoryPanel) {
            toggleSelectionOfIconsInCategory(categoryPanel);
            this.classList.toggle('active'); // Toggle the active class
        }
    });
});



  // Floating Panels Toggle
  const floatingPanelsToggle = document.getElementById('floatingPanelsToggle');
  if (floatingPanelsToggle) {
    const floatingPanelsText = floatingPanelsToggle.closest('.toggle-container').querySelector('p');
    simpleFloatingPanelsEnabled = floatingPanelsToggle.checked;
    updateToggleText(simpleFloatingPanelsEnabled);

    floatingPanelsToggle.addEventListener('change', function() {
      simpleFloatingPanelsEnabled = this.checked;
      updateToggleText(simpleFloatingPanelsEnabled);
      window.dispatchEvent(new Event('scroll')); // Apply changes
    });

    function updateToggleText(enabled) {
      floatingPanelsText.textContent = enabled ? 'Enabled' : 'Disabled';
    }
    
    window.dispatchEvent(new Event('scroll')); // Apply initial state
  }
});


///////////////////// STYLE NAMING FOR TEXT BOX  /////////////////








// Define a mapping from style names to their corresponding prefixes
const stylePrefixMap = {
  'line': 'LN',
  'solid': 'SD',
  'duo': 'DL',
  'inky': 'IN'
};

// Function to update all text boxes based on the selected style
function updateAllTextBoxesWithStyle(style) {
  const textBoxes = document.querySelectorAll('[id="text-box"]');
  const stylePrefix = stylePrefixMap[style];
  
  textBoxes.forEach(textBox => {
    if (stylePrefix) {
      const currentText = textBox.textContent;
      const updatedText = currentText.replace(/^[A-Z]+/, stylePrefix); // Replace the prefix
      textBox.textContent = updatedText;
    }
  });
}

// Add click event listeners to each segmented control button
segmentedControlButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedStyle = button.textContent.trim().toLowerCase();
    updateAllTextBoxesWithStyle(selectedStyle);
  });
});


// Add any other JavaScript code that needs to be executed on DOMContentLoaded below this line



// let lastScrollTop = 0; // Initialize the variable outside the event listener

// window.addEventListener('scroll', function() {
//   const navbar = document.querySelector('.custom-nav-bar');  // Replace with the correct selector for your navbar
//   const st = window.pageYOffset || document.documentElement.scrollTop;

//   // If scrolling up and not already at the top
//   if (st < lastScrollTop && st > 0) {
//     navbar.style.opacity = '1';
//     navbar.style.visibility = 'visible';
//   } 
//   // If scrolling down
//   else if (st > lastScrollTop) {
//     navbar.style.opacity = '0';
//     navbar.style.visibility = 'hidden';
//   }
  
//   lastScrollTop = st <= 0 ? 0 : st; // Update last scroll position
// }, false);
