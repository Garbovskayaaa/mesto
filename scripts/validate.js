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
  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault(); // предотвратить дефолтное поведение
    })
  })
  console.log(forms);
}