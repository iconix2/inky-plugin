// two-button-row.js

// 1. Define the HTML and CSS template for the component
const twoButtonRowTemplate = `
  <style>
    /* Scoped CSS for the custom element */
    .button-row-container {
      display: flex; /* Use Flexbox to align buttons in a row */
      gap: 8px;      /* Space between buttons */
      width: 100%;   /* Ensure the container takes full available width */
      box-sizing: border-box; /* Include padding and border in the element's total width and height */
      padding: 10px 0; /* Add some vertical padding around the buttons */
    }

    .button-row-container button {
      flex: 1; /* Each button takes equal available space (50/50 split) */
      padding: 10px 15px;
      font-size: 14px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.1s ease;
      box-sizing: border-box; /* Include padding and border in button's size */
    }

    .button-row-container button:active {
      transform: translateY(1px); /* Simple press effect */
    }

    /* Style for the Apply button */
    .button-row-container #apply-btn {
      background-color: #007bff; /* A nice blue */
      color: white;
    }

    .button-row-container #apply-btn:hover {
      background-color: #0056b3; /* Darker blue on hover */
    }

    /* Style for the Cancel button */
    .button-row-container #cancel-btn {
      background-color: #6c757d; /* A neutral gray */
      color: white;
    }

    .button-row-container #cancel-btn:hover {
      background-color: #5a6268; /* Darker gray on hover */
    }

    /* Optional: Style for disabled buttons */
    .button-row-container button:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
        opacity: 0.7;
    }
  </style>

  <div class="button-row-container">
    <button id="apply-btn">Apply</button>
    <button id="cancel-btn">Cancel</button>
  </div>
`;

// 2. Define the Custom Element Class
class TwoButtonRow extends HTMLElement {
  constructor() {
    super(); // Always call super() first in the constructor

    // Attach a Shadow DOM to encapsulate styles and markup
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = twoButtonRowTemplate;

    // Get references to the buttons within the Shadow DOM
    this.applyButton = shadowRoot.getElementById('apply-btn');
    this.cancelButton = shadowRoot.getElementById('cancel-btn');

    // Add event listeners for the buttons
    // We'll use custom events to communicate with the outside world (your plugin's ui.js)
    this.applyButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('apply-clicked'));
    });

    this.cancelButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('cancel-clicked'));
    });

    // You could also add attributes to customize button text if needed
    if (this.hasAttribute('apply-text')) {
      this.applyButton.textContent = this.getAttribute('apply-text');
    }
    if (this.hasAttribute('cancel-text')) {
      this.cancelButton.textContent = this.getAttribute('cancel-text');
    }
  }

  // Optional: Observed attributes for dynamic text changes
  static get observedAttributes() {
    return ['apply-text', 'cancel-text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'apply-text' && this.applyButton) {
      this.applyButton.textContent = newValue;
    }
    if (name === 'cancel-text' && this.cancelButton) {
      this.cancelButton.textContent = newValue;
    }
  }
}

// 3. Define the Custom Element (tell the browser about your new tag)
customElements.define('two-button-row', TwoButtonRow);