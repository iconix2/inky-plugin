// neocolorpicker.js

//SWITCHABLE COLOR PICKER FOR NEO


document.addEventListener('DOMContentLoaded', function() {
        var button = document.getElementById('applyEffectsButton12');
        var visibleColor = document.getElementById('visible-color');
        var colorOptions = Array.from(document.querySelectorAll('#neo-color-picker .color-option'));
        var selectedColorElement = null;

        colorOptions.forEach(function(colorOption) {
            colorOption.addEventListener('click', function(event) {
                selectedColorElement = event.target; // Save selected color element
            });
        });

        // Apply color changes and collapse the button after the mouse leaves
        button.addEventListener('mouseleave', function() {
            if (selectedColorElement) {
                var selectedColor = selectedColorElement.style.backgroundColor;
                var activeColor = visibleColor.firstElementChild.style.backgroundColor;

                // Swap colors
                selectedColorElement.style.backgroundColor = activeColor;
                visibleColor.firstElementChild.style.backgroundColor = selectedColor;

                // Clear selected color element
                selectedColorElement = null;
            }
        });

        // Expand the button when mouse enters
        button.addEventListener('mouseenter', function() {
            button.style.maxWidth = '500px';
        });
    });

