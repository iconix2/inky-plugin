// paddingbutton.js

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



