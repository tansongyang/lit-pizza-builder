var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let PizzaOption = class PizzaOption extends LitElement {
    constructor() {
        super(...arguments);
        this._handleChange = (_e) => {
            this.dispatchEvent(new CustomEvent('pizza-option-change', {
                detail: {
                    og: this.og.description,
                    values: this.inputs
                        .filter((input) => input.checked)
                        .map((input) => input.value),
                },
            }));
        };
    }
    get inputs() {
        return Array.from(this.renderRoot.querySelectorAll('input'));
    }
    render() {
        return html `
      <h3 class="Heading">${this.og.description}</h3>
      <div class="Choices">
        ${this.og.choices.map((c) => {
            var _a;
            return html `
            <label class="Choice">
              ${c.name}
              <input
                class="Input"
                name=${this.og.description}
                type=${((_a = this.og.maxSelects) !== null && _a !== void 0 ? _a : Infinity < 3)
                ? 'radio'
                : 'checkbox'}
                @change=${this._handleChange}
                value=${c.name}
              />
            </label>
          `;
        })}
      </div>
    `;
    }
};
PizzaOption.styles = css `
    :host {
    }

    .Heading {
      border-bottom: 1px solid #cecece;
      color: #5f5f5f;
      font-size: 18px;
      font-weight: normal;
    }

    .Choices {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
    }

    .Choice {
      accent-color: #d93131;
      border: 1px solid #d93131;
      border-radius: 8px;
      color: #d93131;
      display: flex;
      flex: 0 0 auto;
      flex-direction: row;
      font-size: 20px;
      gap: 16px;
      padding: 16px 32px;
    }

    .Choice:has(:checked) {
      background-color: #d94848;
      color: #fff;
    }

    .Choice:focus-within {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .Input:focus {
      outline: none;
    }
  `;
PizzaOption.properties = {
    og: { type: Object },
};
PizzaOption = __decorate([
    customElement('pizza-option')
], PizzaOption);
export { PizzaOption };
//# sourceMappingURL=pizza-option.js.map