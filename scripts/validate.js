enableValidation({
    formSelector: '.popup__form', // formElement
    inputSelector: '.popup__input', // 
    buttonSubmit: '.popup__button', //кнопка
    isInactiveButtonClass: 'popup__button_disabled', //кнопка_отключена
    classOfInputError: 'popup__input_type_error', 
    errorClass: 'popup__error-visible' //всплывающая_ошибка
  }); 
  
function enableValidation({formSelector, ...rest}) { // (должен быть объект с конфигом)
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    addListenersToForm(formElement, rest);
  })
};

function addListenersToForm(form) {
  const inputSelector = Array.from(form.querySelectorAll('.popup__input'));
  inputSelector.forEach(addListenersToInput)
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();  // предотвратить дефолтное поведение
  });
  form.addEventListener('input', handleFormInput);
  toggleButton(form);
};

function handleFormInput(evt) {
  toggleButton(evt.currentTarget);
};

function toggleButton(form) {
  const buttonSubmit = form.querySelector('.popup__button');
  const isInactiveButtonClass = !form.checkValidity();
  buttonSubmit.disabled = isInactiveButtonClass;
  buttonSubmit.classList.toggle('popup__button_disabled', isInactiveButtonClass); 
};

function addListenersToInput(input) {
  input.addEventListener('input', hendleFieldValidation);
};

function hendleFieldValidation(evt) {
  const element = evt.target;
  const classOfInputError = document.querySelector(`#${element.id}-error`);
  element.setCustomValidity('');
  element.classList.toggle('error', !element.validity.valid);
  validateRequired(element);
  validateURL(element);
  classOfInputError.textContent = element.validationMessage;
};

function validateRequired(element) {
  if (element.validity.valueMissing) {
    element.setCustomValidity('Вы пропустили это поле.');
  }
};

function validateURL(element) {
  if (element.validity.typeMismatch) {
    element.setCustomValidity('Введите адрес сайта.');
  }
};