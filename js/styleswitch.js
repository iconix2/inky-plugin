// styleswitch.js

// SWITCH STYLE



const tabs = document.querySelectorAll(".tab a");
tabs.forEach(tab => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();

    tabs.forEach(tab => {
      tab.classList.remove("active");
    });

    event.target.classList.add("active");
    selectedStyle = event.target.dataset.tab;

    applyStyle();
    filterIcons();  // Add this line
  });
});
