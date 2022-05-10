import Popup from './Popup.js';

// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, renderer }) {
    super(popupSelector)
    this._formSubmit = this._formSubmit.bind(this)
    this._renderer = renderer
    this._popupForm = this._popup.querySelector('.popup__form')
  }

// приватный метод _getInputValues, который собирает данные всех полей формы.
  _getInputValues() {
    this._formValues = {};
    this._popupForm.querySelectorAll('.popup__input').forEach((input) => {
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
// подменяем изначальный formSubmit на новый
  changeHandlerSubmitForm(newFormSubmit) {
    this._renderer = newFormSubmit
}
// Перезаписывает родительский метод setEventListeners.
// Метод добавляет обработчик клика иконке закрытия, и добавлять обработчик сабмита формы.
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._formSubmit);
  }

// Перезаписывает родительский close, при закрытии попапа форма сбрасывается.
  close() {
    super.close();
    this._popupForm.reset();
  }
}


