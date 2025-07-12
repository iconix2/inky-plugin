// custompresets.js

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



