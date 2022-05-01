import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
// import PopupWithConfirm from "../components/PopupWithConfirm";
import { api } from "../components/Api1";
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

api.getProfile()
  .then(res => {
    console.log('ответ', res)
    userInfo.setUserInfo(res.name, res.about)
  })

api.getCards()
  .then(cardList => {
    console.log(cardList)
    cardList.forEach(data => {
      const card = createCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id
      })
      cardsCatalogue.addItem(card)
    })
  })

// Попап редактирования профиля
const userInfo = new UserInfo({nameProfile, jobProfile, avatarProfile});

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
const popupWithImage = new PopupWithImage (".popup_type_image");
popupWithImage.setEventListeners();

const confirmModal = new PopupWithForm ({
  popupSelector: '.popup_delite_card',
  renderer: (_id) => {
    console.log(_id)
    api.deleteCard(_id)
      .then(res => {
        console.log('res', res)
      })
  }
})
confirmModal.setEventListeners();

const createCard = (item) => {
  const newCard = new Card(item, '.template-card', {
    handleCardClick: () => {
      popupWithImage.open(item.link, item.name);
    },
    handleCardDelete: () => {
      console.log('нажали кнопку удалить')
      console.log()
      confirmModal.open()
        // confirmModal.changeHandlerSubmitForm(() => {
        //   api.deleteCard(_id)
        //     .then(res => {
        //       newCard.deleteCard(_id)
        //       confirmModal.close()
        //       console.log(res)
        //     })
        // })
    }
  })
  return newCard.generateCard();
}
// 6 карточек создаются
const cardsCatalogue = new Section ({
  items: [],
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
    api.addCard(item)
    .then(res => {
      const card = createCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id
    })
    cardsCatalogue.addItem(card);
    })
  }
});
popupAddCardForm.setEventListeners();

// редактирование профиля
const popupEditForm = new PopupWithForm ({
  popupSelector: ".popup_type_edit",
  renderer: (item) => {
    api.editProfile(item)
    .then(res => {
      userInfo.setUserInfo(item.name, item.job)
      popupEditForm.close();
    })
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