const obj = {
    formSelector: '.popup__form', //Селектор формы
    inputSelector: '.popup__input', //селектор инпута
    submitButtonSelector: '.popup__button', //селектор кнопка сабмит формы
    inactiveButtonClass: 'popup__button_disabled', //кнопка_отключена
    inputErrorClass: 'popup__input_type_error', //Этот класс должен добавляться  когда введённые данные некорректны.
    errorClass: 'popup__error_visible' //всплывающая_ошибка
};

enableValidation(obj);

function enableValidation({formElement, ...rest}) { // (должен быть объект с конфигом) //нажимаем кнопку сохранить
  // действие процесса наложения валидации
  const forms = Array.from(document.querySelectorAll('.popup__form')); // находит форму
  forms.forEach((formElement) => {
      // обработчик событий чтобы она не сабмитилась
      formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();   // предотвратить дефолтное поведение
    });
    addListenersToForm(formElement, rest);
  })
};

function addListenersToForm(inputElement) {
  const inputs = Array.from(inputElement.querySelectorAll('.popup__input'));
  inputs.forEach(addListenersToInput)
  inputElement.addEventListener('input', handleFormInput);
  toggleButton(inputElement);
};

function handleFormInput(evt) {
  toggleButton(evt.currentTarget);
};

// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('popup__error_visible');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('popup__error_visible');
};

// Функция, которая проверяет валидность поля
const isValid = (formSelector, inputSelector) => {
  if (!formSelector.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formSelector, inputSelector);
  }
};

function toggleButton(buttonElement) {
  const buttonSubmit = buttonElement.querySelector('.popup__button');
  const isInactiveButtonClass = !buttonElement.checkValidity();
  buttonSubmit.disabled = isInactiveButtonClass;
  buttonSubmit.classList.toggle('popup__button_disabled', isInactiveButtonClass);
};

function addListenersToInput(inputElement) {
  inputElement.addEventListener('input', hendleFieldValidation);
};

function hendleFieldValidation(evt) {
  const element = evt.target;
  const formError = document.querySelector(`#${element.id}-error`);
  element.setCustomValidity('');
  element.classList.toggle('popup__input_type_error', !element.validity.valid);
  validateRequired(element);
  validateURL(element);
  formError.textContent = element.validationMessage;
};

function validateRequired(errorMessage) {
  if (errorMessage.validity.valueMissing) {
    errorMessage.setCustomValidity('Вы пропустили это поле.');
  }
};

function validateURL(errorMessage) { 
  if (errorMessage.validity.typeMismatch) { 
    errorMessage.setCustomValidity('Введите адрес сайта.'); 
  } 
};