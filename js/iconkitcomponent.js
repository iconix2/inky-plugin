// iconkitcomponent.js

// ICONKIT COMPONENT BUTTONS


// document.getElementById('iconkit-button-group').addEventListener('click', function(event) {
//         if (event.target.tagName === 'BUTTON' && event.target.id.startsWith('button-item-')) {
//             const itemType = event.target.id.replace('button-', '');
//             parent.postMessage({ pluginMessage: { type: `import-${itemType}` } }, '*');
//         }
//     });

    document.getElementById('import-item-1').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-1' } }, '*');
});

document.getElementById('import-item-2').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-2' } }, '*');
});



document.getElementById('import-item-3').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-3' } }, '*');
});


document.getElementById('import-item-4').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-4' } }, '*');
});


document.getElementById('import-item-5').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-5' } }, '*');
});

document.getElementById('import-item-6').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-6' } }, '*');
});

document.getElementById('import-item-7').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-7' } }, '*');
});

document.getElementById('import-item-8').addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'import-item-8' } }, '*');
});
// -----------------------------------------
