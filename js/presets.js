// presets.js


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


