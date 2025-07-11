//skewrotation.js

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