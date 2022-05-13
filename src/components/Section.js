export default class Section {
  constructor({renderer}, containerSelector) {
    // this._rendererItems = items;
    this._renderer = renderer;

    this._container = containerSelector;
  }

  renderItems(items) {
		items.forEach(item => {
			this._renderer(item);
		});
	}

  //* Добавление карточки
  addItem(element) {
    this._container.append(element);
  }

  // в начало
  prependItem(element) {
    this._container.prepend(element)
  }
}