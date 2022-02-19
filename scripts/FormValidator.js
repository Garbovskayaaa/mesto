export default class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
  }

  /// Функция, добавляет класс с ошибкой
  _showInputError = (inputElement) => {
    // Выбираем элемент ошибки на основе уникального класса
    this._errorElement = document.querySelector(`#${inputElement.id}-error`);
    
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  // Функция, удаляет класс с ошибкой
  _hideInputError = (inputElement) => {
    this._errorElement = document.querySelector(`#${inputElement.id}-error`);
    
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = '';
  };

  //Функция, проверяет валидность поля
  _checkInputValidity = (inputElement) => {
    // Если поле не проходит валидацию, покажем ошибку
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      // Если поле проходит валидацию, скроем ошибку
      this._hideInputError(inputElement);
    }
  };
  
  // Функция принимает массив полей
  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
  // // Проверка состояния кнопки
  _toggleButtonState = () => {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput()) {
      // сделай кнопку неактивной
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = 'disabled';
    } else {
      // иначе сделай кнопку активной
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = ''; 
    }
  };
  // Добавление полей ошибок всем полям
  _setEventListeners = () => {
    this._inputList = Array.from(document.querySelectorAll(this._inputSelector));
    
    this._buttonElement = document.querySelector(this._submitButtonSelector);
    
    // чтобы проверить состояние кнопки в самом начале
    this._toggleButtonState();

    this._buttonElement.addEventListener('reset', (evt) => {
      // При очистке формы через метод reset вызывается событие reset - вот как раз мы его тут ловим и управляем кнопкой
      // нужен для того, чтобы управление кнопкой сработало только после полной очистки инпутов, тогда кнопка деактивируется
      setTimeout(() => {
        this._toggleButtonState();
      });
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this._toggleButtonState();
      });
    });
  };

// Перебор всех форм  
  enableValidation = () => {
    this._setEventListeners(); 
  };
}
