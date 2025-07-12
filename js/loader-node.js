/* loader-node.js
   Drop a single line in your HTML:
   <loader-node app-name="Dynamix" auto-hide="3000"></loader-node>
*/

/* 1 ▸ template */
const loaderTemplate = `
  <style>
    :host {
       position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-000);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: scale(1); /* initial scale */
}

    .iconTextWrapper { display: flex; align-items: center; }

    .iconText {
      font-family: Poppins, sans-serif;
      font-weight: 700;
      font-size: 17px;
      color: #fff;
    }

    .animationWrapper {
      margin-top: 24px;
      margin-right: -10px;
      position: relative;
      width: 34px;
      height: 34px;
    }

    .circle, .square {
      position: absolute;
      background: var(--secondary-000, #fff);
      opacity: .55;
    }

    .circle {
      width: 15px; height: 15px;
      border-radius: 8px;
      animation: slideCircle 2s ease-out infinite;
      opacity: .35;
    }

    .square {
      width: 14px; height: 14px;
      border-radius: 3px;
      animation: slideSquare 2s ease-out infinite;
      transform-origin: center;
    }

    @keyframes slideCircle {
      0%,100% { top:0; left:0 }
      25%     { top:-8px; left:0 }
      50%     { top:-8px; left:-8px }
      75%     { top:0; left:-8px }
    }
    @keyframes slideSquare {
      0%,100% { top:-8px; left:-8px; transform:rotate(0) }
      25%     { top:0; left:-8px;  transform:rotate(90deg) }
      50%     { top:0; left:0;     transform:rotate(180deg) }
      75%     { top:-8px; left:0;  transform:rotate(90deg) }
    }
  </style>

  <div class="iconTextWrapper">
    <div class="animationWrapper">
      <div class="circle"></div>
      <div class="square"></div>
    </div>
    <div class="iconText"></div>
  </div>
`;

/* 2 ▸ element */
class LoaderNode extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = loaderTemplate;

    this.$txt = shadow.querySelector('.iconText');
    this.$host = this;                    // easier reference
  }

  static get observedAttributes() { return ['app-name']; }

  attributeChangedCallback() {
    this.$txt.textContent = this.getAttribute('app-name') || 'App';
  }

  connectedCallback() {
    this.attributeChangedCallback();      // set initial text
    const ms = parseInt(this.getAttribute('auto-hide') || '0', 10);
    if (ms > 0) this._timer = setTimeout(() => this.hide(), ms);
  }

  disconnectedCallback() {
    clearTimeout(this._timer);
  }

  /* public helpers */
  show() {
    this.style.display   = 'flex';
    this.style.opacity   = '1';
    this.style.transform = 'scale(1)';
  }

  hide() {
    this.style.opacity   = '0';
    this.style.transform = 'scale(.5)';
    setTimeout(() => { this.style.display = 'none'; }, 500);
  }
}

/* 3 ▸ register */
customElements.define('loader-node', LoaderNode);