// tabnavigation.js

function openCustomNavTab(tabName) {
  var i;
  var x = document.getElementsByClassName("custom-nav-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  var buttons = document.getElementsByClassName("custom-nav-bar-item");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active"); 
  }
  
  document.getElementById(tabName).style.display = "block";  
  document.getElementById(tabName+"Button").classList.add("active");

  // Manage the notification visibility and dimmed effect
  const notification = document.getElementById('selected-icon-notification');
  const blurEffect = document.getElementById('blur-effect'); // Replace with the actual ID of your dimmed effect element
  if (notification && blurEffect) {
    if (tabName === 'Explore' && shouldShowNotification()) {
      notification.classList.add('visible');
      blurEffect.style.visibility = 'visible'; // Show the dimmed effect
    } else {
      notification.classList.remove('visible');
      blurEffect.style.visibility = 'hidden'; // Hide the dimmed effect
    }
  }

  // Scroll to the top of the plugin
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function shouldShowNotification() {
  const selectedIcons = document.querySelectorAll('.icon.selected').length;
  return selectedIcons > 0 && selectionMode;
}


////////// OPEN TAB AND GO TO TOP ////////////

// function openCustomNavTab(tabName) {
//   var i;
//   var x = document.getElementsByClassName("custom-nav-tab");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }

//   var buttons = document.getElementsByClassName("custom-nav-bar-item");
//   for (i = 0; i < buttons.length; i++) {
//     buttons[i].classList.remove("active"); 
//   }
  
//   document.getElementById(tabName).style.display = "block";  
//   document.getElementById(tabName+"Button").classList.add("active");

//   // Scroll to the top of the plugin
//   window.scrollTo({top: 0, behavior: 'smooth'});

// }

////


// Function to check if the Explore tab is active
function isExploreTabActive() {
    return document.getElementById('Explore').style.display === 'block';
}

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    // Only execute the logic if the Explore tab is active
    if (isExploreTabActive()) {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Check if at the top of the page
        if (currentScroll <= 0) {
            document.querySelector('.custom-nav-bar').classList.remove('nav-hidden');
        }
        // Check if scrolling down
        else if (currentScroll > lastScrollTop) {
            document.querySelector('.custom-nav-bar').classList.add('nav-hidden');
        }
        // Check if scrolling up
        else if (currentScroll < lastScrollTop) {
            document.querySelector('.custom-nav-bar').classList.remove('nav-hidden');
        }

        lastScrollTop = currentScroll;
    }
}, false);




