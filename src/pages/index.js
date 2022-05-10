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

let userId

api.getProfile()
  .then(res => {
    userInfo.setUserInfo(res.name, res.about)
    userInfo.setUserAvatar(res.avatar)

    userId = res._id
  })

api.getCards()
  .then(cardList => {
    cardList.forEach(data => {
      const card = createCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id
      })
      cardsCatalogue.addItem(card)
    })
  })

// Попап редактирования профиля
const userInfo = new UserInfo({nameProfile, jobProfile, avatarProfile});

const createCard = (item) => {
  const newCard = new Card(item, '.template-card', {
    handleCardClick: () => {
      popupWithImage.open(item.link, item.name);
    },
    handleCardDelete: (id) => {
      confirmModal.open()
      // паралельно устанавливаем новую функцию
      confirmModal.changeHandlerSubmitForm(() => {
        api.deleteCard(id)
          .then((res) => {
            newCard.deleteCard()
            confirmModal.close()
            console.log(res)
          })
      })
    },
    handleLikeClick: (id) => {
      if(newCard.isLiked()) {
        api.deleteLike(id)
        .then(res => {
          newCard.setLikes(res.likes)
      }) 
    } else {
        api.addLike(id)
        .then(res => {
          newCard.setLikes(res.likes)
        })
      }
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
    popupAddCardForm.loadingMessage(true)
    api.addCard(item)
    .then(res => {
      const card = createCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id
    })
      cardsCatalogue.addItem(card);
    })
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
      .then(res => {
        // console.log('index', res)
      })
  }
})
confirmModal.setEventListeners();

// редактирование профиля
const popupEditForm = new PopupWithForm ({
  popupSelector: ".popup_type_edit",
  renderer: (item) => {
    popupEditForm.loadingMessage(true)
    api.editProfile(item)
    .then(res => {
      userInfo.setUserInfo(item.name, item.job)
      popupEditForm.close();
    })
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