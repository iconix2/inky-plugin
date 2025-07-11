// canvaspreview.js

// CANVAS ICON PREVIEW

document.addEventListener("DOMContentLoaded", function() {
  const icons = document.querySelectorAll('.icon, .alt-icon'); // Select both types of icons
  const canvasContainer = document.querySelector('.canvas-container');
  const canvas = document.getElementById('canvas');
  const iconNameDiv = document.getElementById('icon-name');
  const iconSubnameDiv = document.getElementById('icon-subname'); // Sub-name placeholder
  const iconTagsDiv = document.getElementById('icon-tags');
  const downloadButton = document.getElementById('download-button');
  // const importButton = document.getElementById('import-button');
  const toggleButton = document.getElementById('toggle-canvas');

  // // Initially, the canvas functionality is enabled
  // let canvasEnabled = true;


  // Initially, the canvas functionality is disabled
  let canvasEnabled = false;

  // Set initial styles to disable the canvas
  canvasContainer.style.opacity = '0'; // Hide the canvas
  canvasContainer.style.maxHeight = '0px'; // Collapse the container

  // Function to display an icon inside the canvas
  function displayIcon(icon) {
    const iconContent = icon.innerHTML; // Get the inner HTML content of the main icon
    const iconName = icon.id ? icon.id.charAt(0).toUpperCase() + icon.id.slice(1) : ''; // Capitalize the first letter of the ID
    const iconTags = icon.getAttribute('data-id') ? icon.getAttribute('data-id').split(', ').slice(0, 4) : []; // Get the first 4 tags

    // Clear the content of the canvas
    canvas.innerHTML = '';

    // Append the main icon to the canvas
    canvas.innerHTML += `<div id="preview-icon">${iconContent}</div>`;

    // Set the name
    iconNameDiv.textContent = iconName;

    // Set the sub-name (placeholder)
    iconSubnameDiv.textContent = 'fa-icon-grid'; // Placeholder sub-name

    // Clear previous tags and set the new ones (up to 4)
    iconTagsDiv.innerHTML = '';
    iconTags.forEach(tag => {
      const tagDiv = document.createElement('div');
      tagDiv.className = 'icon-tag';
      tagDiv.textContent = tag;
      tagDiv.addEventListener('click', function() {
        if (tagDiv.classList.contains('active-tag')) {
          // If the tag is already active, deactivate it and clear the search bar
          tagDiv.classList.remove('active-tag');
          iconSearch.value = ''; // Uncomment if using search functionality
          showPlaceholderIcon(); // Uncomment if needed
          toggleClearButton(); // Uncomment if needed
        } else {
          // If the tag is not active, deactivate other tags and activate the clicked tag
          document.querySelectorAll('.icon-tag').forEach(t => t.classList.remove('active-tag'));
          tagDiv.classList.add('active-tag');
          iconSearch.value = tag; // Uncomment if using search functionality
          hidePlaceholderIcon(); // Uncomment if needed
          toggleClearButton(); // Uncomment if needed
        }
        // Call the filterIcons function to filter the icons
        filterIcons(); // Uncomment if needed
      });
      iconTagsDiv.appendChild(tagDiv);
    });
  }

  // Display the first icon by default
  displayIcon(icons[0]);

  // Toggle the canvas display on button click
  toggleButton.addEventListener('click', function() {
    canvasEnabled = !canvasEnabled;
    if (canvasEnabled) {
      canvasContainer.style.opacity = '1'; // Show the canvas
      canvasContainer.style.maxHeight = '150px'; // Set the max-height to the original value
    } else {
      canvasContainer.style.opacity = '0'; // Hide the canvas
      canvasContainer.style.maxHeight = '0px'; // Collapse the container
    }
  });

  // Download button click event (add functionality as needed)
  downloadButton.addEventListener('click', function() {
    // Download functionality here
  });

  icons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
      // If the canvas is disabled, do nothing
      if (!canvasEnabled) return;

      // Display the hovered icon
      displayIcon(icon);
    });
  });


  // Add the transition style to the container
  const container = document.querySelector('.container');
  container.style.transition = ' transform 0.3s ease-in-out';

  let ticking = false;
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const currentScrollTop = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
        // Scrolling down
        container.style.transform = 'translateY(0)';
      } else if (currentScrollTop < lastScrollTop || currentScrollTop === 0) {
        // Scrolling up or at the top
        container.style.transform = 'translateY(38px)';
      }

      // When scroll is at the top, reset transform
      if (currentScrollTop === 0) {
        container.style.transform = 'none';
      }

      lastScrollTop = currentScrollTop;
      ticking = false;
    });

    ticking = true;
  }
});

});

// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const previewElement = document.getElementById("preview");
  const toggleButton = document.getElementById("togglePreviewButton");

  // Set initial states
  toggleButton.textContent = "Hide Preview";
  previewElement.style.display = "flex";  // Explicitly set initial display state
  toggleButton.style.marginTop = "0";  // No margin when preview is shown

  toggleButton.addEventListener("click", () => {
    if (previewElement.style.display === "flex") {
      previewElement.style.display = "none";
      toggleButton.textContent = "Show Preview";
      toggleButton.style.marginTop = "20px";  // Add margin when preview is hidden
    } else {
      previewElement.style.display = "flex";
      toggleButton.textContent = "Hide Preview";
      toggleButton.style.marginTop = "0";  // Remove margin when preview is shown
    }
  });
});





// PREVIEW WINDOW

const svgIconMap = {
'apply-effects': `<svg width="126" height="126" viewBox="0 0 126 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_di_631_10)">
<path d="M51 36V87" stroke="#F76ECC" stroke-width="6" stroke-linejoin="round"/>
</g>
<g filter="url(#filter1_di_631_10)">
<path d="M102 36H24" stroke="#F76ECC" stroke-width="6" stroke-linejoin="round"/>
</g>
<g filter="url(#filter2_bii_631_10)">
<path d="M88.0294 82.9706C84.5611 86.4389 82.8269 88.1731 80.6216 89.0866C78.4164 90 75.9639 90 71.0589 90H45C33.6863 90 28.0294 90 24.5147 86.4853C21 82.9706 21 77.3137 21 66V30C21 18.6863 21 13.0294 24.5147 9.51472C28.0294 6 33.6863 6 45 6H81C92.3137 6 97.9706 6 101.485 9.51472C105 13.0294 105 18.6863 105 30V56.0589C105 60.9639 105 63.4164 104.087 65.6216C103.173 67.8269 101.439 69.5611 97.9706 73.0294L88.0294 82.9706Z" stroke="#F76ECC" stroke-opacity="0.18" stroke-width="6" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_di_631_10" x="24" y="12" width="54" height="99" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="12"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.431373 0 0 0 0 0.8 0 0 0 0.22 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_631_10"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_631_10" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.8" dy="1.8"/>
<feGaussianBlur stdDeviation="0.9"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_631_10"/>
</filter>
<filter id="filter1_di_631_10" x="0" y="9" width="126" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="12"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.431373 0 0 0 0 0.8 0 0 0 0.22 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_631_10"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_631_10" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1.8" dy="1.8"/>
<feGaussianBlur stdDeviation="0.9"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_631_10"/>
</filter>
<filter id="filter2_bii_631_10" x="6" y="-9" width="114" height="114" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="6"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_631_10"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_631_10" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.54" dy="0.6"/>
<feGaussianBlur stdDeviation="0.3"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.92549 0 0 0 0 0.976471 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_631_10"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.6" dy="-0.6"/>
<feGaussianBlur stdDeviation="1.8"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.431373 0 0 0 0 0.8 0 0 0 0.55 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_631_10" result="effect3_innerShadow_631_10"/>
</filter>
</defs>
</svg>

`
,

'apply-effects-2': `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_177_1291)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 56C0 38.3269 14.3269 24 32 24H96C113.673 24 128 38.3269 128 56V96C128 113.673 113.673 128 96 128H32C14.3269 128 0 113.673 0 96V56ZM32 40C23.1634 40 16 47.1634 16 56V96C16 104.837 23.1634 112 32 112H96C104.837 112 112 104.837 112 96V56C112 47.1634 104.837 40 96 40H32Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 0C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40C27.5817 40 24 36.4183 24 32V8C24 3.58172 27.5817 0 32 0Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M64 0C68.4183 0 72 3.58172 72 8V32C72 36.4183 68.4183 40 64 40C59.5817 40 56 36.4183 56 32V8C56 3.58172 59.5817 0 64 0Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M96 0C100.418 0 104 3.58172 104 8V32C104 36.4183 100.418 40 96 40C91.5817 40 88 36.4183 88 32V8C88 3.58172 91.5817 0 96 0Z" fill="#D9D9D9"/>
<rect x="7.5" y="32.5" width="112" height="87" rx="24.5" stroke="#2F80ED"/>
<path d="M32 8L32 32" stroke="#2F80ED"/>
<path d="M64 8L64 32" stroke="#2F80ED"/>
<path d="M96 8L96 32" stroke="#2F80ED"/>
<circle cx="96" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="64" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="32" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="96" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="64" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="32" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
</g>
<defs>
<clipPath id="clip0_177_1291">
<rect width="128" height="128" rx="1" fill="white"/>
</clipPath>
</defs>
</svg>`, 

'apply-effects-3': `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 64C8 48.9151 8 41.3726 12.6863 36.6863C17.3726 32 24.9151 32 40 32H88C103.085 32 110.627 32 115.314 36.6863C120 41.3726 120 48.9151 120 64V88C120 103.085 120 110.627 115.314 115.314C110.627 120 103.085 120 88 120H40C24.9151 120 17.3726 120 12.6863 115.314C8 110.627 8 103.085 8 88V64Z" stroke="#D9D9D9" stroke-width="12" stroke-linecap="square"/>
<path d="M32 8V32" stroke="#D9D9D9" stroke-width="12" stroke-linecap="square"/>
<path d="M64 8V32" stroke="#D9D9D9" stroke-width="12" stroke-linecap="square"/>
<path d="M96 8V32" stroke="#D9D9D9" stroke-width="12" stroke-linecap="square"/>
<rect x="7.5" y="32.5" width="112" height="87" rx="15.5" stroke="#2F80ED"/>
<path d="M32 8.5L32 32.5" stroke="#2F80ED"/>
<path d="M64 8L64 32" stroke="#2F80ED"/>
<path d="M96 8.5L96 32.5" stroke="#2F80ED"/>
<circle cx="96" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="64" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="32" cy="32.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="96" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="64" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
<circle cx="32" cy="7.5" r="1" fill="#D9D9D9" stroke="#2F80ED"/>
</svg>
`,
};




