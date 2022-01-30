import FormValidator from './FormValidator.js';
import Card from './Card.js';
// модалка - редактирование профиля
const nameInput = document.querySelector('.popup__input_user_name'); // форма ввода имя user
const jobInput = document.querySelector('.popup__input_user_job'); // форма ввода занятие user
const nameProfile = document.querySelector('.profile__name'); // главная страница имя user
const jobProfile = document.querySelector('.profile__job'); // главная страница занятие user
// Находим форму в DOM - редактирование профиля
const popupEdit = document.querySelector('.popup_type_edit'); // модал edit профиль
const formEdit = popupEdit.querySelector('.popup__edit-profile'); // форма ввода edit профиль
// Находим кнопки - редактирование профиля
const profileOpenBtn = document.querySelector('.profile__edit-button'); // кнопка открытия edit профиль
const popupCards = document.querySelector('.popup_type_add'); // модал добавления new карточек
const popupAddOpen = document.querySelector('.profile__add-button'); // кнопка открытия добавления new карточек
// Открытие картинок
const popupImageModal = document.querySelector('.popup_type_image'); // модал окно
const fotoPopupFull = document.querySelector('.popup__foto'); // картинка
const fotoPopupTxt = document.querySelector('.popup__foto-name'); // наименование картинки
const popupAddCard = document.querySelector('.popup__edit-addCard'); // форма ввода url и наименование new карточек
const cardElements = document.querySelector('.elements'); // сетка добавления new карточек
const cardTemplateElement = document.querySelector('.template-card'); // форма template new карточек
const saveCard = document.querySelector('.popup__button'); // сохранить изменение
const popups = document.querySelectorAll('.popup')
const titleInput = document.querySelector('.popup__input_title'); // форма наименование new карточки
const linkInput = document.querySelector('.popup__input_link'); // форма url new карточек
const formList = document.querySelectorAll('.popup__form')

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

initialCards.forEach((item) => {
  const card = new Card (item.name, item.link);
  const cardElement = card.generateCard();
  document.querySelector('.elements').append(cardElement);
});

const formValidators = {};
formList.forEach((formElement) => {
    const formValidator = new FormValidator({
        formSelector: '.popup__form', //Селектор формы
        inputSelector: '.popup__input', //селектор инпута
        submitButtonSelector: '.popup__button', //селектор кнопка сабмит формы
        inactiveButtonClass: 'popup__button_disabled', //кнопка_отключена
        inputErrorClass: 'popup__input_type_error', // появляется border-bottom: red;
        errorClass: 'popup__error-visible', //всплывающая_ошибка
    },formElement);

    const formName = formElement.name;
    formValidators[formName] = formValidator;
    // formValidators[formName].enableValidation();
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
// функция закрытия попапа при клике на esc

// // универсальный попап открытие
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
};
// попап закрытия=Крестик
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    })
});

// функция закрытия попапа при клике на esc
function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const currentPopup = document.querySelector('.popup_opened');
        closePopup(currentPopup);
    }
};
// document.addEventListener("keydown", function (evt) {
//     if (evt.key === 'Escape') {
//         const currentPopup = document.querySelector('popup_opened');
//         closePopup(currentPopup);
//     }
// });

  // универсальный попап закрытия
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}

// функция добавления фото из формы
function addNewCardImg(evt) {
    evt.preventDefault();
    const newCard = createCard ({name: titleInput.value, link: linkInput.value});
    cardElements.prepend(newCard);
    evt.currentTarget.reset();
    closePopup(popupCards);
};

///////////////////////// РЕГИСТРАЦИЯ ОТРАБОТЧИКОВ ////////////////////////////////////////
profileOpenBtn.addEventListener('click', () => openPopupProfile(popupEdit));
formEdit.addEventListener('submit', handleProfileFormSubmit);

popupAddOpen.addEventListener('click', () => openPopup(popupCards));
popupAddCard.addEventListener('submit', addNewCardImg); // отправка формы добавление новой карточки