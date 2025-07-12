
//  iconkitbuttons.js
//-------------------------------------


// MAYBE NOT BEING USED?

const buttonA = document.getElementById('iconkitButtonA');
        const buttonB = document.getElementById('iconkitButtonB');
        const buttonC = document.getElementById('iconkitButtonC');

        buttonA.addEventListener('click', () => {
            parent.postMessage({ pluginMessage: { type: 'apply-iconkit-button-a' } }, '*');
        });

        buttonB.addEventListener('click', () => {
            parent.postMessage({ pluginMessage: { type: 'apply-iconkit-button-b' } }, '*');
        });

        buttonC.addEventListener('click', () => {
            parent.postMessage({ pluginMessage: { type: 'apply-iconkit-button-c' } }, '*');
        });


// CREATE BUTTON UIKIT - DEFINITELY USED

document.getElementById('createButton').addEventListener('click', function() {
    window.parent.postMessage({ pluginMessage: { type: 'create-button' } }, '*');
});

// --------------------------------------------------
