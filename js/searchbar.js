// searchbar.js 

      let sizeChanged = false;



      // --------------
      // SEARCH BAR


      function filterIcons() {
  const term = iconSearch.value.toLowerCase();
  let displayedCategories = new Set(); // Store the categories that have displayed icons

  icons.forEach(icon => {
    const id = icon.id.toLowerCase();
    const dataId = icon.dataset.id.toLowerCase().split(", ");
    const matchingSvg = icon.querySelector(`svg[data-style="${selectedStyle}"]`);
    const category = icon.closest('.icons-grid').dataset.id.toLowerCase();
    const categoryPanel = document.querySelector(`.category-panel[data-id="${category}"]`);
    const categoryName = categoryPanel.querySelector('.category-name').textContent.toLowerCase();

    // Check if the search term matches the category name, icon ID, or any value in data-id
    if ((categoryName.startsWith(term) || id.startsWith(term) || dataId.some(item => item.startsWith(term))) && matchingSvg) {
      icon.style.display = "inline-flex";
      displayedCategories.add(category); // Add the category to the set of displayed categories
    } else {
      icon.style.display = "none";
    }
  });

  // Handle the display of category panels
  const categoryPanels = document.querySelectorAll('.category-panel');
  categoryPanels.forEach(panel => {
    const category = panel.dataset.id.toLowerCase();

    // Only display the panel if its category has displayed icons
    if (displayedCategories.has(category)) {
      panel.style.display = "flex"; // Show the category panel
    } else {
      panel.style.display = "none"; // Hide the category panel
    }
  });

  const noResultsMessage = document.getElementById('no-results-container');
  noResultsMessage.style.display = displayedCategories.size === 0 ? "block" : "none";
}

const iconSearch = document.getElementById('searchBox');
iconSearch.addEventListener('input', filterIcons);

// ... rest of the code ...

// ... rest of the code ...

      function adjustIconSize() {
        icons.forEach(icon => {
          icon.classList.remove('small', 'large');
          icon.classList.add(selectedSize);
        });
      }
    
      const sizes = document.querySelectorAll('.size-selector .size');
      sizes.forEach(size => {
        size.addEventListener('click', function(e) {
          e.preventDefault();
          selectedSize = this.dataset.size;
          sizes.forEach(size => size.classList.remove('active'));
          this.classList.add('active');
          adjustIconSize();
        });
      });

      // ---------

      function clearInput() {
        const searchBox = document.getElementById('searchBox');
        searchBox.value = '';
        toggleClearButton();
        if (!sizeChanged) {
          showPlaceholderIcon();
        }
        filterIcons(); // call your function to filter the icons
      }

      function toggleClearButton() {
        const searchBox = document.getElementById('searchBox');
        const clearButton = document.querySelector('.clear-button');
        if (searchBox.value.length > 0) {
          clearButton.style.display = 'block';
        } else {
          clearButton.style.display = 'none';
        }
      }

      function hidePlaceholderIcon() {
        const icon = document.querySelector('.placeholder-icon');
        icon.classList.add('hide');
      }

      function showPlaceholderIcon() {
        const searchBox = document.getElementById('searchBox');
        if (searchBox.value.length === 0 && !document.activeElement.isEqualNode(searchBox) && !sizeChanged) {
          const icon = document.querySelector('.placeholder-icon');
          icon.classList.remove('hide');
        }
      }

      // when the size changes
      function sizeChange() {
        sizeChanged = true;
        // your existing code here
      }