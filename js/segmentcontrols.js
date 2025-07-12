// segmentcontrols.js

// SEGMENTED CONTROL BUTTON
const segmentedControlContainer = document.querySelector(".segmentedControlContainer");
const segmentedControlButtons = Array.from(segmentedControlContainer.querySelectorAll(".segmentedControlButton"));
const sliderOriginal = segmentedControlContainer.querySelector(".sliderOriginal");

function moveSliderToButton(index) {
  const containerWidth = segmentedControlContainer.getBoundingClientRect().width;
  const containerPadding = parseFloat(window.getComputedStyle(segmentedControlContainer, null).getPropertyValue('padding-left')) * 2;
  const buttonWidth = (containerWidth - containerPadding) / segmentedControlButtons.length;
  const sliderOriginalWidth = sliderOriginal.getBoundingClientRect().width;
  const leftPosition = (buttonWidth * index) + (buttonWidth - sliderOriginalWidth) / 2 + containerPadding / 2;

  sliderOriginal.style.left = `${leftPosition}px`;
}

segmentedControlButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Update button colors
    segmentedControlButtons.forEach(btn => btn.style.color = "var(--secondary-800)");
    button.style.color = "var(--secondary-000)";

    // Move slider to the clicked button
    moveSliderToButton(index);

    // Update the active style
    selectedStyle = button.textContent.trim().toLowerCase(); // Assumes this matches the data-tab values from the old system
    applyStyle(); // Assumes this function applies the selected style
    filterIcons(); // If you have a function to filter icons based on style
  });
});

// Initialize with the selected style
const initialStyle = selectedStyle || 'line'; // Replace 'line' with your default style if 'selectedStyle' is not set
const initialIndex = segmentedControlButtons.findIndex(btn => btn.textContent.trim().toLowerCase() === initialStyle);
if (initialIndex >= 0) {
  segmentedControlButtons[initialIndex].click();
} else {
  segmentedControlButtons[0].click(); // Fallback to the first button if the initial style is not found
}

// -------------------

// For dual segmented control
// For dual segmented control
const segmentedControlContainersDual = Array.from(document.querySelectorAll(".segmentedControlContainerDual"));

segmentedControlContainersDual.forEach((segmentedControlContainerDual) => {
  const segmentedControlButtonsDual = Array.from(segmentedControlContainerDual.querySelectorAll(".segmentedControlButtonDual"));
  const sliderDual = segmentedControlContainerDual.querySelector(".sliderDual");

  segmentedControlButtonsDual.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Calculate the width and left position
      const containerWidth = segmentedControlContainerDual.getBoundingClientRect().width;
      const containerPadding = parseFloat(window.getComputedStyle(segmentedControlContainerDual, null).getPropertyValue('padding-left')) * 2;
      const buttonWidth = (containerWidth - containerPadding) / segmentedControlButtonsDual.length;
      const sliderWidth = sliderDual.getBoundingClientRect().width;
      const leftPosition = (buttonWidth * index) + (buttonWidth - sliderWidth) / 2 + containerPadding / 2;

      // Reset all button colors
      segmentedControlButtonsDual.forEach((btn) => btn.style.color = "var(--secondary-800)");

      // Update the clicked button's color
      button.style.color = "var(--secondary-000)";

      // Move the slider
      sliderDual.style.left = `${leftPosition}px`;

      // Special behavior for segmentedControlContainerDual3
      if (segmentedControlContainerDual.id === "segmentedControlContainerDual3") {
        // Show/hide icon names
        var iconContainers = document.querySelectorAll('.icon');
        if (index === 0) {
          iconContainers.forEach(function(icon) {
            icon.classList.remove('show-name');
          });
        } else {
          iconContainers.forEach(function(icon) {
            icon.classList.add('show-name');
          });
        }
      }
    });
  });

  // Trigger a click event on the first button to set the initial state
  segmentedControlButtonsDual[0].click();

  // Set the initial position after the click event
  let initialPaddingDual = parseFloat(window.getComputedStyle(segmentedControlContainerDual, null).getPropertyValue('padding-left'));
  sliderDual.style.left = `${initialPaddingDual}px`;
});

// -------------------

// SEPARATE SECTION FOR IMPORTING ICONS OR COMPONENTS - UNDER SETTINGS (not the same as other segmented, but looks same)

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button-group input[type="radio"]');
  const sliderFrame = document.querySelector('.slider-frame');

  function updateSliderPosition() {
    const checkedButton = document.querySelector('.button-group input[type="radio"]:checked');
    const checkedLabel = checkedButton.nextElementSibling;
    const labelRect = checkedLabel.getBoundingClientRect();
    const containerRect = checkedLabel.parentElement.getBoundingClientRect();

    const offsetLeft = labelRect.left - containerRect.left;
    const width = labelRect.width;

    sliderFrame.style.left = `${offsetLeft}px`;
    sliderFrame.style.width = `${width}px`;
    sliderFrame.style.visibility = 'visible'; // Ensure the frame is visible
  }

  buttons.forEach(button => {
    button.addEventListener('change', updateSliderPosition);
  });

  // Force the starting position and visibility by triggering a click event
  const initialCheckedButton = document.querySelector('.button-group input[type="radio"]:checked');
  initialCheckedButton.nextElementSibling.click(); // Trigger a click event on the initially checked button
});

//-----------------------

// For triple segmented control
const segmentedControlContainersTriple = Array.from(document.querySelectorAll(".segmentedControlContainerTriple"));



segmentedControlContainersTriple.forEach((segmentedControlContainerTriple) => {
  const segmentedControlButtonsTriple = Array.from(segmentedControlContainerTriple.querySelectorAll(".segmentedControlButtonTriple"));
  const sliderTriple = segmentedControlContainerTriple.querySelector(".sliderTriple");

  segmentedControlButtonsTriple.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Calculate the width and left position
    const containerWidth = segmentedControlContainerTriple.getBoundingClientRect().width;
    const containerPadding = parseFloat(window.getComputedStyle(segmentedControlContainerTriple, null).getPropertyValue('padding-left')) * 2;
    const buttonWidth = (containerWidth - containerPadding) / segmentedControlButtonsTriple.length;
    const sliderWidth = sliderTriple.getBoundingClientRect().width;
    const leftPosition = (buttonWidth * index) + (buttonWidth - sliderWidth) / 2 + containerPadding / 2;

    // Reset the colors for all buttons to their initial state
    segmentedControlButtonsTriple.forEach((btn) => {
      btn.style.color = "var(--secondary-800)";
    });

    // Move slider
    sliderTriple.style.left = `${leftPosition}px`;

    // Update color of the clicked button
    button.style.color = "var(--secondary-000)";
  });
});

  // Trigger a click event on the first button
  segmentedControlButtonsTriple[0].click();

  // Set the initial position after the click event
  let initialPaddingTriple = parseFloat(window.getComputedStyle(segmentedControlContainerTriple, null).getPropertyValue('padding-left'));
  sliderTriple.style.left = `${initialPaddingTriple}px`; // Using the computed padding
});






