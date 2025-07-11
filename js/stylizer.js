// stylizer.js

// STROKE SLIDER
document.getElementById('strokeWidthSlider').oninput = function() {
    let value = this.value;

    // Convert the value to stroke width
    let strokeWidth;
    if (value == 1) {
      strokeWidth = "0";
    } else if (value == 2) {
      strokeWidth = "1";
    } else if (value == 3) {
      strokeWidth = "1.5";
    } else if (value == 4) {
      strokeWidth = "2";
    }

    // Update the displayed value
    document.getElementById('currentValue').innerText = strokeWidth + "pt";

    // Select all paths in all SVGs and set their stroke width
    let paths = document.querySelectorAll('.icon svg path');
    paths.forEach(function(path) {
      path.setAttribute('stroke-width', strokeWidth);
    });

    /*
    // Update the SVG elements inside .icon
    let svgs = document.querySelectorAll('.icon svg');
    svgs.forEach(function(svg) {
      if (strokeWidth === "1") {
        svg.classList.add('offset');
      } else {
        svg.classList.remove('offset');
      }
    });
    */
}

  // Keep existing code above this line

  // ADD FILL NONE TO EVERY PATH
  window.addEventListener('DOMContentLoaded', (event) => {
    const paths = document.querySelectorAll('.icon svg path');

    paths.forEach(path => {
      if (path.getAttribute('stroke') && !path.getAttribute('fill')) {
        path.setAttribute('fill', 'none');
      }
    });
    
    const linecapOption = document.getElementById('linecap');
    linecapOption.addEventListener('change', function() {
      applyLinecap(this.value);
    });

    applyLinecap('round');
  });

  function applyLinecap(linecapValue) {
    const paths = document.querySelectorAll('.icon svg path');
    paths.forEach(path => {
      path.setAttribute('stroke-linecap', linecapValue);
    });
  }

  // Stroke cap options
const linecapOptions = document.querySelectorAll('.linecap-option');
linecapOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options
        linecapOptions.forEach(opt => opt.classList.remove('active'));

        // Add active class to clicked option
        this.classList.add('active');

        // Get the value of the clicked option
        let linecapValue = this.dataset.value;

        // Apply the value to all SVG paths
        let paths = document.querySelectorAll('.icon svg path');
        paths.forEach(path => {
            path.setAttribute('stroke-linecap', linecapValue);
        });
    });
});

// Stroke join options
const linejoinOptions = document.querySelectorAll('.linejoin-option');
linejoinOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options
        linejoinOptions.forEach(opt => opt.classList.remove('active'));

        // Add active class to clicked option
        this.classList.add('active');

        // Get the value of the clicked option
        let linejoinValue = this.dataset.value;

        // Apply the value to all SVG paths
        applyLinejoin(linejoinValue);
    });
});

function applyLinejoin(linejoinValue) {
    const paths = document.querySelectorAll('.icon svg path');
    paths.forEach(path => {
        path.setAttribute('stroke-linejoin', linejoinValue);
    });
}

function initializeDropdown() {
  let dropdowns = document.querySelectorAll('.ut2-dropdown');

  dropdowns.forEach((dropdown) => {
    let btn = dropdown.querySelector('.ut2-dropbtn');
    let content = dropdown.querySelector('.ut2-dropdown-content');

    // Set button text to the text of the first link
    let firstLink = content.querySelector('.ut2-dropdown-link');
    if (firstLink) {
      btn.querySelector('span').textContent = firstLink.textContent;
    }

    // Show/hide dropdown content on button click
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      
      // Hide all other dropdown contents
      let allContents = document.querySelectorAll('.ut2-dropdown-content');
      allContents.forEach((dropdownContent) => {
        if (dropdownContent !== content) {
          dropdownContent.style.display = 'none';
        }
      });

      // Toggle display of this dropdown's content
      content.style.display = (content.style.display === 'block') ? 'none' : 'block';

      // If the dropdown is now visible, scroll it into view
      if (content.style.display === 'block') {
        content.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }
    });

    // Change button text and hide dropdown on link click
    let links = dropdown.querySelectorAll('.ut2-dropdown-link');
    links.forEach((link) => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        btn.querySelector('span').textContent = this.textContent;
        content.style.display = 'none';
      });
    });
  });

  // Hide dropdown content when clicking outside
  window.addEventListener('click', function() {
    let contents = document.querySelectorAll('.ut2-dropdown-content');
    contents.forEach((content) => {
      content.style.display = 'none';
    });
  });
}

window.onload = function() {
    // Initialize the plugin
    function initialize() {
        // Stroke width slider
        let slider = document.getElementById('strokeWidthSlider');
        slider.value = 3;
        slider.oninput();

        // Size slider
        let sizeSlider = document.getElementById('sizeSlider');
        sizeSlider.value = 1;
        sizeSlider.oninput();

        // Apply the active stroke-linecap option
        let activeLinecapOption = document.querySelector('.linecap-option.active').dataset.value;
        applyLinecap(activeLinecapOption);
        
        // Apply the active stroke-linejoin option
        let activeLinejoinOption = document.querySelector('.linejoin-option.active').dataset.value;
        applyLinejoin(activeLinejoinOption);
        
     // Set default corner radius
let radiusSlider = document.getElementById('cornerRadiusSlider');
radiusSlider.value = 2;
radiusSlider.oninput();
    }
    
    // Apply the active stroke-linecap option
    let activeLinecapOption = document.querySelector('.linecap-option.active').dataset.value;
    applyLinecap(activeLinecapOption);

    // Apply the active stroke-linejoin option
    let activeLinejoinOption = document.querySelector('.linejoin-option.active').dataset.value;
    applyLinejoin(activeLinejoinOption);

    // Call the initialize function.
    initialize();

    // Initialize the dropdown
    initializeDropdown();
    }


// STROKE WIDTH SLIDER FOR FIGMA NODES


// Initialize a flag to true
let isFirstLoadStrw = true;
let isFirstLoadSizing = true;
let isFirstLoad = true;

// Stroke Width Slider
document.getElementById('strokeWidthSlider-strw').oninput = function() {
  if (isFirstLoadStrw) {
    isFirstLoadStrw = false;
    return;
  }
  let value = this.value;
  let strokeWidth = value / 2;
  document.getElementById('currentStrokeWidthValue-strw').value = strokeWidth;
  parent.postMessage({ pluginMessage: { type: 'apply-stroke-width', value: strokeWidth } }, '*');
}

// // Stroke Width Apply Button
// document.getElementById('applyButton-strw').addEventListener('click', function() {
//   const strokeWidthValue = document.getElementById('strokeWidthSlider-strw').value / 2;
//   parent.postMessage({ pluginMessage: { type: 'apply-stroke-width', value: strokeWidthValue } }, '*');
// });

// Corner Radius Slider
document.getElementById('cornerRadiusSlider').oninput = function() {
  if (isFirstLoad) {
    isFirstLoad = false;
    return;
  }
  let value = this.value;
  let cornerRadius = value;
  document.getElementById('currentRadiusValue').value = cornerRadius;
  parent.postMessage({ pluginMessage: { type: 'apply-radius', value: cornerRadius } }, '*');
}

// Corner Smoothing Toggle
document.getElementById('tgl2Toggle3').onchange = function() {
  let value = this.checked ? 1 : 0;
  parent.postMessage({ pluginMessage: { type: 'apply-smoothing', value: value } }, '*');
};

// // Corner Radius Apply Button
// document.getElementById('applyButton').addEventListener('click', function() {
//   const radiusValue = document.getElementById('cornerRadiusSlider').value;
//   const smoothValue = document.getElementById('tgl2Toggle3').checked ? 1 : 0;
//   parent.postMessage({ pluginMessage: { type: 'apply-radius', value: radiusValue } }, '*');
//   parent.postMessage({ pluginMessage: { type: 'apply-smoothing', value: smoothValue } }, '*');
// });

// Auto-highlight text when input gains focus
document.getElementById('currentStrokeWidthValue-strw').addEventListener('focus', function() {
  this.select();
});

document.getElementById('currentRadiusValue').addEventListener('focus', function() {
  this.select();
});


// Function to handle manual input for Stroke Width
document.getElementById('currentStrokeWidthValue-strw').addEventListener('change', function() {
    let value = this.value.replace("px", "");
    let strokeWidth = Number(value) * 2; // Convert to original scale
    document.getElementById('strokeWidthSlider-strw').value = strokeWidth;
    parent.postMessage({ pluginMessage: { type: 'apply-stroke-width', value: Number(value) } }, '*');
  });
  
  // Function to handle manual input for Corner Radius
  document.getElementById('currentRadiusValue').addEventListener('input', function() {
    let cornerRadius = parseFloat(this.value);
    if (!isNaN(cornerRadius)) {
      document.getElementById('cornerRadiusSlider').value = cornerRadius;
      parent.postMessage({ pluginMessage: { type: 'apply-radius', value: cornerRadius } }, '*');
    }
  });












let isProportionalScalingEnabled = true;

document.addEventListener('DOMContentLoaded', function() {
  let isProportionalScalingEnabled = true;

  document.getElementById('tgl2ToggleProportional').addEventListener('change', function() {
    isProportionalScalingEnabled = this.checked;
  });

  // For sizing
  const sizingValueInputs = document.querySelectorAll('.currentSizingValue');
  const sizingSliders = document.querySelectorAll('.sizing-slider');
  const sizes = [16, 24, 32, 48, 64, 96];

  // Sizing Inputs and Sliders
  sizingValueInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.select();
    });

    input.addEventListener('input', function() {
      let enteredSize = parseInt(this.value);
      if (!isNaN(enteredSize)) {
        const sliderValue = sizes.indexOf(enteredSize);
        if (sliderValue !== -1) {
          sizingSliders.forEach(slider => slider.value = sliderValue);
        }
        sizingValueInputs.forEach(otherInput => otherInput.value = enteredSize);
        parent.postMessage({ pluginMessage: { type: 'apply-sizing', value: enteredSize, isProportionalScalingEnabled } }, '*');
      }
    });
  });

  sizingSliders.forEach(slider => {
    slider.addEventListener('input', function() {
      let sliderValue = parseInt(this.value);
      if (!isNaN(sliderValue)) {
        let selectedSize = sizes[sliderValue];
        sizingValueInputs.forEach(input => input.value = selectedSize);
        parent.postMessage({ pluginMessage: { type: 'apply-sizing', value: selectedSize, isProportionalScalingEnabled } }, '*');
      }
    });
  });

  // Stroke Inputs and Slider
  const strokeValueInputs = document.querySelectorAll('#stroke-customizer .currentStrokeValue');
  const strokeSlider = document.getElementById('strokeWidthSlider-strw');

  strokeValueInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.select();
    });

    input.addEventListener('input', function() {
      let enteredStroke = parseFloat(this.value);
      if (!isNaN(enteredStroke) && enteredStroke >= 0.25 && enteredStroke <= 8) {
        strokeSlider.value = enteredStroke;
        strokeValueInputs.forEach(otherInput => otherInput.value = enteredStroke);
        // Ensure the message type matches what your plugin expects
        parent.postMessage({ pluginMessage: { type: 'apply-stroke-width', value: enteredStroke } }, '*');
      }
    });
  });

  strokeSlider.addEventListener('input', function() {
    let sliderValue = parseFloat(this.value);
    if (!isNaN(sliderValue)) {
      strokeValueInputs.forEach(input => input.value = sliderValue);
      parent.postMessage({ pluginMessage: { type: 'apply-stroke-width', value: sliderValue } }, '*');
    }
  });

// For corner radius
const cornerValueInput = document.getElementById('currentRadiusValue');
const cornerSlider = document.getElementById('cornerRadiusSlider');

cornerValueInput.addEventListener('input', function() {
  let cornerRadius = parseFloat(this.value);
  if (!isNaN(cornerRadius)) {
    cornerSlider.value = cornerRadius;
    parent.postMessage({ pluginMessage: { type: 'apply-radius', value: cornerRadius } }, '*');
  }
});

cornerSlider.addEventListener('input', function() {
  let sliderValue = parseFloat(this.value);
  if (!isNaN(sliderValue)) {
    cornerValueInput.value = sliderValue;
    parent.postMessage({ pluginMessage: { type: 'apply-radius', value: sliderValue } }, '*');
  }
});

  
  // Sizing Apply Button
  document.getElementById('applyButton-sizing').addEventListener('click', function() {
    const sliderValue = document.getElementById('sizingSlider').value;
    const sizingValue = sizes[sliderValue];
    parent.postMessage({ pluginMessage: { type: 'apply-sizing', value: sizingValue, isProportionalScalingEnabled } }, '*');
  });
});


// --------------------


// HOVER TO REVEAL CONTROLS - MAIN-BACKGROUND-CONTAINER

let lastExpandedContainer = null;

const mainContainers = document.querySelectorAll('.main-background-container');

mainContainers.forEach((mainContainer) => {
  mainContainer.addEventListener('mouseenter', function() {
    if (lastExpandedContainer && lastExpandedContainer !== mainContainer) {
      lastExpandedContainer.classList.remove('expanded');
    }
    mainContainer.classList.add('expanded');
    lastExpandedContainer = mainContainer;
  });
});


// let lastExpandedContainer = null;

// const mainContainers = document.querySelectorAll('.main-background-container');

// mainContainers.forEach((mainContainer) => {
//   mainContainer.addEventListener('mouseenter', function() {
//     if (lastExpandedContainer && lastExpandedContainer !== mainContainer) {
//       lastExpandedContainer.classList.remove('expanded');
//     }
//     mainContainer.classList.add('expanded');
//     lastExpandedContainer = mainContainer;
//   });

//   mainContainer.addEventListener('mouseleave', function() {
//     mainContainer.classList.remove('expanded');
//   });
// });



