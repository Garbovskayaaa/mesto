// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//     formSelector: '.popup__form', // formElement
//     inputSelector: '.popup__input', // formInput
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error', 
//     errorClass: 'popup__error_visible'
//   }); 
enableValidation();

function enableValidation() { // (должен быть объект с конфигом)
  // const forms = [...document.querySelectorAll('.form__popup')];
  const forms = Array.from(document.querySelectorAll('.popup__form'));
  forms.forEach(addListenersToForm)
  // console.log(forms);
}

function addListenersToForm(form) {
  const inputs = Array.from(document.querySelectorAll('.popup__input'));

  inputs.forEach(addListenersToInput)

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();  // предотвратить дефолтное поведение
  })
  // console.log("inputs",inputs);
}

function addListenersToInput(input) {
  input.addEventListener('input', hendleFieldValidation);
}

function hendleFieldValidation(evt) {
  const element = evt.target;

  if (!element.validity.valid) {
    const errorConteiner = document.querySelector(`#${element.id}-error`);
    errorConteiner.textContent = element.validationMessage;
    debugger;
  }
}