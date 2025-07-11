// theme.js

// DARK LIGHT THEME
let isAutoModeActive = false;

// Function to set the theme based on the mode
function setTheme(mode) {
  if (mode === 'auto') {
    isAutoModeActive = true;
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    document.body.setAttribute("data-theme", systemPreference);
  } else {
    isAutoModeActive = false;
    document.body.setAttribute("data-theme", mode);
  }

  // Synchronize radio buttons
  document.getElementById("light-mode").checked = (mode === "light");
  document.getElementById("dark-mode").checked = (mode === "dark");

  // Synchronize theme switcher checkbox
  document.querySelector('#tgl2SmoothCorner #tgl2Toggle4').checked = (mode === "dark");

  // Synchronize segmented control
  const tripleButtons = document.querySelectorAll('.segmentedControlButtonTriple');
  tripleButtons.forEach((btn) => {
    btn.classList.remove('active');
    if (btn.textContent.trim().toLowerCase() === mode) {
      btn.classList.add('active');
    }
  });
}

// Function to handle system theme changes
function handleSystemThemeChange(e) {
  if (isAutoModeActive) {
    const newPreference = e.matches ? 'dark' : 'light';
    document.body.setAttribute("data-theme", newPreference);
  }
}

// Event Listener for System Theme changes
const systemThemeListener = window.matchMedia('(prefers-color-scheme: dark)');
systemThemeListener.addListener(handleSystemThemeChange);

// Function to toggle between light and dark mode based on checkbox
function toggleThemeCheckbox() {
  const isChecked = document.querySelector('#tgl2SmoothCorner #tgl2Toggle4').checked;
  const newTheme = isChecked ? "dark" : "light";
  setTheme(newTheme);
}

// Function to toggle between light and dark mode based on radio buttons
function toggleThemeRadio() {
  const lightModeRadio = document.getElementById("light-mode");
  const darkModeRadio = document.getElementById("dark-mode");

  if (lightModeRadio.checked) {
    setTheme("light");
  } else if (darkModeRadio.checked) {
    setTheme("dark");
  }
}

// Function to toggle theme from segmented control
function toggleThemeSegmented() {
  const controlText = this.textContent.trim().toLowerCase();
  setTheme(controlText);
  updateTheme(controlText);
}

function changeColor(newColor) {
    // Get the current theme (dark or light)
    var currentTheme = document.body.getAttribute('data-theme');

    // Select all elements with the current theme
    var themeElements = document.querySelectorAll(`[data-theme="${currentTheme}"]`);

    // Update the --detail-A variable within each of these elements
    themeElements.forEach(function(elem) {
        elem.style.setProperty('--detail-A', newColor);
    });
}


// Add event listener to theme toggle checkbox
document.querySelector('#tgl2SmoothCorner #tgl2Toggle4').addEventListener('change', toggleThemeCheckbox);

// Add event listeners to the radio buttons
document.getElementById("light-mode").addEventListener('change', toggleThemeRadio);
document.getElementById("dark-mode").addEventListener('change', toggleThemeRadio);

// Add event listeners to the segmented control buttons
const segmentedButtons = document.querySelectorAll('.segmentedControlButtonTriple span');
segmentedButtons.forEach(button => {
button.parentNode.addEventListener('click', toggleThemeSegmented);
});

// Handle communication with Figma plugin for theme persistence
document.addEventListener('DOMContentLoaded', function() {
// Function to update theme to the plugin
function updateTheme(theme) {
parent.postMessage({ pluginMessage: { type: 'theme-changed', theme } }, '*');
}

// Event listeners for theme changes
document.querySelector('#tgl2SmoothCorner #tgl2Toggle4').addEventListener('change', () => updateTheme(toggleThemeCheckbox() ? 'dark' : 'light'));
document.getElementById("light-mode").addEventListener('change', () => updateTheme('light'));
document.getElementById("dark-mode").addEventListener('change', () => updateTheme('dark'));

segmentedButtons.forEach(button => {
    button.parentNode.addEventListener('click', () => updateTheme(button.textContent.trim().toLowerCase()));
});

// Handle theme change from the plugin
window.onmessage = (event) => {
    const { type, theme } = event.data.pluginMessage;
    if (type === 'set-theme') {
        setTheme(theme);
    }
};
});

// Retrieve and set the initial theme from Figma plugin when the UI loads
parent.postMessage({ pluginMessage: { type: 'request-theme' } }, '*');
// -----------------------------------


