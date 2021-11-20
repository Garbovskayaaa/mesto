enableValidation({
    formSelector: '.popup__form', // formElement
    inputSelector: '.popup__input', // 
    submitButtonSelector: '.popup__button', //кнопка
    inactiveButtonClass: 'popup__button_disabled', //кнопка_отключена
    inputErrorClass: 'popup__input_type_error', 
    errorClass: 'popup__error-visible' //всплывающая_ошибка
  }); 

function enableValidation() { // (должен быть объект с конфигом)
  const formSelector = Array.from(document.querySelectorAll('.popup__form'));
  formSelector.forEach(addListenersToForm)
}

function addListenersToForm(form) {
  const inputSelector = Array.from(document.querySelectorAll('.popup__input'));
  inputSelector.forEach(addListenersToInput)
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();  // предотвратить дефолтное поведение
  });
  form.addEventListener('input', handleFormInput);
  toggleButton(form);
}

function handleFormInput(evt) {
  toggleButton(evt.currentTarget);
}

function toggleButton(form) {
  const submitButtonSelector = form.querySelector('.popup__button');
  const inactiveButtonClass = !form.checkValidity();
  submitButtonSelector.disabled = inactiveButtonClass;
  submitButtonSelector.classList.toggle('popup__button_disabled', inactiveButtonClass); 
}

function addListenersToInput(input) {
  input.addEventListener('input', hendleFieldValidation);
}

function hendleFieldValidation(evt) {
  const element = evt.target;
  const inputErrorClass = document.querySelector(`#${element.id}-error`);
  element.setCustomValidity('');
  element.classList.toggle('error', !element.validity.valid);
  validateRequired(element);
  validateURL(element);
  inputErrorClass.textContent = element.validationMessage;
}

function validateRequired(element) {
  if (element.validity.valueMissing) {
    element.setCustomValidity('Вы пропустили это поле.');
  }
}

function validateURL(element) {
  if (element.validity.typeMismatch) {
    element.setCustomValidity('Введите адрес сайта.');
  }
}