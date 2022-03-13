import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirm from "../components/PopupWithConfirm";


import { 
  initialCards,
  enableValidations,
  cardElements,
  popupAddOpen,
  formEdit,
  popupAddCard,
  nameProfile,
  jobProfile,
  popupEdit,
  nameInput,
  jobInput,
  avatarProfile,
  popupButtonAvatar,
  formAvatar
  } from "../utils/constants.js"

// Попап редактирования профиля
const userInfo = new UserInfo({nameProfile, jobProfile, avatarProfile});

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
const popupWithImage = new PopupWithImage (".popup_type_image");
popupWithImage.setEventListeners();

const popupConfirm = new PopupWithConfirm(".popup_delite_card");
popupConfirm.setEventListeners();


const createCard = (item) => {
  const newCard = new Card(item.link, item.name, '.template-card', {
    handleCardClick: () => {
      popupWithImage.open(item.link, item.name);
    },
    handleDeleteCard: (newCard) => {
      popupConfirm.open();
      popupConfirm.changeHandlerSubmitForm();
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
  popupSelector: ".popup_type_add",
  renderer: (item) => {
    cardsCatalogue.addItem(createCard(item));
  }
});
popupAddCardForm.setEventListeners();

// редактирование профиля
const popupEditForm = new PopupWithForm ({
  popupSelector: ".popup_type_edit",
  renderer: (item) => {
    userInfo.setUserInfo(item.name, item.job);
    popupEditForm.close();
  }
});
popupEditForm.setEventListeners();

// редактирование аватара
const popupEditAvatar = new PopupWithForm ({
  popupSelector: ".popup_type_avatar",
  renderer: (item) => {
    popupEditAvatar.loadingMessage(true);
    userInfo.setUserAvatar(item.avatar);
    popupEditAvatar.close();
  }
})
popupEditAvatar.setEventListeners();

const editFormValidator = new FormValidator(enableValidations, formEdit);
const cardFormValidator = new FormValidator(enableValidations, popupAddCard);
const editAratarValidator = new FormValidator(enableValidations, formAvatar);
cardFormValidator.enableValidation();
editFormValidator.enableValidation();
editAratarValidator.enableValidation();

// открытие попапа добавления карточки
popupAddOpen.addEventListener("click", () => {
  popupAddCardForm.open();
});
// открытие попапа редактирование профиля
popupEdit.addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
  popupEditForm.open();
})
// открытие попапа редактирование аватара
popupButtonAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
})