var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import './pizza-option';
let PizzaBuilder = class PizzaBuilder extends LitElement {
    constructor() {
        super();
        this._selectedToppings = {};
    }
    render() {
        const imgUrls = this._selectedToppingsToImgUrls();
        return html `
      <h1 class="Name">${this.product.name}</h1>
      <div class="Pizza">
        <svg class="Peel" viewBox="0 0 6 15">
          <path
            d="m0,3a3,3,0,0,1,6,0v2a1,1,0,0,1,-1,1h-1a0.5,0.5,0,0,0,-0.5,0.5v8a0.5,0.5,0,0,1,-1,0v-8a0.5,0.5,0,0,0,-0.5,-0.5h-1a1,1,0,0,1,-1,-1z"
            fill="goldenrod"
          />
        </svg>
        ${repeat(imgUrls, (url) => url, (url) => html `<img src=${url} />`)}
      </div>
      <div class="Options">
        <h2>Let's pick toppings!</h2>
        ${this.product.optionGroups.map((og) => html `
            <pizza-option
              .og=${og}
              @pizza-option-change=${this._handlePizzaOptionChange}
            />
          `)}
        <div class="Footer">
          <button
            class="AddToCart"
            type="button"
            @click=${this._handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    `;
    }
    _selectedToppingsToImgUrls() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const toppings = this._selectedToppings;
        const urls = [];
        //Crust
        if ((_a = toppings['Choose crust:']) === null || _a === void 0 ? void 0 : _a.includes('Regular')) {
            urls.push(`${this.cdnUrl}assets/images/Pizzacrust.png`);
        }
        if ((_b = toppings['Choose crust:']) === null || _b === void 0 ? void 0 : _b.includes('Brownie')) {
            urls.push(`${this.cdnUrl}assets/images/PizzaBrownie.png`);
        }
        if ((_c = toppings['Choose crust:']) === null || _c === void 0 ? void 0 : _c.includes('Graham Cracker')) {
            urls.push(`${this.cdnUrl}assets/images/PizzaGrahm.png`);
        }
        // Sauce
        if ((_d = toppings['Sauce:']) === null || _d === void 0 ? void 0 : _d.includes('Chocolate')) {
            urls.push(`${this.cdnUrl}assets/images/choco.png`);
        }
        if ((_e = toppings['Sauce:']) === null || _e === void 0 ? void 0 : _e.includes('Jello')) {
            urls.push(`${this.cdnUrl}assets/images/jello.png`);
        }
        if ((_f = toppings['Sauce:']) === null || _f === void 0 ? void 0 : _f.includes('Tapioca Pudding')) {
            urls.push(`${this.cdnUrl}assets/images/pudding.png`);
        }
        // Toppings
        if ((_g = toppings.Toppings) === null || _g === void 0 ? void 0 : _g.includes('Gummy Bears')) {
            urls.push(`${this.cdnUrl}assets/images/gummibears.png`);
        }
        if ((_h = toppings.Toppings) === null || _h === void 0 ? void 0 : _h.includes('Fruit Loops')) {
            urls.push(`${this.cdnUrl}assets/images/fruitloops.png`);
        }
        if ((_j = toppings.Toppings) === null || _j === void 0 ? void 0 : _j.includes('Candy Canes')) {
            urls.push(`${this.cdnUrl}assets/images/candycanes.png`);
        }
        if ((_k = toppings.Toppings) === null || _k === void 0 ? void 0 : _k.includes('Donuts')) {
            urls.push(`${this.cdnUrl}assets/images/donuts.png`);
        }
        if ((_l = toppings.Toppings) === null || _l === void 0 ? void 0 : _l.includes('Lollipops')) {
            urls.push(`${this.cdnUrl}assets/images/lollipops.png`);
        }
        return urls;
    }
    _handleAddToCart() {
        this.dispatchEvent(new CustomEvent('olo-add-to-cart', {
            detail: this._selectedToppings,
        }));
    }
    _handlePizzaOptionChange(e) {
        // Update selected topping state
        this._selectedToppings = {
            ...this._selectedToppings,
            [e.detail.og]: e.detail.values,
        };
    }
};
PizzaBuilder.styles = css `
    :host {
      background-attachment: fixed;
      background-image: url(/assets/images/pizza-background.png);
      background-position: bottom;
      background-repeat: no-repeat;
      display: grid;
      flex: 1 1 auto;
      gap: 40px;
      grid-template:
        'name  options' auto
        'pizza options' 1fr
        / 33% 66%;
      padding: 40px;
    }

    .Name {
      grid-area: name;
    }

    .Pizza {
      align-self: start;
      display: grid;
      grid-area: pizza;
      position: sticky;
      top: 80px;
    }

    @keyframes slideDown {
      from {
        transform: translateY(-200%);
      }
      to {
        transform: translateY(0);
      }
    }

    @keyframes slideUp {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }

    @keyframes fill {
      from {
        transform: scale(0.1);
      }

      to {
        transform: scale(1);
      }
    }

    @keyframes fall {
      from {
        transform: translateY(-150%) scale(2);
      }
      to {
        transform: translateY(0) scale(1);
      }
    }

    .Pizza > * {
      aspect-ratio: 1;
      grid-area: 1 / 1;
      object-fit: contain;
      transform: translateY(0);
      width: 100%;
    }

    .Peel {
      animation: slideUp 1s;
      aspect-ratio: 6 / 15;
      margin-bottom: -150%;
    }

    .Pizza
      > :is([src*='pizzacrust' i], [src*='pizzabrownie' i], [src*='pizzagrahm' i]) {
      animation: slideDown 0.6s;
    }

    .Pizza > :is([src*='choco' i], [src*='jello' i], [src*='pudding' i]) {
      animation: fill 0.4s ease-in-out;
    }

    .Pizza
      > :is([src*='gummibears' i], [src*='fruitloops' i], [src*='candycanes' i], [src*='donuts' i], [src*='lollipops' i]) {
      animation: fall 0.3s cubic-bezier(0.5, 0, 1, 1);
    }

    .Options {
      background-color: #fffd;
      border: 1px solid #a3a3a3;
      border-radius: 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      gap: 1em;
      grid-area: options;
      padding: 40px;
    }

    .Footer {
      background-color: #fffd;
      backdrop-filter: blur(1px);
      border-radius: 0 0 19px 19px;
      border-top: 1px solid #a3a3a3;
      bottom: 0;
      display: flex;
      margin: auto -40px -40px;
      padding: 40px;
      position: sticky;
    }

    .AddToCart {
      background-color: #d94848;
      border: 1px solid #d93131;
      border-radius: 8px;
      color: #fff;
      display: flex;
      flex: 0 0 auto;
      flex-direction: row;
      font-size: 20px;
      gap: 16px;
      margin-left: auto;
      padding: 16px 32px;
    }
  `;
PizzaBuilder.properties = {
    cdnUrl: {},
    product: {},
    _selectedToppings: { state: true },
};
PizzaBuilder = __decorate([
    customElement('pizza-builder')
], PizzaBuilder);
export { PizzaBuilder };
//# sourceMappingURL=pizza-builder.js.map