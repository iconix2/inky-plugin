// pattern.js

// PATTERN BUTTON


// let patternButton = document.createElement('button');
// patternButton.id = 'patternButton';
// // patternButton.innerHTML = `<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
// // <path fill-rule="evenodd" clip-rule="evenodd" d="M0.585786 0.585786C0 1.17157 0 2.11438 0 4V6C0 7.88562 0 8.82843 0.585786 9.41421C1.17157 10 2.11438 10 4 10H8C9.88562 10 10.8284 10 11.4142 9.41421C12 8.82843 12 7.88562 12 6V4C12 2.11438 12 1.17157 11.4142 0.585786C10.8284 0 9.88562 0 8 0H4C2.11438 0 1.17157 0 0.585786 0.585786ZM3.19031 7.99994H4.50849L4.94009 6.67324H7.0408L7.47156 7.99994H8.78974L6.78406 2.18176H5.19883L3.19031 7.99994ZM6.72903 5.71301L6.01417 3.51131H5.96872L5.25247 5.71301H6.72903Z" fill="#6D6D6D"/></svg>`;

// document.body.appendChild(patternButton);

patternButton.addEventListener('click', function() {
  console.log("Pattern button clicked"); // Add this line
    let selectedIcons = document.querySelectorAll('.icon.selected');
  if (selectedIcons.length === 0) return;

  const patternSize = 6; // Number of repeats in the pattern
  const spacing = 100; // Spacing between icons in the pattern

  selectedIcons.forEach((icon, index) => {
    const x = (index % patternSize) * spacing; // x coordinate for the icon
    const y = Math.floor(index / patternSize) * spacing; // y coordinate for the icon

    const matchingSvg = icon.querySelector(`svg[data-style="${selectedStyle}"]`);
    if (matchingSvg) {
      console.log('Sending message to import single icon for pattern');
      window.parent.postMessage({
        pluginMessage: {
          type: 'import',
          content: matchingSvg.outerHTML,
          id: icon.id,
          color: color,
          style: matchingSvg.dataset.style,
          importOption: importOption,
          size: size,
          position: { x, y } // Pass the position for the icon in the pattern
        }
      }, '*');
    }
  });
});
