import FormValidator from './components/FormValidator.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
// import UserInfo from './components/UserInfo.js';
// import PopupWithImage from './components/PopupWithImage.js';
const formEdit = document.querySelector('.popup__edit-profile'); // форма ввода edit профиль
const popupAddCard = document.querySelector('.popup__edit-addCard'); // форма ввода url и наименование new карточек

import { 
  initialCards,
  enableValidations,
  cardElements,
  popupTypeImage,
  cardTemplate,
  popupCards,
  popupAddOpen } from './utils/constants.js'


const createCard = (item) => {
  const newCard = new Card(item, cardTemplate);
  return newCard.generateCard();
}

// 6 карточек создаются
const cardsCatalogue = new Section ({
  items: initialCards,
  renderer: (item) => {
    cardsCatalogue.addItem(createCard(item));
  }
  }, cardElements);

// отрисовка карточек
cardsCatalogue.rendererItems();

// // добавляем новую карточку
const popupAddCardForm = new PopupWithForm({
	popupSelector: '.popup_type_add',
	renderer: (item) => {
		cardsCatalogue.addItem(createCard(item));
	}
});
popupAddCardForm.setEventListeners();

const editFormValidator = new FormValidator(enableValidations, formEdit);
const cardFormValidator = new FormValidator(enableValidations, popupAddCard);
cardFormValidator.enableValidation();
editFormValidator.enableValidation();



// открытие попапа добавления карточки
popupAddOpen.addEventListener('click', () => {
	cardFormValidator.enableValidation();
	popupAddCardForm.open();
})


// //* Попап с фото
// const popupWithImage = new PopupWithImage (popupTypeImage);
// popupWithImage.setEventListeners();


// //* Попап редактирования профиля
// const userInfo = new UserInfo({nameProfile, jobProfile});

// //* Попап редактирования профиля
// const userInfo = new UserInfo({nameProfile, jobProfile});
// const profileOpenBtn = document.querySelector('.profile__edit-button'); // кнопка открытия edit профиль

const nameProfile = document.querySelector('.profile__name'); // главная страница имя user
const jobProfile = document.querySelector('.profile__job'); // главная страница занятие user

// модалка - редактирование профиля
const nameInput = document.querySelector('.popup__input_user_name'); // форма ввода имя user
const jobInput = document.querySelector('.popup__input_user_job'); // форма ввода занятие user
// const nameProfile = document.querySelector('.profile__name'); // главная страница имя user
// const jobProfile = document.querySelector('.profile__job'); // главная страница занятие user
// Находим форму в DOM - редактирование профиля
const popupEdit = document.querySelector('.popup_type_edit'); // модал edit профиль
// const formEdit = document.querySelector('.popup__edit-profile'); // форма ввода edit профиль
// Находим кнопки - редактирование профиля
// const profileOpenBtn = document.querySelector('.profile__edit-button'); // кнопка открытия edit профиль
// const popupCards = document.querySelector('.popup_type_add'); // модал добавления new карточек
// const popupAddOpen = document.querySelector('.profile__add-button'); // кнопка открытия добавления new карточек
// Открытие картинок

// const popupAddCard = document.querySelector('.popup__edit-addCard'); // форма ввода url и наименование new карточек
// const cardElements = document.querySelector('.elements'); // сетка добавления new карточек
const popups = document.querySelectorAll('.popup');
const titleInput = document.querySelector('.popup__input_title'); // форма наименование new карточки
const linkInput = document.querySelector('.popup__input_link'); // форма url new карточек


// // Функция Обработчик «отправки» формы - редактирование профиля
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   nameProfile.textContent = nameInput.value;
//   jobProfile.textContent = jobInput.value;
//   closePopup(popupEdit);
// };

// profileOpenBtn.addEventListener('click', () => openPopupProfile(popupEdit));
// formEdit.addEventListener('submit', handleProfileFormSubmit);
// popupAddOpen.addEventListener('click', () => openPopup(popupCards));

