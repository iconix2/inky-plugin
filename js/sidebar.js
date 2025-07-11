// sidebar.js

// SIDEBAR




document.addEventListener("DOMContentLoaded", function(event) {
  const sidebar = document.getElementById('sidebar');
  const tabs = document.querySelectorAll(".tab a");
  const sidePanelButton = document.querySelector(".side-panel-button");
  const menuItems = document.querySelectorAll(".menu-item");
  const overlay = document.querySelector('.overlay');
  const sidebarContent = document.getElementById('sidebar-content');

  let clicked = false;

  // Function to handle hover and active behavior of menu items
  const handleMenuItemBehavior = function() {
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("mouseenter", () => {
      menuItem.classList.add("hover");
    });

    menuItem.addEventListener("click", (event) => {
      event.preventDefault();

      if (menuItem.classList.contains("active")) {
        return;
      }

      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
      menuItem.classList.add("active");

      const dataId = menuItem.getAttribute('data-id');
      const iconsGrid = document.querySelector(`.icons-grid[data-id="${dataId}"]`);
      if (iconsGrid) {
        const gridPosition = iconsGrid.getBoundingClientRect().top + window.pageYOffset;
        const viewportHeight = window.innerHeight;
        let instantScrollPosition = gridPosition - (viewportHeight * 0.9);

        const scrollingUp = gridPosition < window.pageYOffset;
        if (scrollingUp) {
          instantScrollPosition = gridPosition - (viewportHeight * 0.1);
        }

        window.scrollTo({
          top: instantScrollPosition,
          behavior: 'auto'
        });

        setTimeout(() => {
          const targetPosition = gridPosition - 150;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }, 10);

        setTimeout(updateActiveCategory, 300);
      }
    });
  });
};


  // Add the new code snippet here
  const segmentedControlContainerDual = document.getElementById('dual-categories');
  segmentedControlContainerDual.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  // Existing code for handling clicks outside the sidebar
  document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && sidebar.classList.contains('active') && clicked) {
      hideSidebar();
    }
  });


const updateActiveCategoryOnScroll = function() {
  const gridElements = document.querySelectorAll('.icons-grid');
  const viewportHeight = window.innerHeight;
  let closestGrid = null;
  let closestGridDistance = Infinity;

  gridElements.forEach((gridElement) => {
    const gridPosition = gridElement.getBoundingClientRect().top + window.pageYOffset;
    const distance = Math.abs(window.scrollY - gridPosition);

    if (distance < closestGridDistance) {
      closestGridDistance = distance;
      closestGrid = gridElement;
    }
  });

  if (closestGrid) {
    const dataId = closestGrid.getAttribute('data-id');
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('active');
      if (menuItem.getAttribute('data-id') === dataId) {
        menuItem.classList.add('active');
      }
    });
  }
};












  const dualCategories = document.getElementById('dual-categories');
  const segmentedControlButtons = dualCategories.querySelectorAll('.segmentedControlButtonDual');

  segmentedControlButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const categoryList = document.getElementById('category-list');
      const groupList = document.getElementById('group-list');
      
      if(index === 0) { // Categories button clicked
        categoryList.style.display = "block";
        groupList.style.display = "none";
      } else { // Groups button clicked
        categoryList.style.display = "none";
        groupList.style.display = "block";
      }
    });
  });

  const hideSidebar = function() {
    sidebar.classList.remove('peek');
    sidebar.classList.remove('active');
    sidebar.classList.add('hidden');
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 500);
    clicked = false;
  };

  const revealSidebar = function() {
    if (!clicked && document.getElementById('ExploreButton').classList.contains('active')) {
      sidebar.classList.remove('hidden');
      sidebar.classList.add('peek');
    }
  };

  const extendSidebar = function() {
  sidebar.classList.remove('peek');
  sidebar.classList.remove('hidden');
  sidebar.classList.add('active');
  overlay.style.display = 'block';
  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 10);
  setTimeout(() => {
    clicked = true;
  }, 50);
};

// Prevent background scrolling when the mouse is inside the sidebar
document.getElementById('sidebar').addEventListener('mouseenter', function() {
  document.body.classList.add('no-scrollbar');
});
document.getElementById('sidebar').addEventListener('mouseleave', function() {
  document.body.classList.remove('no-scrollbar');
});


  tabs.forEach(tab => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();

      tabs.forEach(tab => {
        tab.classList.remove("active");
      });

      event.target.classList.add("active");

      if(event.target.id === 'ExploreButton') {
        revealSidebar();
      } else {
        hideSidebar();
      }
    });
  });

  document.body.addEventListener('mousemove', function(e) {
    if (e.clientX <= 20 && document.getElementById('ExploreButton').classList.contains('active')) {
      revealSidebar();
    }
  });

  sidebar.addEventListener('mouseleave', function() {
    if (clicked) {
      hideSidebar();
    }
  });

  sidebar.addEventListener('click', function() {
    if (clicked) {
      hideSidebar();
    } else {
      if (document.getElementById('ExploreButton').classList.contains('active')) {
        extendSidebar();
      }
    }
  });

  sidePanelButton.addEventListener('click', function() {
    extendSidebar();
  });

  handleMenuItemBehavior();

  // Add the scroll event listener to update the active category
  window.addEventListener('scroll', updateActiveCategoryOnScroll);

  const updateCategoryCounter = function() {
    menuItems.forEach((menuItem) => {
      // Get the data-id attribute of the menu item
      const dataId = menuItem.getAttribute('data-id');

      // Get the icon grid container with the matching data-id attribute
      const iconGridContainer = document.querySelector(`.icons-grid[data-id="${dataId}"]`);

      // Count the number of icons (span elements) in the container
      const iconCount = iconGridContainer ? iconGridContainer.querySelectorAll('span.icon').length : 0;

      // Update the category counter element with the icon count
      const categoryCounterElement = menuItem.querySelector('.category-counter');
      if (categoryCounterElement) {
        categoryCounterElement.textContent = iconCount;
      }
    });
  };

  // Call the function to update the category counters
  updateCategoryCounter();


});



