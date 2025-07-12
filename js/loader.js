// // loader.js

// // 1. Define the HTML and CSS template for the component
// const loaderTemplate = `
//   <style>
//     /* Scoped CSS for the custom element */
//     /* Styles for the outermost container within the Shadow DOM */
//     #loaderContainer {
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background-color: var(--main-000); /* Uses CSS variable from your main UI */
//       z-index: 999;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       opacity: 1;
//       transition: opacity 0.5s ease, transform 0.5s ease;
//       transform: scale(1); /* initial scale */
//       visibility: visible; /* Initially visible */
//       pointer-events: auto; /* Allow interactions */
//     }

//     /* Styles for hiding/showing via JavaScript */
//     /* These classes will be toggled by the show() and hide() methods on #loaderContainer */
//     .fade-out {
//         opacity: 0;
//         transform: scale(0.5);
//         pointer-events: none; /* Disable interaction during fade-out */
//     }
//     /* We don't need a .fade-in class as the default state of #loaderContainer is 'in' */

//     /* The .content rule needs to be in your main ui.css if it hides external content */
//     /* If you want the loader to hide other content inside the component, then apply it here to a wrapper */
//     /* .content {
//         display: none;
//     } */

//     /* Icon and Text wrapper */
//     .iconTextWrapper {
//       display: flex;
//       align-items: center;
//       user-select: none;
//       -webkit-user-select: none;
//     }

//     /* Text next to icon */
//     .iconText {
//       font-family: 'Poppins', sans-serif; /* Ensure Poppins is loaded in main HTML/CSS */
//       font-weight: bold;
//       font-size: 17px;
//       letter-spacing: 0px;
//       color: var(--secondary-000);
//     }

//     /* Animation Wrapper */
//     .animationWrapper {
//       margin-top: 24px;
//       margin-right: -10px;
//       position: relative;
//       width: 34px;
//       height: 34px;
//     }

//     /* Circle and Square common styles */
//     .circle, .square {
//       position: absolute;
//       opacity: 0.55;
//       background-color: var(--secondary-000);
//     }

//     /* Circle specific */
//     .circle {
//       width: 15px;
//       height: 15px;
//       border-radius: 8px;
//       animation: slideCircle 2s ease-out infinite;
//       opacity: 0.35;
//     }

//     /* Square specific */
//     .square {
//       width: 14px;
//       height: 14px;
//       border-radius: 3px;
//       animation: slideSquare 2s ease-out infinite;
//       transform-origin: center;
//     }

//     /* Keyframes for Circle */
//     @keyframes slideCircle {
//       0%, 100% {
//         top: 0;
//         left: 0;
//       }
//       25% {
//         top: -8px;
//         left: 0;
//       }
//       50% {
//         top: -8px;
//         left: -8px;
//       }
//       75% {
//         top: 0;
//         left: -8px;
//       }
//     }

//     /* Keyframes for Square */
//     @keyframes slideSquare {
//       0%, 100% {
//         top: -8px;
//         left: -8px;
//         transform: rotate(0deg);
//       }
//       25% {
//         top: 0;
//         left: -8px;
//         transform: rotate(90deg);
//       }
//       50% {
//         top: 0;
//         left: 0;
//         transform: rotate(180deg);
//       }
//       75% {
//         top: -8px;
//         left: 0;
//         transform: rotate(90deg);
//       }
//     }
//   </style>

//   <div id="loaderContainer">
//     <div class="iconTextWrapper">
//       <div class="svgIcon">
//         <div class="animationWrapper">
//           <div class="circle"></div>
//           <div class="square"></div>
//         </div>
//       </div>
//       <div class="iconText">
//         Dynamix
//       </div>
//     </div>
//     </div>
// `;

// // 2. Define the Custom Element Class
// class LoaderComponent extends HTMLElement {
//   constructor() {
//     super();

//     // Attach a shadow DOM to encapsulate styles and markup
//     const shadowRoot = this.attachShadow({ mode: 'open' });
//     shadowRoot.innerHTML = loaderTemplate;

//     // Get reference to the actual loader container within the shadow DOM
//     // This is the element we will manipulate for show/hide
//     this.loaderContainer = shadowRoot.getElementById('loaderContainer');
//   }

//   // Method to show the loader
//   show() {
//     this.loaderContainer.classList.remove('fade-out');
//     // No need to add 'fade-in' if default state is already 'in'
//     this.loaderContainer.style.display = 'flex';
//     this.loaderContainer.style.visibility = 'visible';
//     this.loaderContainer.style.pointerEvents = 'auto';
//     this.loaderContainer.removeAttribute('hidden');
//   }

//   // Method to hide the loader with a transition
//   hide() {
//     this.loaderContainer.classList.add('fade-out');
//     this.loaderContainer.style.pointerEvents = 'none';

//     // After the transition completes, fully hide it from layout
//     setTimeout(() => {
//       this.loaderContainer.style.display = 'none';
//       this.loaderContainer.style.visibility = 'hidden';
//       this.loaderContainer.setAttribute('hidden', '');
//     }, 500); // Matches your CSS transition duration (0.5s)
//   }

//   // Automatically show the loader when the component is connected to the DOM
//   connectedCallback() {
//     this.show(); // Show the loader immediately when it's added to the page

//     // Automatically hide after 3 seconds, as per your original loader.js behavior
//     // If you want to control this externally (e.g., from ui.js after plugin loads),
//     // you would remove this setTimeout call from here.
//     setTimeout(() => this.hide(), 3000);
//   }

//   // Optional: Clean up if component is ever removed from DOM
//   disconnectedCallback() {
//     // Any cleanup if needed (e.g., removing event listeners if they were attached to window/document)
//   }
// }

// // 3. Define the Custom Element (the tag name is 'loader')
// customElements.define('loader', LoaderComponent);


/* loader.js */

function showLoader() {
  const loaderContainer = document.getElementById('loaderContainer');
  loaderContainer.style.opacity = '1';
  loaderContainer.style.transform = 'translateY(0%)'; // reset to initial position
  loaderContainer.style.display = 'flex';  // To maintain the flexbox centering
}

function hideLoader() {
  const loaderContainer = document.getElementById('loaderContainer');
  loaderContainer.style.opacity = '0';
  loaderContainer.style.transform = 'scale(0.5)'; // zoom out

  setTimeout(() => {
    loaderContainer.style.display = 'none';
  }, 500);
}


// Show the loader as soon as the script runs
showLoader();

// Automatically hide the loader after 3 seconds
setTimeout(hideLoader, 3000);
