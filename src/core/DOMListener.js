
export class DOMListener {
  constructor($root) {
    if (!$root) {
      throw new Error('No $root provided for DOM_Listener');
    }
    this.$root = $root;
  }
}
