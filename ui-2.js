// 🔄 test commit: updating ui.js ABC


// -------------------------------------



      const icons = Array.from(document.getElementsByClassName('icon'));
      let selectedStyle = "line";
      let selectedSize = 'small';
    
      function applyStyle() {
  const svgs = document.querySelectorAll('.icon svg');

  svgs.forEach(svg => {
    if (svg.dataset.style === selectedStyle && !svg.classList.contains('alt-icon')) {
      svg.style.display = "block";
      svg.parentNode.style.display = "inline-flex"; // show parent if it contains matching svg
    } else {
      svg.style.display = "none";
    }
  });
}
      
      let sliderValue = 0;

document.getElementById('dyn-button').addEventListener('click', function() {
  this.style.width = "calc(100% - 0px)";
  document.getElementById('dyn-icon').style.display = "none";
  document.getElementById('dyn-slider').style.display = "block";
  this.style.background = `linear-gradient(to right, #897DFF ${sliderValue}%, #222222 ${sliderValue}%)`;
});

document.getElementById('dyn-slider').addEventListener('input', function() {
  sliderValue = this.value;
  document.getElementById('dyn-button').style.background = `linear-gradient(to right, #897DFF ${sliderValue}%, #222222 ${sliderValue}%)`;
});

document.getElementById('dyn-div').addEventListener('mouseleave', function() {
  document.getElementById('dyn-button').style.width = "32px";
  document.getElementById('dyn-icon').style.display = "block";
  document.getElementById('dyn-slider').style.display = "none";
  document.getElementById('dyn-button').style.background = "#222222";
});



// --------------------------------------------------




















