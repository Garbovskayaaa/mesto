export const enableValidations = {
  formSelector: '.popup__form', //Селектор формы
  inputSelector: '.popup__input', //селектор инпута
  submitButtonSelector: '.popup__button', //селектор кнопка сабмит формы
  inactiveButtonClass: 'popup__button_disabled', //кнопка_отключена
  inputErrorClass: 'popup__input_type_error', // появляется border-bottom: red;
  errorClass: 'popup__error-visible', //всплывающая_ошибка
};

export const cardElements = document.querySelector('.elements'); // сетка добавления new карточек
export const cardTemplate = document.querySelector('.template-card') // для Section
export const popupCards = document.querySelector('.popup_type_add'); // модал добавления new карточек
export const popupAddOpen = document.querySelector('.profile__add-button'); // кнопка открытия добавления new карточек
export const popupTypeImage = document.querySelector('.popup_type_image');
export const formEdit = document.querySelector('.popup__edit-profile'); // форма ввода edit профиль
export const popupAddCard = document.querySelector('.popup__edit-addCard'); // форма ввода url и наименование new карточек
export const nameProfile = document.querySelector('.profile__name'); // главная страница имя user
export const jobProfile = document.querySelector('.profile__job'); // главная страница занятие user
export const popupEdit = document.querySelector('.profile__edit-button'); // модал edit профиль
export const nameInput = document.querySelector('.popup__input_user_name'); // форма ввода имя user
export const jobInput = document.querySelector('.popup__input_user_job'); // форма ввода занятие user
export const formAvatar = document.querySelector('.popup_type_avatar')
export const popupConfirmSelector = document.querySelector('.popup_delite_card');
export const popupButtonAvatar = document.querySelector('.profile__avatar-edit');
export const avatarProfile = document.querySelector('.profile__avatar');
