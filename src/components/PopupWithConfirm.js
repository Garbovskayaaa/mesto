import Popup from "./Popup";
// Обновление аватара пользователя
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._renderer = renderer;
    // this._formSubmit = this._formSubmit.bind(this);
    // this._formElement = this._popup.querySelector('.popup__form');
    // this._inputs = this._popupForm.querySelectorAll('.popup__input');
    this._button = this._popup.querySelector('.popup__button');
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', () => this._hadlerSubmitForm());
  }

  changeHandlerSubmitForm(submitAction) {
    this._hadlerSubmitForm = submitAction;
  }
}