///////////////////////////////объявление переменных//////////////////////////////////
// Находим форму в DOM - редактирование профиля
const popupEdit = document.querySelector('.popup_type_edit'); // модал edit профиль
const formEdit = popupEdit.querySelector('.popup__edit-profile'); // форма ввода edit профиль
// Находим кнопки - редактирование профиля
let popupOpenBtn = document.querySelector('.profile__edit-button'); // кнопка открытия edit профиль
let popupCloseBtn = popupEdit.querySelector('.popup__close'); // кнопка закрытия edit профиль
// Находим поля формы в DOM - редактирование профиля
let nameInput = popupEdit.querySelector('.popup__input_user_name'); // форма ввода имя user
let jobInput = popupEdit.querySelector('.popup__input_user_job'); // форма ввода занятие user
let nameProfile = document.querySelector('.profile__name'); // главная страница имя user
let jobProfile = document.querySelector('.profile__job'); // главная страница занятие user
// Открытие формы добавление картинок
const popupCards = document.querySelector('.popup_type_add'); // модал добавления new карточек
const popupAddOpen = document.querySelector('.profile__add-button'); // кнопка открытия добавления new карточек
let popupAddClous = popupCards.querySelector('.popup__close'); // кнопка закрытия добавления new карточек
// Открытие картинок
const popupImageModal = document.querySelector('.popup_type_image'); // модал окно
const fotoPopupFull = document.querySelector('.popup__foto'); // картинка
const fotoPopupTxt = document.querySelector('.popup__foto-name'); // наименование картинки
const imagePopupClose = popupImageModal.querySelector('.popup__close'); // кнопка закрытия картинки

const popupForm = document.querySelector('.popup__form'); // попап ввода new карточек

const popupAddCard = document.querySelector('.popup__edit-addCard'); // форма ввода url и наименование new карточек
const cardElements = document.querySelector('.elements'); // сетка добавления new карточек
const cardTemplateElement = document.querySelector('.template-card'); // форма template new карточек

const saveCard = document.querySelector('.popup__submit'); // сохранить добавление new карточек
const title = document.querySelector('.popup__input_title'); // форма наименование new карточки
const link = document.querySelector('.popup__input_link'); // форма url new карточек 
////////////////////////////////////ФОРМА РЕДАКТИРОВАНИЯ ПРОФИЛЯ////////////////////////
// Функция открытие - редактирование профиля
function openPopup() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
// Функция закрытие - редактирование профиля
function closePopup() {
  popupEdit.classList.remove('popup_opened');
}

// Функция Обработчик «отправки» формы - редактирование профиля
function formSubmitHandler(evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup()
}

////////////////////////////////////ФОРМА ДОБАВЛЕНИЯ КАРТИНОК///////////////////////////
//Функия открытия формы
function openPopupAdd() {
  popupCards.classList.add('popup_opened');
}

// Функция закрытие формы
function closePopupAdd() {
  popupCards.classList.remove('popup_opened');
}
//////////////////////////////////ДОБАВЛЯЕМ КАРТИНКИ//////////////////////////////////////
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
    link: "https://fotki.ykt.ru/albums/userpics/2015/09-29/dsc_3141.jpg",
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

function elementCard(item) {
  const addCard = cardTemplateElement.content.cloneNode(true);
  addCard.querySelector('.element__suptitle').textContent = item.name;
  addCard.querySelector('.element__item').src = item.link;
  addCard.querySelector('.element__item').alt = item.name;
  addCard.querySelector('.element__mask').addEventListener('click', maskToggle);
  addCard.querySelector('.element__item').addEventListener('click', openPhoto);
  addCard.querySelector('.element__delete').addEventListener('click', deleteCard);
  return addCard;
}

initialCards.map(renderElements); // новый массив

function renderElements(item) { //// методы
  const addCard = elementCard(item);
  cardElements.prepend(addCard); // вставка новой картинки в начало
}

// функция добавления фото из формы
function addNewCardImg(evt) {
  evt.preventDefault();
  const titleInput = evt.currentTarget.querySelector ('.popup__input_title').value; 
  const linkInput = evt.currentTarget.querySelector ('.popup__input_link').value;
  const newInitialCards = elementCard ({name: titleInput, link: linkInput});
  cardElements.prepend(newInitialCards);
  console.log(newInitialCards);
  closePopupAdd(popupCards);
  evt.currentTarget.reset();
  saveCard.setAttribute('disabled', 'disabled');
}

// функция открытия и закрытия попапа
function popupToggle(popup) {
  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')) {
    document.addEventListener('keydown', closePopupEsc);
  } else {
    document.removeEventListener('keydown', closePopupEsc);
  }
}

// функция закрытия попапа при клике на esc
function closePopupEsc(evt) {
  const currentPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    popupToggle(currentPopup);
  }
}
////////////////////////////////// ОТКРЫТИЕ КАРТИНКИ ////////////////////////////////////////
//Функия открытия формы картинка
function openPopupImg() {
  popupImageModal.classList.add('popup_opened');
  }

// Функция закрытие формы картинка
function closePopupImg() {
  popupImageModal.classList.remove('popup_opened');
}

// функция открытия фотографии для просмотра 
function openPhoto (evt) {
  openPopupImg(popupImageModal);
  fotoPopupFull.src = evt.target.src;
  fotoPopupFull.alt = evt.currentTarget.alt;
  fotoPopupTxt.textContent = evt.currentTarget.alt;
}
////////////////////////////////// ЛАЙК //////////////////////////////////////////////////////
function maskToggle(evt) {
  evt.target.classList.toggle('element__mask_active'); 
}
///////////////////////////////УДАЛЕНИЕ КАРТИНКИ/////////////////////////////////////////////
function deleteCard(evt) {
  const deleteFoto = evt.currentTarget.closest('.element');
  deleteFoto.remove();
}
/////////////////////////// РЕГИСТРАЦИЯ ОТРАБОТЧИКОВ ////////////////////////////////////////
popupOpenBtn.addEventListener('click', openPopup); // открыть
popupCloseBtn.addEventListener('click', closePopup); // закрыть
formEdit.addEventListener('submit', formSubmitHandler); //отправка формы редактивание профиля

imagePopupClose.addEventListener('click', closePopupImg); // закрыть изображение

popupAddOpen.addEventListener('click', openPopupAdd); // открыть ФОРМА ДОБАВЛЕНИЯ КАРТИНОК
popupAddClous.addEventListener('click', closePopupAdd); // закрыть ФОРМА ДОБАВЛЕНИЯ КАРТИНОК
popupAddCard.addEventListener('submit', addNewCardImg); // отправка формы добавление новой карточки