import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, renderer }) {
    super(popupSelector);
    this._renderer = renderer;
    this._formSubmit = this._formSubmit.bind(this);
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputs = this._popupForm.querySelectorAll(".popup__input");
  }

//* Метод сбора данных со всех полей формы
  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    // возвращаем объект значений
    return this._formValues;
  }


    //* Сабмит формы
  _formSubmit(evt) {
    evt.preventDefault();
      this._renderer(this._getInputValues());
      this.close();
  }

//* Перезапись родительского метода установки слушателей
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._formSubmit);
  }

//* Перезапись родительского метода закрытия попапа
  close() {
    super.close();
    this._popupForm.reset();
  }
}


