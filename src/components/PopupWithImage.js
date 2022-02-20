import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.image = this._popup.querySelector('.popup__foto');
    this._title = this._popup.querySelector('.popup__foto-name')
  }
// В open нужно вставлять в попап картинку с src изображения и подписью к картинке.
  open(link, name) {
    this.image.src = link;
    this.image.alt = name;
    this._title.textContent = name;
    super.open();
  }
}