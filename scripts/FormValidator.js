export default class FormValidator {
  constructor(data, form) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._form = form;
  }

  /// Функция, добавляет класс с ошибкой
  _showInputError = (inputElement, errorMessage) => {
    // Выбираем элемент ошибки на основе уникального класса
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    // Заменим содержимое span с ошибкой на переданный параметр
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  // Функция, удаляет класс с ошибкой
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    // Очистим ошибку
    errorElement.textContent = "";
  };

  //Функция, проверяет валидность поля
  _checkInputValidity = (inputElement) => {
    // Если поле не проходит валидацию, покажем ошибку
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement,inputElement.validationMessage);
    } else {
      // Если поле проходит валидацию, скроем ошибку
      this._hideInputError(inputElement);
    }
  };
  // Функция принимает массив полей
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  // // Проверка состояния кнопки
  _toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.disabled = "disabled";
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = "";
    }
  };
  // Добавление полей ошибок всем полям
  _setEventListeners = () => {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    // чтобы проверить состояние кнопки в самом начале
    this._toggleButtonState(inputList, buttonElement);
    this._formElement.addEventListener("reset", (evt) => {
      // При очистке формы через метод reset вызывается событие reset - вот как раз мы его тут ловим и управляем кнопкой
      // нужен для того, чтобы управление кнопкой сработало только после полной очистки инпутов, тогда кнопка деактивируется
      setTimeout(() => {
        this._toggleButtonState(inputList, buttonElement);
      });
    });
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this.__toggleButtonState(inputList, buttonElement);
      });
    });
  };
// Перебор всех форм  
  enableValidation = () => { 
  const formList = Array.from(document.querySelectorAll(this._formSelector)); 
  formList.forEach((formElement) => { 
    formElement.addEventListener("submit", (evt) => { 
      // Отменим стандартное поведение по сабмиту 
      evt.preventDefault(); 
    }); 
    this._setEventListeners(formElement); 
    }); 
  };
}
