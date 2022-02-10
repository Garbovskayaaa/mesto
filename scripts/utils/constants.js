export const initialCards = [
{
  name: "Байкал",
  link: "https://s00.yaplakal.com/pics/pics_original/2/7/8/4104872.jpg",
},
{
  name: "Дальний Восток",
  link: "https://rusmystery.ru/wp-content/uploads/2018/11/yaponskoe.jpg",
},
{
  name: "Река Лена",
  link: "https://i0.wp.com/img-fotki.yandex.ru/get/6744/42670583.48/0_ed6f0_d27cc61a_orig.jpg",
},
{
  name: "Сахалин",
  link: "https://wallpapershome.ru/images/pages/pic_h/23351.jpg",
},
{
  name: "Приморье",
  link: "https://static.tildacdn.com/tild3137-3133-4037-b631-663832643431/45882029112_2981c7fe.jpg",
},
{
  name: "Кольский полуостров",
  link: "https://mtdata.ru/u3/photo2238/20197588453-0/original.jpg",
},
];

export const enableValidations = {
  formSelector: ".popup__form", //Селектор формы
  inputSelector: ".popup__input", //селектор инпута
  submitButtonSelector: ".popup__button", //селектор кнопка сабмит формы
  inactiveButtonClass: "popup__button_disabled", //кнопка_отключена
  inputErrorClass: "popup__input_type_error", // появляется border-bottom: red;
  errorClass: "popup__error-visible", //всплывающая_ошибка
};

export const cardElements = document.querySelector(".elements"); // сетка добавления new карточек

export const cardTemplate = document.querySelector('.template-card')