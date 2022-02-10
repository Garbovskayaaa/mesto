import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(data) {
    this._popupSelector = data.popupSelector,
    this._submitHandler = data.submitHandler;
  };

  _getInputValues(){
    this._popupInput = Array.from(this._element.querySelectorAll(".popup__input"));
    this._formValues = {};

    this._popupInput.forEach(function (input) {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  };
}