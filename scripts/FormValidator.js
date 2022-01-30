export default class FormValidator {
  constructor (data, form) {
    this._formSelector = data._formSelector
    this._inputSelector = data._inputSelector
    this._submitButtonSelector = data._submitButtonSelector 
    this._inactiveButtonClass = data._inactiveButtonClass
    this._inputErrorClass = data._inputErrorClass
    this._errorClass = data._errorClass
    this._form = form
  }
// здесь выполним все необходимые операции, чтобы вернуть разметку Работа с шаблоном разметки
  _getTemplate() {
    return document
      .querySelector(this._selector)
      .content
      .querySelector('.popup__form')
      .cloneNode(true)
  }

  _handelSubmit = () => {
    const imput = this._element.querySelector('.popup__input');
    const value = imput.value
    e.preventDefault();
    onSubmit(value);
  }


  getView() {
    this._element = this._getTemplate();
    this._element.addEventListener('submit', this._handelSubmit)

    return this._element
  }
}