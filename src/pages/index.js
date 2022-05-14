import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { api } from "../components/Api";
import { 
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

// текущий пользователь
let userId

api.getAppInfo()
.then(([cardData, userData]) => {
  userId = userData._id;
  userInfo.setUserInfo( userData.name, userData.about);
  userInfo.setUserAvatar(userData.avatar);
  cardsCatalogue.renderItems(cardData);
})
.catch(err => console.log(`Ошибка.....: ${err}`))

// Попап редактирования профиля
const userInfo = new UserInfo({nameProfile, jobProfile, avatarProfile});

const createCard = (item) => {
  const newCard = new Card(item, userId, '.template-card', {
    handleCardClick: () => {
      popupWithImage.open(item.link, item.name);
    },
    handleCardDelete: (_id) => {
      confirmModal.open()
      // паралельно устанавливаем новую функцию
      confirmModal.changeHandlerSubmitForm(() => {
        api.deleteCard(_id)
        .then(()=> {
          newCard.deleteCard()
          confirmModal.close()
        })
        .catch(err => console.log(`Ошибка.....: ${err}`))
      })
    },
    handleLikeClick: (_id) => {
      if(newCard.isLiked()) {
        api.deleteLike(_id)
        .then(res => {
          newCard.setLikes(res.likes)
        })
        .catch(err => console.log(`Ошибка.....: ${err}`))
    } else {
        api.addLike(_id)
        .then(res => {
          newCard.setLikes(res.likes)
        })
        .catch(err => console.log(`Ошибка.....: ${err}`))
      }
    }
  })
  return newCard.generateCard();
}

// 6 карточек создаются
const cardsCatalogue = new Section ({
  renderer: (item) => {
    cardsCatalogue.addItem(createCard(item)); // новая сверху отображается
  }
}, cardElements);

// добавляем новую карточку
const popupAddCardForm = new PopupWithForm ({
  popupSelector: ".popup_type_add",
  renderer: (item) => {
    popupAddCardForm.loadingMessage(true)
    api.addCard(item)
    .then(res => {
      cardsCatalogue.prependItem(createCard(res))
      popupAddCardForm.close()
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
    .finally(() => {
      popupAddCardForm.loadingMessage(false)
    })
  }
});
popupAddCardForm.setEventListeners();

// Попап удаления карточки
const confirmModal = new PopupWithForm ({
  popupSelector: '.popup_delite_card',
  renderer: (id) => {
    api.deleteCard(id)
    .then(() => {
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
  }
})
confirmModal.setEventListeners();

// редактирование профиля
const popupEditForm = new PopupWithForm ({
  popupSelector: ".popup_type_edit",
  renderer: (item) => {
    popupEditForm.loadingMessage(true)
    api.editProfile(item)
    .then(() => {
      userInfo.setUserInfo(item.name, item.job)
      popupEditForm.close();
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
    .finally(() => {
      popupEditForm.loadingMessage(false)
    })
  }
});
popupEditForm.setEventListeners();

// редактирование аватара 
const popupEditAvatar = new PopupWithForm ({
  popupSelector: ".popup_type_avatar",
  renderer: (item) => {
    popupEditAvatar.loadingMessage(true)
    api.editAvatar(item)
    .then(() => {
      userInfo.setUserAvatar(item.avatar);
      popupEditAvatar.close();
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
    .finally(() => {
      popupEditAvatar.loadingMessage(false)
    })
  }
})
popupEditAvatar.setEventListeners(); 

const popupWithImage = new PopupWithImage (".popup_type_image");
popupWithImage.setEventListeners();

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