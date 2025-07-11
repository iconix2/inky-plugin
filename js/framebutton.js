// framebutton.js

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
