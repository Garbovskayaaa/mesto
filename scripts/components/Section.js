export default class Section {
  constructor({items, renderer}, containerSelector){
    this._rendererItems = items;
    this._renderer = renderer;
    
    this._container = containerSelector;
  };

  addItem(element) {
    this._container.append(element);
  };

  rendererItems() {
    this._rendererItems.forEach(item => this._renderer(item))
  };
}