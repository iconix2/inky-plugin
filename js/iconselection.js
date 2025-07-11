// iconselection.js 

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
