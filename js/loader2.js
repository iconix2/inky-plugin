/* loader.js */

function showLoader() {
  const loaderContainer = document.getElementById('loaderContainer');
  loaderContainer.style.opacity = '1';
  loaderContainer.style.transform = 'translateY(0%)'; // reset to initial position
  loaderContainer.style.display = 'flex';  // To maintain the flexbox centering
}

function hideLoader() {
  const loaderContainer = document.getElementById('loaderContainer');
  loaderContainer.style.opacity = '0';
  loaderContainer.style.transform = 'scale(0.5)'; // zoom out

  setTimeout(() => {
    loaderContainer.style.display = 'none';
  }, 500);
}


// Show the loader as soon as the script runs
showLoader();

// Automatically hide the loader after 3 seconds
setTimeout(hideLoader, 3000);
