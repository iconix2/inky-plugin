// clipboard.js

// CLIPBOARD-JS
var iconContainers = document.querySelectorAll('.icon');

iconContainers.forEach(function(container) {
  container.addEventListener('contextmenu', function(event) {
    // Ignore the context menu if the shift key is being held down
    if (event.shiftKey) {
      return;
    }
    event.preventDefault(); // Prevent default context menu from showing

    // Show your custom context menu here, instead of copying the SVG immediately
    showIconContextMenu(event, container);
  });
});
