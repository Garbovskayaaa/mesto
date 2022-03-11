import Popup from "./Popup";

export default class PopupConfirm extends Popup {
  constructor({ popupSelector, renderer }) {
    super(popupSelector);
    this._renderer = renderer;
    this._formSubmit = this._formSubmit.bind(this);
    this._popupForm = this._popup.querySelector('.popup__form');
    // this._inputs = this._popupForm.querySelectorAll('.popup__input');
  }

  _formSubmit(evt) {
    evt.preventDefault();
    this._renderer();
    this._close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._formSubmit)
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}