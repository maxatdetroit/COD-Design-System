import styles from '!!raw-loader!./TableBody.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class TableBody extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.tableBody = document.createElement('div');
    this.tableBody.role = 'rowgroup';
    shadow.addEventListener('slotchange', (ev) => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node, index) => {
        this.getAttribute('data-striped-row') == 'true' && index % 2 == 0
          ? node.setAttribute('data-striped-row', 'true')
          : 0;
        this.getAttribute('data-hover') == 'true'
          ? node.setAttribute('data-hover', 'true')
          : 0;
        this.getAttribute('data-striped-col') == 'true'
          ? node.setAttribute('data-striped-col', 'true')
          : 0;
        this.getAttribute('data-vertical-align') == 'true'
          ? node.setAttribute('data-vertical-align', 'true')
          : 0;
        this.getAttribute('data-legacy-responsive') == 'true'
          ? node.setAttribute('data-legacy-responsive', 'true')
          : 0;
        this.tableBody.append(node);
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

    shadow.appendChild(this.tableBody);
  }
}
