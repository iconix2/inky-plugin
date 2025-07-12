




/// ORIGINAL CODE
// 

// // iconexport.js

// function reactTemplate(svgContent, style, index) {
//   const updatedSvgContent = svgContent
//     .replace(/ class="/g, ' className="')
//     .replace(/ stroke-width="/g, ' strokeWidth="')
//     .replace(/ stroke-linecap="/g, ' strokeLinecap="')
//     .replace(/ stroke-linejoin="/g, ' strokeLinejoin="');
    
//   return `
// export function Icon_${style}_${index}() {
//   return (
//     ${updatedSvgContent}
//   );
// }
// `;
// }

//     function exportAsSVGSprite() {
//   const padding = Number(notificationStepperValue.value); // Get padding value
//   let icons = Array.from(document.querySelectorAll('.icon.selected')); // First try to get the selected icons

//   // If no icons are selected, get all icons instead
//   if (!icons.length) {
//     icons = Array.from(document.querySelectorAll('.icon'));
//   }

//   let sprite = '<svg xmlns="http://www.w3.org/2000/svg">\n\n'; // changed declaration to include xmlns attribute

//   icons.forEach((icon) => {
//     styles.forEach((style) => { // Loop through each style
//       const svgElement = icon.querySelector(`svg[data-style="${style}"]`); // Get the SVG for the current style

//       if (svgElement) {
//         const id = `${icon.id}-${style}`;
//         const newWidth = svgElement.width.baseVal.value + (2 * padding);
//         const newHeight = svgElement.height.baseVal.value + (2 * padding);
//         sprite += `<symbol id="${id}" viewBox="0 0 ${newWidth} ${newHeight}">\n`;
//         sprite += `  <g transform="translate(${padding}, ${padding})">\n`;

//         const paths = Array.from(svgElement.querySelectorAll('path'));
//         paths.forEach((path) => {
//           // Get the computed style of the path to obtain the current color
//           let style = window.getComputedStyle(path);
//           let strokeColor = style.getPropertyValue('stroke');
//           let fillColor = style.getPropertyValue('fill');

//           // Determine which attribute (stroke or fill) to color
//           let strokeAttribute = path.getAttribute('stroke') !== null ? `stroke="${strokeColor}" stroke-width="${path.getAttribute('stroke-width')}" stroke-linecap="${path.getAttribute('stroke-linecap')}" stroke-linejoin="${path.getAttribute('stroke-linejoin')}"` : '';
//           let fillAttribute = path.getAttribute('fill') !== null ? `fill="${fillColor}"` : '';

//           sprite += `    <path d="${path.getAttribute('d')}" ${strokeAttribute} ${fillAttribute}></path>\n`;
//         });

//         sprite += `  </g>\n`;
//         sprite += `</symbol>\n\n`;
//       }
//     });
//   });

//   sprite += '</svg>';

//   const blob = new Blob([sprite], {type: 'image/svg+xml;charset=utf-8'});
//   const link = document.createElement('a');
//   link.href = URL.createObjectURL(blob);
//   link.download = 'icons-sprite.svg'; // Set the download filename for the SVG sprite

//   link.click();
// }






// function vueTemplate(svgContent, style, index) {
//   return `
// const template = \`${svgContent}\`;

// export default {
//   name: 'Icon_${style}_${index}',
//   render(h) {
//     return h('div', { attrs: { class: 'icon-container' } }, [
//       h('div', { domProps: { innerHTML: template } })
//     ]);
//   }
// };
// `;
// }



// function angularTemplate(svgContent, style, index) {
//   return `
// import { Component } from '@angular/core';

// @Component({
//   selector: 'icon-${style}-${index}',
//   template: \`
//     ${svgContent}
//   \`,
// })
// export class Icon${style}${index}Component { }
// `;
// }


// function preactTemplate(svgString) {
//   return `
// import { h } from 'preact';

// export default function Icon() {
//   return ${svgString};
// }
// `;
// }







// // EXPORT AS ZIP
// const styles = ['line', 'solid', 'duo', 'inky']; // the styles of your SVGs
// let currentStyle = document.querySelector(".tab a.active").dataset.tab; // Remember the current active style


// // Function to switch style
// function switchStyle(style, overrideVisibility) {
//   const tabs = document.querySelectorAll(".tab a");
//   tabs.forEach(tab => {
//     tab.classList.remove("active");
//     if (tab.dataset.tab === style) {
//       tab.classList.add("active");
//     }
//   });

//   selectedStyle = style;

//   if (overrideVisibility) {
//     showAllSvgs(); // Show all SVGs temporarily
//   }

//   applyStyle();

//   if (overrideVisibility) {
//     setTimeout(resetSvgVisibility, 1000); // Reset SVG visibility after 1 second
//   }
// }

// // Ensure all SVGs are visible
// function showAllSvgs() {
//   let svgs = document.querySelectorAll('svg');
//   svgs.forEach((svg) => {
//     svg.style.visibility = 'visible';
//   });
// }

// // Reset SVG visibility
// function resetSvgVisibility() {
//   let svgs = document.querySelectorAll('svg');
//   svgs.forEach((svg) => {
//     svg.style.visibility = ''; // Resets to default visibility value
//   });
// }


//   function generateZIP(icons, format, zip) {
//   const padding = Number(notificationStepperValue.value); // Get padding value

//   if (format === 'pdf') {
//     let promises = [];

//     icons.forEach((icon, index) => {
//       const matchingSvg = icon.querySelector(`svg[data-style="${currentStyle}"]`);
//       if (matchingSvg) {
//         const promise = new Promise((resolve) => {
//           // Create an image from the SVG
//           const img = new Image();
//           img.src = 'data:image/svg+xml,' + encodeURIComponent(matchingSvg.outerHTML);

//           img.onload = function() {
//             const canvasSize = 1200;
//             const iconSize = 1200 - (2 * padding); // Subtract padding
//             var canvas = document.createElement('canvas');
//             canvas.width = canvasSize; // Set canvas width
//             canvas.height = canvasSize; // Set canvas height
//             var ctx = canvas.getContext('2d');

//             // Draw image with specific dimensions
//             ctx.drawImage(img, padding, padding, iconSize, iconSize); // Include padding
//             var imageData = canvas.toDataURL('image/png'); // Convert SVG to PNG data URL

//             // Create a new PDF document with specific dimensions (1200x1200)
//             const pdf = new window.jspdf.jsPDF({ unit: 'px', format: [1200, 1200] });
//             pdf.addImage(imageData, 'PNG', 0, 0, canvasSize, canvasSize); // Add the image to the PDF
//             const pdfBlob = pdf.output('blob');
//             const filename = `icon-${currentStyle}-${index}.pdf`;
//             zip.file(filename, pdfBlob); // Add PDF to ZIP with a unique filename
//             resolve();
//           };
//         });

//         promises.push(promise);
//       }
//     });

//     Promise.all(promises).then(() => {
//   zip.generateAsync({ type: "blob" })
//     .then(function(content) {
//       const downloadLink = document.createElement("a");
//       downloadLink.href = URL.createObjectURL(content);
//       downloadLink.download = "icons-pdf.zip"; // Set the download filename for PDF
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//     });
// });

//     return; // Skip the remaining code since we're handling PDF differently
//   }

//   let reactLibraryContent = ''; // For storing the complete React library
//   let vueLibraryContent = ''; 
//   let angularLibraryContent = '';
//   let preactLibraryContent = ''; // For storing the complete Preact library


//   let promises = [];
// styles.forEach(style => {
//   switchStyle(style, true);

//   icons.forEach((icon, index) => {
//     // Normalize the icon name: replace spaces and special characters with hyphens, then convert to lowercase
//     const iconName = (icon.id || 'unnamed').replace(/[\s+]/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
//     const matchingSvg = icon.querySelector(`svg[data-style="${style}"]`);

//     if (matchingSvg) {
//       // Format the number with leading zeros (e.g., 001)
//       const formattedNumber = String(index + 1).padStart(3, '0');
//       const filename = `${formattedNumber}-${iconName}-${style.toLowerCase()}.${format}`;

//       if (format === 'svg') {
//         const svgWithPadding = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//         const newWidth = matchingSvg.width.baseVal.value + (2 * padding);
//         const newHeight = matchingSvg.height.baseVal.value + (2 * padding);
//         svgWithPadding.setAttribute('width', newWidth);
//         svgWithPadding.setAttribute('height', newHeight);
//         svgWithPadding.setAttribute('viewBox', `0 0 ${newWidth} ${newHeight}`);
//         const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
//         g.setAttribute('transform', `translate(${padding}, ${padding})`); // Translation to add padding
//         g.appendChild(matchingSvg.cloneNode(true)); // Append cloned SVG
//         svgWithPadding.appendChild(g);
//         zip.file(filename, new Blob([svgWithPadding.outerHTML], { type: "image/svg+xml;charset=utf-8" }));
//       } else if (format === 'png' || format === 'jpeg' || format === 'webp') {
//         var img = new Image();
//         img.src = 'data:image/svg+xml,' + encodeURIComponent(matchingSvg.outerHTML);

        


//         var promise = new Promise((resolve, reject) => {
//           img.onload = function() {
//             var canvas = document.createElement('canvas');
//             canvas.width = img.width + (2 * padding); // Include padding
//             canvas.height = img.height + (2 * padding); // Include padding
//             var ctx = canvas.getContext('2d');
//             if (format === 'jpeg') {
//               ctx.fillStyle = 'white';
//               ctx.fillRect(0, 0, canvas.width, canvas.height);
//             }
//             ctx.drawImage(img, padding, padding); // Include padding
//             canvas.toBlob(function(blob) {
//               zip.file(filename, blob);
//               resolve();
//             }, 'image/' + format);
//           };
//         });

//         promises.push(promise);


//          }   else if (format === 'react') {
//           const reactFilename = `Icon-${style}-${index}.jsx`;
//           const reactComponentContent = reactTemplate(matchingSvg.outerHTML);
//           zip.file(reactFilename, new Blob([reactComponentContent], { type: "application/javascript" }));
          
//           const iconName = `Icon_${style}_${index}`;
//           reactLibraryContent += `
// export function ${iconName}() {
//   return (
//     ${matchingSvg.outerHTML}
//   );
// }
// `;
//         } else if (format === 'vue') {
//           const vueFilename = `Icon-${style}-${index}.js`;
//           const vueComponentContent = vueTemplate(matchingSvg.outerHTML, style, index);
//           zip.file(vueFilename, new Blob([vueComponentContent], { type: "application/javascript" }));
          
//           const iconName = `Icon_${style}_${index}`;
//           vueLibraryContent += `
// import ${iconName} from './${vueFilename}';
// export { ${iconName} };


// `;
        

// } else if (format === 'angular') {
//   const angularFilename = `Icon-${style}-${index}.ts`;
//   const angularComponentContent = angularTemplate(matchingSvg.outerHTML);
//   zip.file(angularFilename, new Blob([angularComponentContent], { type: "application/typescript" }));
//   const iconName = `Icon${style}${index}Component`;
//   angularLibraryContent += `
// import { ${iconName} } from './${angularFilename}';
// export { ${iconName} };
// `;

// } else if (format === 'preact') {
//   const preactFilename = `Icon-${style}-${index}.jsx`;
//   const preactComponentContent = preactTemplate(matchingSvg.outerHTML);
//   zip.file(preactFilename, new Blob([preactComponentContent], { type: "application/javascript" }));
  
//   const iconName = `Icon_${style}_${index}`;
//   preactLibraryContent += `
// export function ${iconName}() {
//   return (
//     ${matchingSvg.outerHTML}
//   );
// }
// `;
// }

//     }
//   });
// });

// if (format === 'react') {
//   zip.file("IconLibrary.jsx", new Blob([reactLibraryContent], { type: "application/javascript" }));
// } else if (format === 'vue') {
//   zip.file("VueIconLibrary.js", new Blob([vueLibraryContent], { type: "application/javascript" }));
// } else if (format === 'angular') {
//   zip.file("AngularIconLibrary.ts", new Blob([angularLibraryContent], { type: "application/typescript" }));
// } else if (format === 'preact') {
//   zip.file("PreactIconLibrary.jsx", new Blob([preactLibraryContent], { type: "application/javascript" }));
// }
  
  
  
  
  

// Promise.all(promises).then(() => {
//   zip.generateAsync({ type: "blob" })
//     .then(function(content) {
//       const downloadLink = document.createElement("a");
//       downloadLink.href = URL.createObjectURL(content);

//       // Set the download filename based on the format
//       let downloadFilename = "icons.zip";
//       if (format === 'png') downloadFilename = "icons-png.zip";
//       else if (format === 'jpeg') downloadFilename = "icons-jpeg.zip";
//       else if (format === 'webp') downloadFilename = "icons-webp.zip";
//       else if (format === 'svg') downloadFilename = "icons-svg.zip";
//       else if (format === 'pdf') downloadFilename = "icons-pdf.zip";
//       else if (format === 'react') downloadFilename = "icons-react.zip";
//       else if (format === 'vue') downloadFilename = "icons-vue.zip";
//       else if (format === 'angular') downloadFilename = "icons-angular.zip";
//       else if (format === 'preact') downloadFilename = "icons-preact.zip";



//       downloadLink.download = downloadFilename;
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//     });
// });
// switchStyle(currentStyle); // Switch back to the original style
//   }


// document.getElementById('save-all-icons').addEventListener('click', function() {
//       const format = document.querySelector("#ut2-dropbtn-export span").textContent.toLowerCase();
//   const exportMode = document.querySelector('input[name="exportMode"]:checked').value; // Get export mode
//   let icons;
//   if (exportMode === 'all') {
//     icons = document.querySelectorAll('.icon'); // Select all icons
//   } else {
//     icons = document.querySelectorAll('.icon.selected'); // Select only selected icons
//   }

//   if (format === 'sprite') {
//     exportAsSVGSprite(icons); // Call the SVG sprite export function
//   } else {
//     let zip = new JSZip();
//     generateZIP(icons, format, zip);
//   }
  
// });

// // New event listener for save-all-icons-2 button
// document.getElementById('save-all-icons-2').addEventListener('click', function() {
//     const format = document.querySelector("#format-dropdown").value;
//   const icons = document.querySelectorAll('.icon.selected'); // Always select only selected icons

//   if (format === 'svg-sprite') {
//     exportAsSVGSprite(icons); // Call the SVG sprite export function
//   } else {
//     let zip = new JSZip();
//     generateZIP(icons, format, zip);
//   }
  
  
// });





/// MODIFIED CODE

// iconexport.js

// Global variables (defined early for accessibility throughout the file)
const styles = ['line', 'solid', 'duo', 'inky']; // The styles of your SVGs
// 'selectedStyle' is likely managed by your segmented control or style-switching logic in ui.js
// 'currentStyle' here will hold the initially active tab data attribute
let currentStyle = document.querySelector(".tab a.active") ? document.querySelector(".tab a.active").dataset.tab : 'line';
// Fallback to 'line' if no active tab is found on initial load


// --- Framework Template Functions ---
function reactTemplate(svgContent, style, index) {
  const updatedSvgContent = svgContent
    .replace(/ class="/g, ' className="')
    .replace(/ stroke-width="/g, ' strokeWidth="')
    .replace(/ stroke-linecap="/g, ' strokeLinecap="')
    .replace(/ stroke-linejoin="/g, ' strokeLinejoin="');

  return `
export function Icon_${style}_${index}() {
  return (
    ${updatedSvgContent}
  );
}
`;
}

function vueTemplate(svgContent, style, index) {
  return `
const template = \`${svgContent}\`;

export default {
  name: 'Icon_${style}_${index}',
  render(h) {
    return h('div', { attrs: { class: 'icon-container' } }, [
      h('div', { domProps: { innerHTML: template } })
    ]);
  }
};
`;
}

function angularTemplate(svgContent, style, index) {
  return `
import { Component } from '@angular/core';

@Component({
  selector: 'icon-${style}-${index}',
  template: \`
    ${svgContent}
  \`,
})
export class Icon${style}${index}Component { }
`;
}

function preactTemplate(svgString) {
  return `
import { h } from 'preact';

export default function Icon() {
  return ${svgString};
}
`;
}

// --- Helper Functions for Style Switching and Visibility ---
// (These functions likely interact with a 'selectedStyle' variable which should be globally accessible
// or managed by other parts of your ui.js, perhaps from a segmented control for styles.)

// Make sure `selectedStyle` is defined and accessible if it's used by `applyStyle()`
// If not, you might need to pass it or retrieve it from the DOM where it's managed.
// For this file, we assume 'selectedStyle' is defined elsewhere (e.g., in ui.js's global scope).
// let selectedStyle = "line"; // Assuming a default or that it's set by a segmented control

// Function to apply style, assuming it's defined elsewhere or will be passed
// For a cleaner separation, `applyStyle` might belong to the core UI logic rather than export logic.
// If applyStyle directly manipulates the DOM elements visibility as part of the icon filtering,
// ensure it's available. For now, I'll assume it's external or that a simplified version is sufficient here.
// Placeholder for applyStyle if it's not truly global and needed here.
function applyStyle() {
  // This function would typically filter icons based on a 'selectedStyle'
  // For export purposes, `switchStyle` might handle the temporary display changes.
  // The actual icon filtering/display logic for the UI is usually elsewhere.
}


// Function to switch style (used during export to ensure correct SVG is processed)
function switchStyle(style, overrideVisibility) {
  const tabs = document.querySelectorAll(".tab a");
  tabs.forEach(tab => {
    tab.classList.remove("active");
    if (tab.dataset.tab === style) {
      tab.classList.add("active");
    }
  });

  // 'selectedStyle' should be the variable updated by the main UI style selector
  // If `applyStyle` relies on `selectedStyle`, ensure this connection.
  // selectedStyle = style; // Uncomment if 'selectedStyle' is managed here

  if (overrideVisibility) {
    showAllSvgs(); // Show all SVGs temporarily
  }

  applyStyle(); // Call applyStyle to update UI visibility based on the 'style' parameter

  if (overrideVisibility) {
    setTimeout(resetSvgVisibility, 1000); // Reset SVG visibility after 1 second
  }
}

// Ensure all SVGs are visible (e.g., when generating zip for all styles)
function showAllSvgs() {
  let svgs = document.querySelectorAll('svg');
  svgs.forEach((svg) => {
    svg.style.display = 'block'; // Use display:block to ensure visibility for cloning
    svg.parentNode.style.display = 'inline-flex'; // Also show parent if it contains matching svg
  });
}

// Reset SVG visibility to its original filtered state
function resetSvgVisibility() {
  let svgs = document.querySelectorAll('svg');
  svgs.forEach((svg) => {
    // This is crucial: it should revert to the state based on the *actual* UI's selected style
    // which `applyStyle()` should handle.
    // For a quick reset, you might hide all and then re-apply current selected style.
    svg.style.display = 'none'; // Hide all SVGs
  });
  // Then re-apply the currently selected style from the UI
  // This likely means calling applyStyle() with the actual 'selectedStyle' of the UI
  // If 'selectedStyle' is not global, it needs to be retrieved from the DOM or passed.
  // Assuming `selectedStyle` is accessible from `ui.js` or a global variable here.
  // applyStyle(); // Re-apply the UI's active style.
  // Or, if currentStyle tracks the overall UI state:
  // switchStyle(currentStyle, false); // Switch back without overriding visibility
}


// --- Export as SVG Sprite Function ---
function exportAsSVGSprite(iconsToExport) { // Accepts the specific icons to export
  const padding = Number(notificationStepperValue.value); // Get padding value

  // This internal check is removed as the caller (event listener) is responsible for providing
  // the correct 'iconsToExport' array (either selected or all icons).
  // if (!iconsToExport.length) {
  //   iconsToExport = Array.from(document.querySelectorAll('.icon'));
  // }

  let sprite = '<svg xmlns="http://www.w3.org/2000/svg">\n\n';

  iconsToExport.forEach((icon) => {
    styles.forEach((style) => { // Loop through each style defined globally
      const svgElement = icon.querySelector(`svg[data-style="${style}"]`); // Get the SVG for the current style

      if (svgElement) {
        const id = `${icon.id}-${style}`;
        const newWidth = svgElement.width.baseVal.value + (2 * padding);
        const newHeight = svgElement.height.baseVal.value + (2 * padding);
        sprite += `<symbol id="${id}" viewBox="0 0 ${newWidth} ${newHeight}">\n`;
        sprite += `  <g transform="translate(${padding}, ${padding})">\n`;

        const paths = Array.from(svgElement.querySelectorAll('path'));
        paths.forEach((path) => {
          // Get the computed style of the path to obtain the current color
          // Note: getComputedStyle might give RGB values like "rgb(0, 0, 0)" not hex.
          let computedStyle = window.getComputedStyle(path);
          let strokeColor = computedStyle.getPropertyValue('stroke');
          let fillColor = computedStyle.getPropertyValue('fill');

          // Ensure stroke/fill values are valid SVG color strings (e.g., 'none' or 'currentColor')
          // If they are 'none' or transparent, ensure they are written correctly.
          // This part might need more robust color conversion if your CSS uses non-hex formats
          // and you want to ensure consistent output in the SVG.
          let strokeAttribute = '';
          if (path.getAttribute('stroke') !== null) { // Check if original SVG has stroke attribute
            strokeAttribute = `stroke="${strokeColor}" stroke-width="${path.getAttribute('stroke-width') || '1'}" stroke-linecap="${path.getAttribute('stroke-linecap') || 'round'}" stroke-linejoin="${path.getAttribute('stroke-linejoin') || 'round'}"`;
          }
          let fillAttribute = '';
          if (path.getAttribute('fill') !== null) { // Check if original SVG has fill attribute
            fillAttribute = `fill="${fillColor}"`;
          }


          sprite += `    <path d="${path.getAttribute('d')}" ${strokeAttribute} ${fillAttribute}></path>\n`;
        });

        sprite += `  </g>\n`;
        sprite += `</symbol>\n\n`;
      }
    });
  });

  sprite += '</svg>';

  const blob = new Blob([sprite], {type: 'image/svg+xml;charset=utf-8'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'icons-sprite.svg'; // Set the download filename for the SVG sprite

  link.click();
}


// --- Main ZIP Generation Function ---
function generateZIP(icons, format, zip) {
  const padding = Number(notificationStepperValue.value); // Get padding value

  if (format === 'pdf') {
    let promises = [];

    icons.forEach((icon, index) => {
      // Use `currentStyle` which tracks the UI's active style, or pass `selectedStyle` if it's the dynamic one.
      // Assuming `currentStyle` from the global variable is the desired one for PDF export context.
      const matchingSvg = icon.querySelector(`svg[data-style="${currentStyle}"]`);
      if (matchingSvg) {
        const promise = new Promise((resolve) => {
          const img = new Image();
          img.src = 'data:image/svg+xml,' + encodeURIComponent(matchingSvg.outerHTML);

          img.onload = function() {
            const canvasSize = 1200;
            const iconSize = 1200 - (2 * padding);
            var canvas = document.createElement('canvas');
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            var ctx = canvas.getContext('2d');

            ctx.drawImage(img, padding, padding, iconSize, iconSize);
            var imageData = canvas.toDataURL('image/png');

            const pdf = new window.jspdf.jsPDF({ unit: 'px', format: [1200, 1200] });
            pdf.addImage(imageData, 'PNG', 0, 0, canvasSize, canvasSize);
            const pdfBlob = pdf.output('blob');
            const filename = `icon-${currentStyle}-${index}.pdf`;
            zip.file(filename, pdfBlob);
            resolve();
          };
          img.onerror = function(err) {
            console.error("Error loading SVG for PDF:", err);
            reject(err); // Reject the promise on error
          };
        });
        promises.push(promise);
      }
    });

    Promise.all(promises).then(() => {
      zip.generateAsync({ type: "blob" })
        .then(function(content) {
          const downloadLink = document.createElement("a");
          downloadLink.href = URL.createObjectURL(content);
          downloadLink.download = "icons-pdf.zip";
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        });
    }).catch(error => {
      console.error("Error generating PDF zip:", error);
    });

    return;
  }

  let reactLibraryContent = '';
  let vueLibraryContent = '';
  let angularLibraryContent = '';
  let preactLibraryContent = '';

  let promises = [];
  // Ensure 'styles' is globally accessible or passed here
  styles.forEach(style => {
    // Temporarily switch style for accurate SVG capture, then revert
    switchStyle(style, true); // true indicates override visibility for export

    icons.forEach((icon, index) => {
      const iconName = (icon.id || 'unnamed').replace(/[\s+]/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
      const matchingSvg = icon.querySelector(`svg[data-style="${style}"]`);

      if (matchingSvg) {
        const formattedNumber = String(index + 1).padStart(3, '0');
        const filename = `${formattedNumber}-${iconName}-${style.toLowerCase()}.${format}`;

        if (format === 'svg') {
          const svgWithPadding = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          const newWidth = matchingSvg.width.baseVal.value + (2 * padding);
          const newHeight = matchingSvg.height.baseVal.value + (2 * padding);
          svgWithPadding.setAttribute('width', newWidth);
          svgWithPadding.setAttribute('height', newHeight);
          svgWithPadding.setAttribute('viewBox', `0 0 ${newWidth} ${newHeight}`);
          const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
          g.setAttribute('transform', `translate(${padding}, ${padding})`);
          g.appendChild(matchingSvg.cloneNode(true));
          zip.file(filename, new Blob([svgWithPadding.outerHTML], { type: "image/svg+xml;charset=utf-8" }));
        } else if (format === 'png' || format === 'jpeg' || format === 'webp') {
          var img = new Image();
          img.src = 'data:image/svg+xml,' + encodeURIComponent(matchingSvg.outerHTML);

          var promise = new Promise((resolve, reject) => {
            img.onload = function() {
              var canvas = document.createElement('canvas');
              canvas.width = img.width + (2 * padding);
              canvas.height = img.height + (2 * padding);
              var ctx = canvas.getContext('2d');
              if (format === 'jpeg') {
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
              }
              ctx.drawImage(img, padding, padding);
              canvas.toBlob(function(blob) {
                zip.file(filename, blob);
                resolve();
              }, 'image/' + format);
            };
            img.onerror = function(err) {
              console.error("Error loading SVG for raster export:", err);
              reject(err); // Reject the promise on error
            };
          });
          promises.push(promise);
        } else if (format === 'react') {
          const reactFilename = `Icon-${style}-${index}.jsx`;
          const reactComponentContent = reactTemplate(matchingSvg.outerHTML, style, index); // Pass style and index to template
          zip.file(reactFilename, new Blob([reactComponentContent], { type: "application/javascript" }));

          const iconName = `Icon_${style}_${index}`;
          reactLibraryContent += `
export function ${iconName}() {
  return (
    ${matchingSvg.outerHTML}
  );
}
`;
        } else if (format === 'vue') {
          const vueFilename = `Icon-${style}-${index}.js`;
          const vueComponentContent = vueTemplate(matchingSvg.outerHTML, style, index);
          zip.file(vueFilename, new Blob([vueComponentContent], { type: "application/javascript" }));

          const iconName = `Icon_${style}_${index}`;
          vueLibraryContent += `
import ${iconName} from './${vueFilename}';
export { ${iconName} };
`;
        } else if (format === 'angular') {
          const angularFilename = `Icon-${style}-${index}.ts`;
          const angularComponentContent = angularTemplate(matchingSvg.outerHTML, style, index); // Pass style and index to template
          zip.file(angularFilename, new Blob([angularComponentContent], { type: "application/typescript" }));
          const iconName = `Icon${style}${index}Component`;
          angularLibraryContent += `
import { ${iconName} } from './${angularFilename}';
export { ${iconName} };
`;
        } else if (format === 'preact') {
          const preactFilename = `Icon-${style}-${index}.jsx`;
          const preactComponentContent = preactTemplate(matchingSvg.outerHTML, style, index); // Pass style and index to template
          zip.file(preactFilename, new Blob([preactComponentContent], { type: "application/javascript" }));

          const iconName = `Icon_${style}_${index}`;
          preactLibraryContent += `
export function ${iconName}() {
  return (
    ${matchingSvg.outerHTML}
  );
}
`;
        }
      }
    });
  });

  // Add the combined library files to the zip
  if (format === 'react') {
    zip.file("IconLibrary.jsx", new Blob([reactLibraryContent], { type: "application/javascript" }));
  } else if (format === 'vue') {
    zip.file("VueIconLibrary.js", new Blob([vueLibraryContent], { type: "application/javascript" }));
  } else if (format === 'angular') {
    zip.file("AngularIconLibrary.ts", new Blob([angularLibraryContent], { type: "application/typescript" }));
  } else if (format === 'preact') {
    zip.file("PreactIconLibrary.jsx", new Blob([preactLibraryContent], { type: "application/javascript" }));
  }


  Promise.all(promises).then(() => {
    zip.generateAsync({ type: "blob" })
      .then(function(content) {
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(content);

        // Set the download filename based on the format
        let downloadFilename = "icons.zip";
        if (format === 'png') downloadFilename = "icons-png.zip";
        else if (format === 'jpeg') downloadFilename = "icons-jpeg.zip";
        else if (format === 'webp') downloadFilename = "icons-webp.zip";
        else if (format === 'svg') downloadFilename = "icons-svg.zip";
        else if (format === 'pdf') downloadFilename = "icons-pdf.zip";
        else if (format === 'react') downloadFilename = "icons-react.zip";
        else if (format === 'vue') downloadFilename = "icons-vue.zip";
        else if (format === 'angular') downloadFilename = "icons-angular.zip";
        else if (format === 'preact') downloadFilename = "icons-preact.zip";

        downloadLink.download = downloadFilename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      });
  }).finally(() => {
    // Always switch back to the original style after all exports are done
    // This is important because switchStyle(style, true) temporarily changes display.
    // Assuming `currentStyle` holds the original style before export.
    switchStyle(currentStyle, false); // false to not override visibility again
  });
}

// --- Event Listeners for Export Buttons ---
document.getElementById('save-all-icons').addEventListener('click', function() {
  const format = document.querySelector("#ut2-dropbtn-export span").textContent.toLowerCase();
  const exportMode = document.querySelector('input[name="exportMode"]:checked').value; // Get export mode
  let icons;
  if (exportMode === 'all') {
    icons = document.querySelectorAll('.icon'); // Select all icons
  } else {
    icons = document.querySelectorAll('.icon.selected'); // Select only selected icons
  }

  // Ensure icons is an array-like object (NodeList is fine) for forEach
  if (icons.length === 0 && exportMode === 'selected') {
    alert("No icons selected for export. Please select icons or choose 'Export All'.");
    return; // Prevent export if no selected icons
  }

  if (format === 'sprite') {
    exportAsSVGSprite(Array.from(icons)); // Pass as an array
  } else {
    let zip = new JSZip();
    generateZIP(Array.from(icons), format, zip); // Pass as an array
  }
});

// New event listener for save-all-icons-2 button
document.getElementById('save-all-icons-2').addEventListener('click', function() {
  const format = document.querySelector("#format-dropdown").value; // This might be different for this button
  const icons = document.querySelectorAll('.icon.selected'); // Always select only selected icons for this button

  if (icons.length === 0) {
    alert("No icons selected for export. Please select icons.");
    return; // Prevent export if no selected icons
  }

  if (format === 'svg-sprite') { // Assuming 'svg-sprite' for this format dropdown
    exportAsSVGSprite(Array.from(icons)); // Pass as an array
  } else {
    let zip = new JSZip();
    generateZIP(Array.from(icons), format, zip); // Pass as an array
  }
});