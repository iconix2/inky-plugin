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

// Function to send color and opacity update message
function sendUpdateColorMessage(nodeName, color, opacity) {
    console.log(`Frontend - Sending update message: nodeName=${nodeName}, color=${color}, opacity=${opacity}`);
    parent.postMessage({ pluginMessage: { type: 'update-color', nodeName, color, opacity } }, '*');
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
        const colorText = document.querySelector(`#${item}ColorText`);
        const colorItem = colorPicker.closest('.colo2ColorItem'); // Select the correct element
        const slider = document.querySelector(`#${item}Slider`);
        const opacityValue = document.querySelector(`#${item}OpacityValue`);
        sendUpdateColorMessage(item, colorPicker.value, opacityValue.value / 100);

        if (item === "secondary") {
            sendUpdateColorMessage('sticker', colorPicker.value, opacityValue.value / 100);
        }
    });
});

function sendUpdateColorMessage(nodeName, color, opacity) {
    const svgIcons = document.querySelectorAll('svg');
    svgIcons.forEach(svg => {
        const hasStrokes = !!svg.querySelector('[stroke]');
        
        if (hasStrokes) {
            console.log(`Frontend - Sending update message with stroke: nodeName=${nodeName}, color=${color}, opacity=${opacity}`);
            parent.postMessage({
                pluginMessage: {
                    type: 'update-color',
                    nodeName,
                    color,
                    opacity,
                    applyTo: 'stroke'
                }
            }, '*');
        } else {
            console.log(`Frontend - Sending update message with fill: nodeName=${nodeName}, color=${color}, opacity=${opacity}`);
            parent.postMessage({
                pluginMessage: {
                    type: 'update-color',
                    nodeName,
                    color,
                    opacity,
                    applyTo: 'fill'
                }
            }, '*');
        }
    });
}

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
