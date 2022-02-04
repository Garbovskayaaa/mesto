import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
// модалка - редактирование профиля
const nameInput = document.querySelector(".popup__input_user_name"); // форма ввода имя user
const jobInput = document.querySelector(".popup__input_user_job"); // форма ввода занятие user
const nameProfile = document.querySelector(".profile__name"); // главная страница имя user
const jobProfile = document.querySelector(".profile__job"); // главная страница занятие user
// Находим форму в DOM - редактирование профиля
const popupEdit = document.querySelector(".popup_type_edit"); // модал edit профиль
const formEdit = document.querySelector(".popup__edit-profile"); // форма ввода edit профиль
// Находим кнопки - редактирование профиля
const profileOpenBtn = document.querySelector(".profile__edit-button"); // кнопка открытия edit профиль
const popupCards = document.querySelector(".popup_type_add"); // модал добавления new карточек
const popupAddOpen = document.querySelector(".profile__add-button"); // кнопка открытия добавления new карточек
// Открытие картинок


const popupAddCard = document.querySelector(".popup__edit-addCard"); // форма ввода url и наименование new карточек
const cardElements = document.querySelector(".elements"); // сетка добавления new карточек
const popups = document.querySelectorAll(".popup");
const titleInput = document.querySelector(".popup__input_title"); // форма наименование new карточки
const linkInput = document.querySelector(".popup__input_link"); // форма url new карточек

//Добавление элементов из имеющегося массива
const initialCards = [
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

const enableValidations = ({
  formSelector: ".popup__form", //Селектор формы
  inputSelector: ".popup__input", //селектор инпута
  submitButtonSelector: ".popup__button", //селектор кнопка сабмит формы
  inactiveButtonClass: "popup__button_disabled", //кнопка_отключена
  inputErrorClass: "popup__input_type_error", // появляется border-bottom: red;
  errorClass: "popup__error-visible", //всплывающая_ошибка
});

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
};

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
});

// универсальный попап открытие
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};

// универсальный попап закрытия
function closePopup(popup) {
  document.removeEventListener("keydown", closePopupEsc);
  popup.classList.remove("popup_opened");
};

// попап закрытия Оверлей/Крестик
popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

// Функция открытие - редактирование профиля
function openPopupProfile() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEdit);
};

// Функция Обработчик «отправки» формы - редактирование профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEdit);
};

function addNewCardImg(titleInput, linkInput) {
  const newCard = new Card({ name: titleInput, link: linkInput });
  return newCard.generateCard();
};

initialCards.forEach((item) => {
  cardElements.append(addNewCardImg(item.name, item.link));
});

popupAddCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  cardElements.prepend(addNewCardImg(titleInput.value, linkInput.value));
  closePopup(popupCards);
});

profileOpenBtn.addEventListener("click", () => openPopupProfile(popupEdit));
formEdit.addEventListener("submit", handleProfileFormSubmit);
popupAddOpen.addEventListener("click", () => openPopup(popupCards));

const editFormValidator = new FormValidator(enableValidations, formEdit);
const cardFormValidator = new FormValidator(enableValidations, popupAddCard);
cardFormValidator.enableValidation();
editFormValidator.enableValidation();