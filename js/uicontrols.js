// uicontrols.js


// SHOW HIDE STYLE OPTIONS



document.querySelector('.main-reveal-button').addEventListener('click', function() {
  document.querySelector('.style-options').classList.toggle('show'); // Toggle 'show' class
});


// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------


// INKY TOGGLE BUTTON

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


// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// SMALL DROPDOWN - UNDER OTHER SETTINGS - "NEW OPTION:""

// Get the new dropdown element
const newSmallDropdown = document.getElementById('newSmallDropdown');

// Add an event listener to the new dropdown
newSmallDropdown.addEventListener('change', function() {
  console.log(`Changed new option to ${this.value}`);
  // Add new functionality here
});

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------


// UNUSED PRESETS (SUNSET, ETC.) - UNDER ICONKIT

var presetButtons = document.querySelectorAll('.cc2-button');
presetButtons.forEach(button => {
  button.addEventListener('click', function() {
    presetButtons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
    this.classList.add('active'); // Add active class to clicked button
  });
});

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------
// SECTION TITLE STICKY - most likely for Favorites or something

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


// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

// EXPANDABLE SECTION - FOR CONTRACTING AND REVEALING CONTENTS INSIDE

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

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------



// PIXEL PERFECT BUTTON
document.getElementById('offset-button').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'offset-children' } }, '*');
}





// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------


// DROPDOWN FOR IN-PLUGIN EDITS - COLOR, STROKES, SIZE, ETC.

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




// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------




// SIZE SLIDER - INITIAL UI FOR ADJUSTING IN PLUGIN

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

///

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------



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















// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
