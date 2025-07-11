// iconexport.js

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







// EXPORT AS ZIP
const styles = ['line', 'solid', 'duo', 'inky']; // the styles of your SVGs
let currentStyle = document.querySelector(".tab a.active").dataset.tab; // Remember the current active style


// Function to switch style
function switchStyle(style, overrideVisibility) {
  const tabs = document.querySelectorAll(".tab a");
  tabs.forEach(tab => {
    tab.classList.remove("active");
    if (tab.dataset.tab === style) {
      tab.classList.add("active");
    }
  });

  selectedStyle = style;

  if (overrideVisibility) {
    showAllSvgs(); // Show all SVGs temporarily
  }

  applyStyle();

  if (overrideVisibility) {
    setTimeout(resetSvgVisibility, 1000); // Reset SVG visibility after 1 second
  }
}

// Ensure all SVGs are visible
function showAllSvgs() {
  let svgs = document.querySelectorAll('svg');
  svgs.forEach((svg) => {
    svg.style.visibility = 'visible';
  });
}

// Reset SVG visibility
function resetSvgVisibility() {
  let svgs = document.querySelectorAll('svg');
  svgs.forEach((svg) => {
    svg.style.visibility = ''; // Resets to default visibility value
  });
}


  function generateZIP(icons, format, zip) {
  const padding = Number(notificationStepperValue.value); // Get padding value

  if (format === 'pdf') {
    let promises = [];

    icons.forEach((icon, index) => {
      const matchingSvg = icon.querySelector(`svg[data-style="${currentStyle}"]`);
      if (matchingSvg) {
        const promise = new Promise((resolve) => {
          // Create an image from the SVG
          const img = new Image();
          img.src = 'data:image/svg+xml,' + encodeURIComponent(matchingSvg.outerHTML);

          img.onload = function() {
            const canvasSize = 1200;
            const iconSize = 1200 - (2 * padding); // Subtract padding
            var canvas = document.createElement('canvas');
            canvas.width = canvasSize; // Set canvas width
            canvas.height = canvasSize; // Set canvas height
            var ctx = canvas.getContext('2d');

            // Draw image with specific dimensions
            ctx.drawImage(img, padding, padding, iconSize, iconSize); // Include padding
            var imageData = canvas.toDataURL('image/png'); // Convert SVG to PNG data URL

            // Create a new PDF document with specific dimensions (1200x1200)
            const pdf = new window.jspdf.jsPDF({ unit: 'px', format: [1200, 1200] });
            pdf.addImage(imageData, 'PNG', 0, 0, canvasSize, canvasSize); // Add the image to the PDF
            const pdfBlob = pdf.output('blob');
            const filename = `icon-${currentStyle}-${index}.pdf`;
            zip.file(filename, pdfBlob); // Add PDF to ZIP with a unique filename
            resolve();
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
      downloadLink.download = "icons-pdf.zip"; // Set the download filename for PDF
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
});

    return; // Skip the remaining code since we're handling PDF differently
  }

  let reactLibraryContent = ''; // For storing the complete React library
  let vueLibraryContent = ''; 
  let angularLibraryContent = '';
  let preactLibraryContent = ''; // For storing the complete Preact library


  let promises = [];
styles.forEach(style => {
  switchStyle(style, true);

  icons.forEach((icon, index) => {
    // Normalize the icon name: replace spaces and special characters with hyphens, then convert to lowercase
    const iconName = (icon.id || 'unnamed').replace(/[\s+]/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase();
    const matchingSvg = icon.querySelector(`svg[data-style="${style}"]`);

    if (matchingSvg) {
      // Format the number with leading zeros (e.g., 001)
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
        g.setAttribute('transform', `translate(${padding}, ${padding})`); // Translation to add padding
        g.appendChild(matchingSvg.cloneNode(true)); // Append cloned SVG
        svgWithPadding.appendChild(g);
        zip.file(filename, new Blob([svgWithPadding.outerHTML], { type: "image/svg+xml;charset=utf-8" }));
      } else if (format === 'png' || format === 'jpeg' || format === 'webp') {
        var img = new Image();
        img.src = 'data:image/svg+xml,' + encodeURIComponent(matchingSvg.outerHTML);

        


        var promise = new Promise((resolve, reject) => {
          img.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = img.width + (2 * padding); // Include padding
            canvas.height = img.height + (2 * padding); // Include padding
            var ctx = canvas.getContext('2d');
            if (format === 'jpeg') {
              ctx.fillStyle = 'white';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            ctx.drawImage(img, padding, padding); // Include padding
            canvas.toBlob(function(blob) {
              zip.file(filename, blob);
              resolve();
            }, 'image/' + format);
          };
        });

        promises.push(promise);


         }   else if (format === 'react') {
          const reactFilename = `Icon-${style}-${index}.jsx`;
          const reactComponentContent = reactTemplate(matchingSvg.outerHTML);
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
  const angularComponentContent = angularTemplate(matchingSvg.outerHTML);
  zip.file(angularFilename, new Blob([angularComponentContent], { type: "application/typescript" }));
  const iconName = `Icon${style}${index}Component`;
  angularLibraryContent += `
import { ${iconName} } from './${angularFilename}';
export { ${iconName} };
`;

} else if (format === 'preact') {
  const preactFilename = `Icon-${style}-${index}.jsx`;
  const preactComponentContent = preactTemplate(matchingSvg.outerHTML);
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
});
switchStyle(currentStyle); // Switch back to the original style
  }


document.getElementById('save-all-icons').addEventListener('click', function() {
      const format = document.querySelector("#ut2-dropbtn-export span").textContent.toLowerCase();
  const exportMode = document.querySelector('input[name="exportMode"]:checked').value; // Get export mode
  let icons;
  if (exportMode === 'all') {
    icons = document.querySelectorAll('.icon'); // Select all icons
  } else {
    icons = document.querySelectorAll('.icon.selected'); // Select only selected icons
  }

  if (format === 'sprite') {
    exportAsSVGSprite(icons); // Call the SVG sprite export function
  } else {
    let zip = new JSZip();
    generateZIP(icons, format, zip);
  }
  
});

// New event listener for save-all-icons-2 button
document.getElementById('save-all-icons-2').addEventListener('click', function() {
    const format = document.querySelector("#format-dropdown").value;
  const icons = document.querySelectorAll('.icon.selected'); // Always select only selected icons

  if (format === 'svg-sprite') {
    exportAsSVGSprite(icons); // Call the SVG sprite export function
  } else {
    let zip = new JSZip();
    generateZIP(icons, format, zip);
  }
  
  
});





