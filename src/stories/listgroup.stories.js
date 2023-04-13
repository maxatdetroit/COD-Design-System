import { html } from 'lit-html';
import '../components/atoms/ListGroupItem/cod-listgroup-item';
import '../components/molecules/ListGroup/cod-listgroup';

export default {
  title: 'COD/Molecules/ListGroup',
};

export const Basic = () => html`
<cod-listgroup data-tag="ul">
    <cod-listgroup-item data-tag="li" data-text="An item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A second item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A third item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A fourth item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="And a fifth one">
    </cod-listgroup-item>
</cod-listgroup>
`;

export const Active = () => html`
<cod-listgroup data-tag="ul">
    <cod-listgroup-item data-tag="li" data-text="An active item" data-current="true">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A second item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A third item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A fourth item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="And a fifth one">
    </cod-listgroup-item>
</cod-listgroup>
`;

export const Disabled = () => html`
<cod-listgroup data-tag="ul">
    <cod-listgroup-item data-tag="li" data-text="A disabled item" data-disabled="true">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A second item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A third item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A fourth item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="And a fifth one">
    </cod-listgroup-item>
</cod-listgroup>
`;

export const Links = () => html`
<cod-listgroup data-tag="div">
    <cod-listgroup-item data-tag="a" data-url="#" data-text="The current link item" data-current="true">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="a" data-url="#" data-text="A second link item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="a" data-url="#" data-text="A third link item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="a" data-url="#" data-text="A fourth link item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="a" data-url="#" data-text="A disabled link item" data-disabled="true">
    </cod-listgroup-item>
</cod-listgroup>
`;

export const Button = () => html`
<cod-listgroup data-tag="div">
    <cod-listgroup-item data-tag="button" data-text="The current button" data-current="true">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="button" data-text="A second button item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="button" data-text="A third button item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="button" data-text="A fourth button item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="button" data-text="A disabled button item" data-disabled="true">
    </cod-listgroup-item>
</cod-listgroup>
`;

export const Flushed = () => html`
<cod-listgroup data-tag="ul" data-flushed="true">
    <cod-listgroup-item data-tag="li" data-text="An item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A second item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A third item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A fourth item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="And a fifth one">
    </cod-listgroup-item>
</cod-listgroup>
`;

export const Numbered = () => html`
<cod-listgroup data-tag="ol" data-numbered="true">
    <cod-listgroup-item data-tag="li" data-text="A list item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A list item">
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-text="A list item">
    </cod-listgroup-item>
</cod-listgroup>
`;

export const NumberedCustom = () => html`
<cod-listgroup data-tag="ol" data-numbered="true">
    <cod-listgroup-item data-tag="li" data-extra-classes="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-extra-classes="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    </cod-listgroup-item>
    <cod-listgroup-item data-tag="li" data-extra-classes="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
    </cod-listgroup-item>
</cod-listgroup>
`;