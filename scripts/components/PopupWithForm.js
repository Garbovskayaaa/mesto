import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, renderer }) {
    super(popupSelector);
    this._renderer = renderer;
    this._formSubmit = this._formSubmit.bind(this);
    this._form = document.querySelector(".popup__form");
    this._inputs = Array.from(document.querySelectorAll(".popup__input"));
    // this._submitButton = this._form.querySelector(".popup__button");
  };

  //* Сабмит формы
  _formSubmit(evt) {
    evt.preventDefault();
    this._renderer(this._getInputValues(), this.close());
  }

  //* Метод сбора данных со всех полей формы
  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  //* Перезапись родительского метода закрытия попапа
  close() {
    super.close();
    this._form.reset();
  }

  //* Перезапись родительского метода установки слушателей
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._formSubmit);
  }
}
