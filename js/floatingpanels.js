// floatingpanels.js







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

