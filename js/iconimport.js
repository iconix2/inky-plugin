// iconimport.js

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
