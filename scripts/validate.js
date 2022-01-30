// Функция, добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, form) => {
  // Выбираем элемент ошибки на основе уникального класса
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(form.inputErrorClass);
  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;
  errorElement.classList.add(form.errorClass);
};

// Функция, удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, form) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(form.inputErrorClass);
  errorElement.classList.remove(form.errorClass);
  // Очистим ошибку
  errorElement.textContent = "";
};

//Функция, проверяет валидность поля
const checkInputValidity = (formElement, inputElement, form) => {
  // Если поле не проходит валидацию, покажем ошибку
  if (!inputElement.validity.valid) {
    showInputError(formElement,inputElement,inputElement.validationMessage,form);
  } else {
    // Если поле проходит валидацию, скроем ошибку
    hideInputError(formElement, inputElement, form);
  }
};

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Проверка состояния кнопки
const toggleButtonState = (inputList, buttonElement, form) => {
// Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList, form)) {
// сделай кнопку неактивной
buttonElement.disabled = "disabled"; 
    buttonElement.classList.add(form.inactiveButtonClass);
  } else {
  // иначе сделай кнопку активной
    buttonElement.classList.remove(form.inactiveButtonClass);
    buttonElement.disabled = ""; 
  }
};

// Добавление полей ошибок всем полям
const setEventListeners = (formElement, form) => {
  const inputList = Array.from(formElement.querySelectorAll(form.inputSelector));
  const buttonElement = formElement.querySelector(form.submitButtonSelector);
  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement, form);
  formElement.addEventListener("reset", (evt) => {
    // При очистке формы через метод reset вызывается событие reset - вот как раз мы его тут ловим и управляем кнопкой
    // нужен для того, чтобы управление кнопкой сработало только после полной очистки инпутов, тогда кнопка деактивируется
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, form)
    })
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, form);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement, form);
    });
  });
};

// Перебор всех форм
// const enableValidation = (form) => {
//   const formList = Array.from(document.querySelectorAll(form.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener("submit", (evt) => {
//       // Отменим стандартное поведение по сабмиту
//       evt.preventDefault();
//     });
//     setEventListeners(formElement, form);
//   });
// };

// enableValidation ({
//   formSelector: ".popup__form", //Селектор формы
//   inputSelector: ".popup__input", //селектор инпута
//   submitButtonSelector: ".popup__button", //селектор кнопка сабмит формы
//   inactiveButtonClass: "popup__button_disabled", //кнопка_отключена
//   inputErrorClass: "popup__input_type_error", // появляется border-bottom: red;
//   errorClass: "popup__error-visible", //всплывающая_ошибка
// });
