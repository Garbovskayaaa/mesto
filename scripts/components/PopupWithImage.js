import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.image = this._popup.querySelector('.popup__foto');
    this._title = this._popup.querySelector('.popup__foto-name')
  }

  open(data) {
    this.image.src = data.link;
    this.image.alt = data.name;
    this._title.textContent = data.name;
    super.open();
  }
}