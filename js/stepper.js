// stepper.js




// STEPPER

// Original Stepper
const scalingStepperContainer = document.getElementById('scalingStepperContainer');
const scalingStepperValue = scalingStepperContainer.querySelector('.stepperValue');
const scalingIncrementButton = scalingStepperContainer.querySelector('.incrementButton');
const scalingDecrementButton = scalingStepperContainer.querySelector('.decrementButton');

scalingIncrementButton.addEventListener('click', function() {
    let currentVal = Number(scalingStepperValue.value);
    if (currentVal < 99) {
        scalingStepperValue.value = (currentVal + 0.5).toFixed(1);
    }
    window.parent.postMessage({ pluginMessage: { type: 'updateScalingFactor', scalingFactor: scalingStepperValue.value / 100 } }, '*');
});

scalingDecrementButton.addEventListener('click', function() {
    let currentVal = Number(scalingStepperValue.value);
    if (currentVal > 0) {
        scalingStepperValue.value = (currentVal - 0.5).toFixed(1);
    }
    window.parent.postMessage({ pluginMessage: { type: 'updateScalingFactor', scalingFactor: scalingStepperValue.value / 100 } }, '*');
});






// Negative Stepper
document.querySelectorAll('.negativeStepperContainer').forEach((stepperContainer) => {
    const stepperValue = stepperContainer.querySelector('.stepperValue');
    const incrementButton = stepperContainer.querySelector('.incrementButton');
    const decrementButton = stepperContainer.querySelector('.decrementButton');

    incrementButton.addEventListener('click', function() {
        let currentVal = Math.floor(Number(stepperValue.value));
        if (currentVal < 99) {
            stepperValue.value = currentVal + 1;
        }
    });

    decrementButton.addEventListener('click', function() {
        let currentVal = Math.ceil(Number(stepperValue.value));
        if (currentVal > -99) {
            stepperValue.value = currentVal - 1;
        }
    });
});

// Alt Stepper
document.querySelectorAll('.altStepperContainer').forEach((altStepperContainer) => {
    const altStepperValue = altStepperContainer.querySelector('.altStepperValue');
    const altIncrementButton = altStepperContainer.querySelector('.altIncrementButton');
    const altDecrementButton = altStepperContainer.querySelector('.altDecrementButton');
    const altStepperSlider = altStepperContainer.nextElementSibling; // get the slider connected to this stepper

    altIncrementButton.addEventListener('click', function() {
        let currentVal = Math.floor(Number(altStepperValue.value));
        if (currentVal < 99) {
            altStepperValue.value = currentVal + 1;
            altStepperSlider.value = altStepperValue.value; // sync slider with the input value
        }
    });

    altDecrementButton.addEventListener('click', function() {
        let currentVal = Math.ceil(Number(altStepperValue.value));
        if (currentVal > 0) {
            altStepperValue.value = currentVal - 1;
            altStepperSlider.value = altStepperValue.value; // sync slider with the input value
        }
    });

    // sync input value with the slider
    altStepperSlider.addEventListener('input', function() {
        altStepperValue.value = altStepperSlider.value;
    });

    // sync slider with the input value
    altStepperValue.addEventListener('input', function() {
        altStepperSlider.value = altStepperValue.value;
    });
});

window.addEventListener('click', function(event) {
  // Get all stepperContainers, negativeStepperContainers and altStepperContainers
  const stepperContainers = document.querySelectorAll('.stepperContainer, .negativeStepperContainer, .altStepperContainer');

  // For each stepperContainer, check if the click was inside or outside
  stepperContainers.forEach(function(container) {
    if (container.contains(event.target)) {
      // Click was inside, add the 'focused' class
      container.classList.add('focused');
    } else {
      // Click was outside, remove the 'focused' class
      container.classList.remove('focused');
    }
  });
});





// Notification stepper code
const notificationStepperContainer = document.getElementById('notification-stepper');
const notificationStepperValue = notificationStepperContainer.querySelector('.stepperValue');
const notificationIncrementButton = notificationStepperContainer.querySelector('.incrementButton');
const notificationDecrementButton = notificationStepperContainer.querySelector('.decrementButton');

notificationIncrementButton.addEventListener('click', function() {
  let currentVal = Number(notificationStepperValue.value);
  if (currentVal < 99) {
    notificationStepperValue.value = currentVal + 1;
  }
});

notificationDecrementButton.addEventListener('click', function() {
  let currentVal = Number(notificationStepperValue.value);
  if (currentVal > 0) {
    notificationStepperValue.value = currentVal - 1;
  }
});

// Event handlers for the notification stepper value
notificationStepperValue.addEventListener('focus', function() {
  if (notificationStepperValue.value === "Padding") {
    updateValue(0);
  }
});

notificationStepperValue.addEventListener('blur', function() {
  if (notificationStepperValue.value.replace("px", "") === "0") {
    updateValue("Padding");
  }
});

// Allow only numbers and "px" in the input field
notificationStepperValue.addEventListener('input', function() {
  notificationStepperValue.value = notificationStepperValue.value.replace(/[^0-9px]/g, '');
});


// ---------------







// Button press animations
const incrementButtons = document.querySelectorAll(".incrementButton, .altIncrementButton, .paddingIncrementButton");
const decrementButtons = document.querySelectorAll(".decrementButton, .altDecrementButton, .paddingDecrementButton");

incrementButtons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.transform = "translateY(-1px)";
  });

  button.addEventListener("mouseup", () => {
    button.style.transform = "translateY(0)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});

decrementButtons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.transform = "translateY(1px)";
  });

  button.addEventListener("mouseup", () => {
    button.style.transform = "translateY(0)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});