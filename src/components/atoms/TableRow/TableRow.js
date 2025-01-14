import styles from '!!raw-loader!./TableRow.css';
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
    this.tableRow = document.createElement('div');
    this.tableRow.role = 'row';
    shadow.addEventListener('slotchange', (ev) => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node, index) => {
        this.getAttribute('data-striped-row') == 'true'
          ? node.setAttribute('data-striped-row', 'true')
          : 0;
        this.getAttribute('data-striped-col') == 'true' && index % 2 != 0
          ? node.setAttribute('data-striped-col', 'true')
          : 0;
        this.getAttribute('data-vertical-align') == 'true'
          ? node.setAttribute('data-vertical-align', 'true')
          : 0;
        this.getAttribute('data-legacy-responsive') == 'true'
          ? node.setAttribute('data-legacy-responsive', 'true')
          : 0;
        this.tableRow.append(node);
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

    shadow.appendChild(this.tableRow);
  }

  connectedCallback() {
    // TableRow attributes
    let extraClasses = this.getAttribute('data-extra-classes');
    let hover = this.getAttribute('data-hover');
    let tableRowClasses = ['table-row'];
    hover == 'true' ? tableRowClasses.push('table-hover') : 0;
    extraClasses != undefined && extraClasses != null
      ? tableRowClasses.push(extraClasses)
      : 0;
    this.tableRow.className = tableRowClasses.join(' ');
  }
}
