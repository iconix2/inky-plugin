// 🔄 test commit: updating COLORPICKER BOI


// Function to change the color of the icons and the active color indicator
function changeIconColor(color, element) {
    // If an element was provided (i.e., a color item was clicked), update the active color indicator
    if (element) {
        // Remove 'active' class from all color items
        let colorItems = document.querySelectorAll('.color-item');
        for (let item of colorItems) {
            item.classList.remove('active');
        }

        // Add 'active' class to the clicked color item
        element.classList.add('active');
    }
    
    // Change the color of the icons
    var icons = document.querySelectorAll('.icon svg *'); // select all child elements within .icon svg
    icons.forEach(function(icon) {
        // If the icon has a stroke-width attribute (i.e., it is a stroked path), change only the stroke color
        if (icon.getAttribute('stroke-width') !== null) {
            icon.style.setProperty('stroke', color, 'important');
        } else {
            // If the icon does not have a stroke-width attribute (i.e., it is a filled shape), change only the fill color
            icon.style.setProperty('fill', color, 'important');
        }
    });
}

// Click event on color items
document.querySelectorAll('.color-item').forEach(function(item) {
    item.addEventListener('click', function(event) {
        var color = event.target.style.backgroundColor;
        changeIconColor(color, event.target);
    });
});

// Input event on the color picker
document.querySelector('.color-picker').addEventListener('input', function(event) {
    var color = event.target.value;
    changeIconColor(color, event.target.parentElement);
    event.target.parentElement.style.backgroundColor = color; // Change the color of the last color picker frame
});