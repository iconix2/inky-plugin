// alticons.js


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


// ------------------------

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

