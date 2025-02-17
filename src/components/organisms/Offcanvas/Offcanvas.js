import styles from '!!raw-loader!./Offcanvas.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class Offcanvas extends HTMLElement {
  static get observedAttributes() {
    return ['data-show'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.offcanvas = document.createElement('div');
    this.offcanvasBackdrop = document.createElement('div');
    shadow.addEventListener('slotchange', (ev) => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        this.getAttribute('data-show') == 'true'
          ? node.setAttribute('data-show', true)
          : 0;
        if (node.tagName == 'COD-OFFCANVAS-HEADER') {
          this.getAttribute('data-button-dark') == 'true'
            ? node.setAttribute('data-button-dark', true)
            : 0;
          node.setAttribute('data-parent-id', this.getAttribute('data-id'));
        }
        let nodeClasses = node.className.split(' ');
        nodeClasses.includes('no-wc')
          ? node.remove()
          : this.offcanvas.appendChild(node);
      });
    });

    // Add styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(bootStyles);
    shadow.appendChild(variableStyles);
    shadow.appendChild(itemStyles);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    let tempClasses = this.offcanvas.className.split(' ');
    let popValue = tempClasses.pop();
    popValue != 'show' ? tempClasses.push(popValue) : 0;
    if (newValue == 'true') {
      tempClasses.push('show');
      if (this.getAttribute('data-backdrop') != 'false') {
        if (this.getAttribute('data-static') != 'true') {
          this.offcanvasBackdrop.addEventListener('click', this._onClick);
        }
        this.shadowRoot.appendChild(this.offcanvasBackdrop);
      }
    } else {
      if (this.shadowRoot.querySelector('div.offcanvas-backdrop')) {
        this.shadowRoot.removeChild(this.offcanvasBackdrop);
      }
    }
    this.offcanvas.className = tempClasses.join(' ');
  }

  connectedCallback() {
    // Offcanvas attributes
    let show = this.getAttribute('data-show');
    let placement = this.getAttribute('data-placement');
    let id = this.getAttribute('data-id');
    let backdrop = this.getAttribute('data-backdrop');
    let backdropExtraClasses = this.getAttribute('data-backdrop-extra-classes');
    let scroll = this.getAttribute('data-scroll');
    let bStatic = this.getAttribute('data-static');
    let extraClasses = this.getAttribute('data-extra-classes');
    let offcanvasClasses = ['offcanvas'];
    let backdropClasses = ['offcanvas-backdrop fade show'];
    show == 'true' ? offcanvasClasses.push('show') : 0;
    backdrop == 'false'
      ? this.offcanvas.setAttribute('data-bs-backdrop', false)
      : 0;
    scroll == 'true' ? this.offcanvas.setAttribute('data-bs-scroll', true) : 0;
    bStatic == 'true'
      ? this.offcanvas.setAttribute('data-bs-backdrop', 'static')
      : 0;
    backdropExtraClasses != undefined && backdropExtraClasses != null
      ? backdropClasses.push(backdropExtraClasses)
      : 0;
    extraClasses != undefined && extraClasses != null
      ? offcanvasClasses.push(extraClasses)
      : 0;
    if (placement != undefined && placement != null) {
      offcanvasClasses.push(`offcanvas-${placement}`);
    } else {
      offcanvasClasses.push('offcanvas-start');
    }
    if (id != undefined && id != null) {
      this.offcanvas.id = id;
      this.offcanvas.setAttribute('aria-labelledby', `${id}-label`);
    }
    this.offcanvas.setAttribute('tabindex', -1);
    this.offcanvas.className = offcanvasClasses.join(' ');
    this.offcanvasBackdrop.className = backdropClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.offcanvas);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick.bind(this));
  }

  _onClick(e) {
    this.getRootNode().host.setAttribute('data-show', 'false');
  }
}
