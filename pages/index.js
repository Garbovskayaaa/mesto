import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';

import { 
  initialCards,
  enableValidations,
  cardElements,
  cardTemplate,
  popupAddOpen,
  formEdit,
  popupAddCard,
  nameProfile,
  jobProfile,
  popupEdit,
  nameInput,
  jobInput} from '../scripts/utils/constants.js'

// Попап редактирования профиля
const userInfo = new UserInfo({nameProfile, jobProfile});

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
const popupWithImage = new PopupWithImage ('.popup_type_image');
popupWithImage.setEventListeners();

const createCard = (item) => {
  const newCard = new Card(item.link, item.name, cardTemplate, {
    handleCardClick: () => {
      popupWithImage.open(item.link, item.name);
    }
  });
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

// добавляем новую карточку
const popupAddCardForm = new PopupWithForm ({
  popupSelector: '.popup_type_add',
  renderer: (item) => {
    cardsCatalogue.addItem(createCard(item));
  }
});
popupAddCardForm.setEventListeners();

// редактирование профиля
const popupEditForm = new PopupWithForm ({
  popupSelector: '.popup_type_edit',
  renderer: (item) => {
    userInfo.setUserInfo(item.name, item.job);
    popupEditForm.close();
  }
});
popupEditForm.setEventListeners();

const editFormValidator = new FormValidator(enableValidations, formEdit);
const cardFormValidator = new FormValidator(enableValidations, popupAddCard);
cardFormValidator.enableValidation();
editFormValidator.enableValidation();

// открытие попапа добавления карточки
popupAddOpen.addEventListener('click', () => {
  cardFormValidator.enableValidation();
  popupAddCardForm.open();
});

// открытие попапа редактирование профиля
popupEdit.addEventListener('click', () => {
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
  editFormValidator.enableValidation();
  popupEditForm.open();
})