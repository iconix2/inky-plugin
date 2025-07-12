// figmacolorpicker.js

// COLO2
// const colorItems = ["primary", "secondary"];

// colorItems.forEach((item) => {
//     const colorPicker = document.querySelector(`#${item}ColorPicker`);
//     const colorText = document.querySelector(`#${item}ColorText`);
//     const colorItem = colorPicker.parentElement;
//     const slider = document.querySelector(`#${item}Slider`);
//     const opacityValue = document.querySelector(`#${item}OpacityValue`);

//     const updateColorItem = () => {
//         let opacity = slider.value / 100; 
//         let color = colorPicker.value;
//         let r = parseInt(color.slice(1, 3), 16),
//             g = parseInt(color.slice(3, 5), 16),
//             b = parseInt(color.slice(5, 7), 16);
//         colorItem.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
//         opacityValue.value = slider.value;
//         console.log(`Frontend - Updating ${item} color to ${color} and opacity to ${opacity}`);
//     };

//     colorText.addEventListener("input", function(e) {
//         e.target.value = e.target.value.toUpperCase().startsWith('#') ? 
//                          e.target.value : '#' + e.target.value;
//         e.target.value = e.target.value.substring(0, Math.min(7, e.target.value.length));
//         colorPicker.value = e.target.value;
//         updateColorItem();
//     });

//     colorPicker.addEventListener("input", function() {
//         colorText.value = colorPicker.value.toUpperCase();
//         updateColorItem();
//     });

//     slider.addEventListener('input', function() {
//         opacityValue.value = slider.value;
//         // Trigger change event
//         const event = new Event('change');
//         opacityValue.dispatchEvent(event);
//     });

//     opacityValue.addEventListener('change', updateColorItem);

//     // Trigger the input and change events for the initial values
//     colorPicker.dispatchEvent(new Event('input'));
//     slider.dispatchEvent(new Event('input'));
//     opacityValue.dispatchEvent(new Event('change'));
// });

// // Function to send color and opacity update message
// function sendUpdateColorMessage(nodeName, color, opacity) {
//     console.log(`Frontend - Sending update message: nodeName=${nodeName}, color=${color}, opacity=${opacity}`);
//     parent.postMessage({ pluginMessage: { type: 'update-color', nodeName, color, opacity } }, '*');
// }

// // Add event listeners to inputs
// const primaryColorInput = document.getElementById('primaryColorPicker');
// const primaryOpacityInput = document.getElementById('primaryOpacityValue');
// const secondaryColorInput = document.getElementById('secondaryColorPicker');
// const secondaryOpacityInput = document.getElementById('secondaryOpacityValue');

// primaryColorInput.addEventListener('input', function() {
//     sendUpdateColorMessage('primary', primaryColorInput.value, primaryOpacityInput.value / 100);
// });

// primaryOpacityInput.addEventListener('change', function() {
//     sendUpdateColorMessage('primary', primaryColorInput.value, primaryOpacityInput.value / 100);
// });

// secondaryColorInput.addEventListener('input', function() {
//     sendUpdateColorMessage('secondary', secondaryColorInput.value, secondaryOpacityInput.value / 100);
//     sendUpdateColorMessage('sticker', secondaryColorInput.value, secondaryOpacityInput.value / 100); // Linking sticker to secondary controls
// });

// secondaryOpacityInput.addEventListener('change', function() {
//     sendUpdateColorMessage('secondary', secondaryColorInput.value, secondaryOpacityInput.value / 100);
//     sendUpdateColorMessage('sticker', secondaryColorInput.value, secondaryOpacityInput.value / 100); // Linking sticker to secondary controls
// });

// // COLO2APPLY
// const applyButton = document.querySelector('.colo2button');
// applyButton.addEventListener('click', function() {
//     colorItems.forEach((item) => {
//         const colorPicker = document.querySelector(`#${item}ColorPicker`);
//         const colorText = document.querySelector(`#${item}ColorText`);
//         const colorItem = colorPicker.closest('.colo2ColorItem'); // Select the correct element
//         const slider = document.querySelector(`#${item}Slider`);
//         const opacityValue = document.querySelector(`#${item}OpacityValue`);
//         sendUpdateColorMessage(item, colorPicker.value, opacityValue.value / 100);

//         if (item === "secondary") {
//             sendUpdateColorMessage('sticker', colorPicker.value, opacityValue.value / 100);
//         }
//     });
// });

// function sendUpdateColorMessage(nodeName, color, opacity) {
//     const svgIcons = document.querySelectorAll('svg');
//     svgIcons.forEach(svg => {
//         const hasStrokes = !!svg.querySelector('[stroke]');
        
//         if (hasStrokes) {
//             console.log(`Frontend - Sending update message with stroke: nodeName=${nodeName}, color=${color}, opacity=${opacity}`);
//             parent.postMessage({
//                 pluginMessage: {
//                     type: 'update-color',
//                     nodeName,
//                     color,
//                     opacity,
//                     applyTo: 'stroke'
//                 }
//             }, '*');
//         } else {
//             console.log(`Frontend - Sending update message with fill: nodeName=${nodeName}, color=${color}, opacity=${opacity}`);
//             parent.postMessage({
//                 pluginMessage: {
//                     type: 'update-color',
//                     nodeName,
//                     color,
//                     opacity,
//                     applyTo: 'fill'
//                 }
//             }, '*');
//         }
//     });
// }

// const swapButton = document.getElementById('swapButton');
// swapButton.addEventListener('click', function() {
//     // Store the current values
//     const primaryColor = primaryColorInput.value;
//     const secondaryColor = secondaryColorInput.value;
//     const primaryOpacity = primaryOpacityInput.value;
//     const secondaryOpacity = secondaryOpacityInput.value;
//     const primarySlider = document.getElementById('primarySlider');
//     const secondarySlider = document.getElementById('secondarySlider');

//     // Swap the color values
//     primaryColorInput.value = secondaryColor;
//     secondaryColorInput.value = primaryColor;

//     // Swap the opacity values
//     primaryOpacityInput.value = secondaryOpacity;
//     secondaryOpacityInput.value = primaryOpacity;

//     // Swap the slider values for opacity
//     primarySlider.value = secondaryOpacity;
//     secondarySlider.value = primaryOpacity;

//     // Trigger the input and change events to reflect the change in the UI and nodes
//     primaryColorInput.dispatchEvent(new Event('input'));
//     secondaryColorInput.dispatchEvent(new Event('input'));
//     primaryOpacityInput.dispatchEvent(new Event('change'));
//     secondaryOpacityInput.dispatchEvent(new Event('change'));
//     primarySlider.dispatchEvent(new Event('input'));
//     secondarySlider.dispatchEvent(new Event('input'));
// });


// // -------


// // DROPDOWN FOR SELECTION OR ALL ICONS EDITING 

// // Get dropdown input
// const applyToDropdown = document.getElementById('applyToDropdown');
// let previousValue = applyToDropdown.value; // Store the previous value

// applyToDropdown.addEventListener('change', function() {
//   if (this.value === 'all') { // Check if "All Icons" is selected
//     const isConfirmed = window.confirm('Are you sure you want to apply selected colors to all icons?');
//     if (isConfirmed) {
//       console.log(`Changed apply to option to ${this.value}`);
//       previousValue = this.value; // Update the previous value
//       // Resend color and opacity updates with new applyTo option
//       sendUpdateColorMessage('primary', primaryColorInput.value, primaryOpacityInput.value / 100);
//       sendUpdateColorMessage('secondary', secondaryColorInput.value, secondaryOpacityInput.value / 100);
//     } else {
//       this.value = previousValue; // Revert to the previous value if the user cancels
//     }
//   } else {
//     console.log(`Changed apply to option to ${this.value}`);
//     previousValue = this.value; // Update the previous value
//   }
// });

// // Function to send color and opacity update message
// function sendUpdateColorMessage(nodeName, color, opacity) {
//   const applyToOption = applyToDropdown.value;
//   parent.postMessage({ pluginMessage: { type: 'update-color', nodeName, color, opacity, applyToOption } }, '*');
// }

// // ------------------------------------------
















// NEW UPDATED CODE

// figmacolorpicker.js

// COLO2
const colorItems = ["primary", "secondary"];

colorItems.forEach((item) => {
    const colorPicker = document.querySelector(`#${item}ColorPicker`);
    const colorText = document.querySelector(`#${item}ColorText`);
    const colorItem = colorPicker.parentElement;
    const slider = document.querySelector(`#${item}Slider`);
    const opacityValue = document.querySelector(`#${item}OpacityValue`);

    const updateColorItem = () => {
        let opacity = slider.value / 100;
        let color = colorPicker.value;
        let r = parseInt(color.slice(1, 3), 16),
            g = parseInt(color.slice(3, 5), 16),
            b = parseInt(color.slice(5, 7), 16);
        colorItem.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        opacityValue.value = slider.value;
        console.log(`Frontend - Updating ${item} color to ${color} and opacity to ${opacity}`);
        // Call the unified sendUpdateColorMessage here
        sendUpdateColorMessage(item, color, opacity);
    };

    colorText.addEventListener("input", function(e) {
        e.target.value = e.target.value.toUpperCase().startsWith('#') ?
                         e.target.value : '#' + e.target.value;
        e.target.value = e.target.value.substring(0, Math.min(7, e.target.value.length));
        colorPicker.value = e.target.value;
        updateColorItem();
    });

    colorPicker.addEventListener("input", function() {
        colorText.value = colorPicker.value.toUpperCase();
        updateColorItem();
    });

    slider.addEventListener('input', function() {
        opacityValue.value = slider.value;
        // Trigger change event
        const event = new Event('change');
        opacityValue.dispatchEvent(event);
    });

    opacityValue.addEventListener('change', updateColorItem);

    // Trigger the input and change events for the initial values
    colorPicker.dispatchEvent(new Event('input'));
    slider.dispatchEvent(new Event('input'));
    opacityValue.dispatchEvent(new Event('change'));
});

// Consolidated Function to send color and opacity update message
function sendUpdateColorMessage(nodeName, color, opacity, applyToOptionFromDropdown) {
    const applyToDropdown = document.getElementById('applyToDropdown');
    const actualApplyToOption = applyToOptionFromDropdown || applyToDropdown.value; // Use provided option or fallback to dropdown

    // Determine applyTo for stroke/fill based on SVGs (if applicable, only for the 'apply' button or direct calls)
    // This logic might need to be refined based on how you intend for it to apply when not specifically from the apply button
    let applyToDeterminedBySVG = null;
    const svgIcons = document.querySelectorAll('svg');
    if (svgIcons.length > 0) { // Only check if there are SVGs
        const hasStrokes = !!svgIcons[0].querySelector('[stroke]'); // Check first SVG for stroke
        applyToDeterminedBySVG = hasStrokes ? 'stroke' : 'fill';
    }


    console.log(`Frontend - Sending update message: nodeName=${nodeName}, color=${color}, opacity=${opacity}, applyToOption=${actualApplyToOption}, applyToSVG=${applyToDeterminedBySVG}`);

    parent.postMessage({
        pluginMessage: {
            type: 'update-color',
            nodeName,
            color,
            opacity,
            applyToOption: actualApplyToOption, // This comes from the dropdown
            applyToSVG: applyToDeterminedBySVG // This is determined by SVG structure, if needed by backend
        }
    }, '*');
}

// Add event listeners to inputs
const primaryColorInput = document.getElementById('primaryColorPicker');
const primaryOpacityInput = document.getElementById('primaryOpacityValue');
const secondaryColorInput = document.getElementById('secondaryColorPicker');
const secondaryOpacityInput = document.getElementById('secondaryOpacityValue');

primaryColorInput.addEventListener('input', function() {
    sendUpdateColorMessage('primary', primaryColorInput.value, primaryOpacityInput.value / 100);
});

primaryOpacityInput.addEventListener('change', function() {
    sendUpdateColorMessage('primary', primaryColorInput.value, primaryOpacityInput.value / 100);
});

secondaryColorInput.addEventListener('input', function() {
    sendUpdateColorMessage('secondary', secondaryColorInput.value, secondaryOpacityInput.value / 100);
    sendUpdateColorMessage('sticker', secondaryColorInput.value, secondaryOpacityInput.value / 100); // Linking sticker to secondary controls
});

secondaryOpacityInput.addEventListener('change', function() {
    sendUpdateColorMessage('secondary', secondaryColorInput.value, secondaryOpacityInput.value / 100);
    sendUpdateColorMessage('sticker', secondaryColorInput.value, secondaryOpacityInput.value / 100); // Linking sticker to secondary controls
});

// COLO2APPLY
const applyButton = document.querySelector('.colo2button');
applyButton.addEventListener('click', function() {
    colorItems.forEach((item) => {
        const colorPicker = document.querySelector(`#${item}ColorPicker`);
        const opacityValue = document.querySelector(`#${item}OpacityValue`);
        // When clicking apply, explicitly pass the applyToOption from the dropdown
        sendUpdateColorMessage(item, colorPicker.value, opacityValue.value / 100, applyToDropdown.value);

        if (item === "secondary") {
            sendUpdateColorMessage('sticker', colorPicker.value, opacityValue.value / 100, applyToDropdown.value);
        }
    });
});


const swapButton = document.getElementById('swapButton');
swapButton.addEventListener('click', function() {
    // Store the current values
    const primaryColor = primaryColorInput.value;
    const secondaryColor = secondaryColorInput.value;
    const primaryOpacity = primaryOpacityInput.value;
    const secondaryOpacity = secondaryOpacityInput.value;
    const primarySlider = document.getElementById('primarySlider');
    const secondarySlider = document.getElementById('secondarySlider');

    // Swap the color values
    primaryColorInput.value = secondaryColor;
    secondaryColorInput.value = primaryColor;

    // Swap the opacity values
    primaryOpacityInput.value = secondaryOpacity;
    secondaryOpacityInput.value = primaryOpacity;

    // Swap the slider values for opacity
    primarySlider.value = secondaryOpacity;
    secondarySlider.value = primaryOpacity;

    // Trigger the input and change events to reflect the change in the UI and nodes
    primaryColorInput.dispatchEvent(new Event('input'));
    secondaryColorInput.dispatchEvent(new Event('input'));
    primaryOpacityInput.dispatchEvent(new Event('change'));
    secondaryOpacityInput.dispatchEvent(new Event('change'));
    primarySlider.dispatchEvent(new Event('input'));
    secondarySlider.dispatchEvent(new Event('input'));
});


// -------


// DROPDOWN FOR SELECTION OR ALL ICONS EDITING

// Get dropdown input
const applyToDropdown = document.getElementById('applyToDropdown');
let previousValue = applyToDropdown.value; // Store the previous value

applyToDropdown.addEventListener('change', function() {
  if (this.value === 'all') { // Check if "All Icons" is selected
    const isConfirmed = window.confirm('Are you sure you want to apply selected colors to all icons?');
    if (isConfirmed) {
      console.log(`Changed apply to option to ${this.value}`);
      previousValue = this.value; // Update the previous value
      // Resend color and opacity updates with new applyTo option
      // Call the consolidated sendUpdateColorMessage
      sendUpdateColorMessage('primary', primaryColorInput.value, primaryOpacityInput.value / 100, this.value);
      sendUpdateColorMessage('secondary', secondaryColorInput.value, secondaryOpacityInput.value / 100, this.value);
    } else {
      this.value = previousValue; // Revert to the previous value if the user cancels
    }
  } else {
    console.log(`Changed apply to option to ${this.value}`);
    previousValue = this.value; // Update the previous value
  }
});



// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------


// IMAGE FILL - UNUSED CURRENTLY - UNDER OTHER SETTINGS - FILL (FOR UPLOADING IMAGE SO IT CAN BE APPLIED TO STROKE OR FILL)

// UPL2 UPLOAD BUTTON

const upl2FileInput = document.querySelector('#upl2FileInput');
const upl2ImageFrame = document.querySelector('#upl2ImageFrame');
const upl2ImageContainer = document.querySelector('.upl2ImageContainer');
const upl2ApplyButton = document.querySelector('#upl2ApplyButton');

upl2ImageContainer.addEventListener('click', function() { // Here we replaced 'dblclick' with 'click'
  upl2FileInput.click();
});

upl2ImageContainer.addEventListener('focus', function() {
  upl2ImageContainer.classList.add('focused');
});

upl2ImageContainer.addEventListener('blur', function() {
  upl2ImageContainer.classList.remove('focused');
});

upl2FileInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = function() {
      upl2ImageFrame.style.display = 'none'; // Hide the image frame first
      upl2ImageFrame.onload = function() { // Add an onload event
        upl2ImageFrame.style.display = 'block'; // Show the image frame when the image loads
        upl2ApplyButton.disabled = false; // Enable the Apply button
      };
      upl2ImageFrame.src = reader.result; // Set the source which triggers the load event
    };
    reader.readAsDataURL(file);
  }
});

upl2ApplyButton.addEventListener('click', function() {
  const reader = new FileReader();
  reader.onload = function(event) {
    const imageData = event.target.result;
    parent.postMessage({ pluginMessage: { type: 'apply-image', imageData } }, '*');
  }
  reader.readAsArrayBuffer(upl2FileInput.files[0]);
});


// -----------------------------------------




// -----------------------------------------



document.getElementById('scalingStepper').addEventListener('input', function(e) {
    window.parent.postMessage({ pluginMessage: { type: 'updateScalingFactor', scalingFactor: e.target.value / 100 } }, '*')
  });