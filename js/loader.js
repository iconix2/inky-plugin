// loader.js

// 1. Define the HTML and CSS template for the component
const loaderTemplate = `
  <style>
    /* Scoped CSS for the custom element - loader styles */
    /* :host targets the custom element itself (<loader>) */
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--main-000); /* Uses CSS variable from your main UI */
      z-index: 999;
      display: flex; /* Initially set to flex for centering */
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 1;
      transform: scale(1); /* initial scale */
      transition: opacity 0.5s ease, transform 0.5s ease;
      visibility: visible; /* Initially visible */
      pointer-events: auto; /* Allow interactions (if any) */
    }

    /* Styles for hiding/showing via JavaScript */
    /* These classes will be toggled by the show() and hide() methods */
    :host(.fade-out) {
        opacity: 0;
        transform: scale(0.5);
        pointer-events: none; /* Disable interaction during fade-out */
    }
    /* We don't need a .fade-in class as the default :host style is 'in' */

    /* Hide content by default, this will ensure the main UI is hidden when loader is active */
    /* Note: If .content is outside the loader component, this CSS cannot be scoped here. */
    /* This rule might need to live in your main ui.css if .content is external. */
    /* .content {
        display: none;
    } */

    /* Icon and Text wrapper */
    .iconTextWrapper {
      display: flex;
      align-items: center;  /* Vertically align to the center */
      user-select: none; /* Prevent text selection */
      -webkit-user-select: none;
    }

    /* Text next to icon */
    .iconText {
      font-family: 'Poppins', sans-serif; /* Ensure Poppins is loaded in main HTML/CSS */
      font-weight: bold;
      font-size: 17px;
      letter-spacing: 0px;
      color: var(--secondary-000); /* Use your existing color variable */
      /* Note: You had --text-A in previous custom element, now back to original --secondary-000 */
    }

    /* Animation Wrapper */
    .animationWrapper {
      margin-top: 24px;
      margin-right: -10px; /* From your original CSS */
      position: relative;
      width: 34px;
      height: 34px;
    }

    /* Circle and Square common styles */
    .circle, .square {
      position: absolute;
      opacity: 0.55;
      background-color: var(--secondary-000); /* From your original CSS */
    }

    /* Circle specific */
    .circle {
      width: 15px;
      height: 15px;
      border-radius: 8px;
      animation: slideCircle 2s ease-out infinite;
      opacity: 0.35; /* From your original CSS */
    }

    /* Square specific */
    .square {
      width: 14px;
      height: 14px;
      border-radius: 3px;
      animation: slideSquare 2s ease-out infinite;
      transform-origin: center;
    }

    /* Keyframes for Circle */
    @keyframes slideCircle {
      0%, 100% {
        top: 0;
        left: 0;
      }
      25% {
        top: -8px;
        left: 0;
      }
      50% {
        top: -8px;
        left: -8px;
      }
      75% {
        top: 0;
        left: -8px;
      }
    }

    /* Keyframes for Square */
    @keyframes slideSquare {
      0%, 100% {
        top: -8px;
        left: -8px;
        transform: rotate(0deg);
      }
      25% {
        top: 0;
        left: -8px;
        transform: rotate(90deg);
      }
      50% {
        top: 0;
        left: 0;
        transform: rotate(180deg);
      }
      75% {
        top: -8px;
        left: 0;
        transform: rotate(90deg);
      }
    }
  </style>

  <div class="iconTextWrapper">
    <div class="svgIcon">
      <div class="animationWrapper">
        <div class="circle"></div>
        <div class="square"></div>
      </div>
    </div>
    <div class="iconText">
      Dynamix
    </div>
  </div>
`;

// 2. Define the Custom Element Class
class LoaderComponent extends HTMLElement { // Renamed class to avoid conflict with `Loader` for clarity
  constructor() {
    super();

    // Attach a shadow DOM to encapsulate styles and markup
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = loaderTemplate;
  }

  // Method to show the loader
  show() {
    this.classList.remove('fade-out'); // Remove fade-out class
    this.classList.add('fade-in');    // Add fade-in class (though not strictly needed if default is 'in')
    this.style.display = 'flex';      // Ensure flex display for centering
    this.style.visibility = 'visible'; // Make visible
    this.style.pointerEvents = 'auto'; // Enable interactions
    this.removeAttribute('hidden');    // Ensure hidden attribute is removed
  }

  // Method to hide the loader with a transition
  hide() {
    this.classList.remove('fade-in'); // Remove fade-in class
    this.classList.add('fade-out');   // Add fade-out class
    this.style.pointerEvents = 'none'; // Disable interactions immediately

    // After the transition completes, fully hide it from layout
    setTimeout(() => {
      this.style.display = 'none';     // Hide the element from layout
      this.style.visibility = 'hidden'; // Ensure it's not visible
      this.setAttribute('hidden', ''); // Add hidden attribute for accessibility/layout
    }, 500); // Matches your CSS transition duration (0.5s)
  }

  // Automatically show the loader when the component is connected to the DOM
  connectedCallback() {
    this.show(); // Show the loader immediately when it's added to the page

    // You can keep the automatic hide after 3 seconds here if it's the intended default behavior
    // for every instance of the loader component.
    // However, for a plugin, you might prefer to control hide/show from your main ui.js.
    // If you want it to hide automatically only on initial plugin load, move this to ui.js.
    setTimeout(() => this.hide(), 3000);
  }

  // Optional: Clean up if component is ever removed from DOM
  disconnectedCallback() {
    // Any cleanup if needed
  }
}

// 3. Define the Custom Element (the tag name is 'loader')
customElements.define('loader', LoaderComponent);