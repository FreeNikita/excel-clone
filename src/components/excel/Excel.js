import {$} from '@core/dom';

export class Excel {
  constructor(selector, option) {
    this.$el = document.querySelector(selector);
    this.componets = option.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.componets.map((Component) => {
      const $el = $.create('div', Component.className);

      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
