import {$} from '@core/dom';

export class Excel {
  constructor(selector, option) {
    this.$el = $(selector);
    this.componets = option.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.componets = this.componets.map((Component) => {
      const $el = $.create('div', Component.className);

      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    // console.log('this', this.componets);

    this.componets.forEach((component) => component.init());
  }
}
