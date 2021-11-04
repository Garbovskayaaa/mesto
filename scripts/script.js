///////////////////////////////объявление переменных//////////////////////////////////
// Находим форму в DOM - редактирование профиля
const popupEdit = document.querySelector('.popup_type_edit'); // модал edit профиль
const formEdit = popupEdit.querySelector('.popup__edit-profile'); // форма ввода edit профиль
// Находим кнопки - редактирование профиля
const popupOpenBtn = document.querySelector('.profile__edit-button'); // кнопка открытия edit профиль
const popupCloseBtn = popupEdit.querySelector('.popup__close'); // кнопка закрытия edit профиль
// Находим поля формы в DOM - редактирование профиля
const nameInput = popupEdit.querySelector('.popup__input_user_name'); // форма ввода имя user
const jobInput = popupEdit.querySelector('.popup__input_user_job'); // форма ввода занятие user
const nameProfile = document.querySelector('.profile__name'); // главная страница имя user
const jobProfile = document.querySelector('.profile__job'); // главная страница занятие user
// Открытие формы добавление картинок
const popupCards = document.querySelector('.popup_type_add'); // модал добавления new карточек
const popupAddOpen = document.querySelector('.profile__add-button'); // кнопка открытия добавления new карточек
const popupAddClous = popupCards.querySelector('.popup__close'); // кнопка закрытия добавления new карточек
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
// функция закрытия попапа при клике на esc
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
    }
}

// универсальный попап открытие
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// универсальный попап открытие
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

// Функция открытие - редактирование профиля
function openPopupProfile() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEdit);
}
// Функция Обработчик «отправки» формы - редактирование профиля
function submitFormHandler(evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEdit);
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

function createCard(item) {
  const addCard = cardTemplateElement.content.cloneNode(true);
  addCard.querySelector('.element__suptitle').textContent = item.name;
  addCard.querySelector('.element__item').src = item.link;
  addCard.querySelector('.element__item').alt = item.name;
  addCard.querySelector('.element__mask').addEventListener('click', toggleLike);
  addCard.querySelector('.element__item').addEventListener('click', openPhoto);
  addCard.querySelector('.element__delete').addEventListener('click', deleteCard);
  return addCard;
}

initialCards.map(renderElements); // новый массив

function renderElements(item) { //// методы
  const addCard = createCard(item);
  cardElements.prepend(addCard); // вставка новой картинки в начало
}

// функция добавления фото из формы
function addNewCardImg(evt) {
  evt.preventDefault();
  const titleInput = evt.currentTarget.querySelector ('.popup__input_title').value; 
  const linkInput = evt.currentTarget.querySelector ('.popup__input_link').value;
  const newInitialCards = createCard ({name: titleInput, link: linkInput});
  cardElements.prepend(newInitialCards);
  console.log(newInitialCards);
  closePopup(popupCards);
  evt.currentTarget.reset();
}

// функция открытия фотографии для просмотра 
function openPhoto (evt) {
  fotoPopupFull.src = evt.target.src;
  fotoPopupFull.alt = evt.currentTarget.alt;
  fotoPopupTxt.textContent = evt.currentTarget.alt;
  openPopup(popupImageModal);
}

////////////////////////////////// ЛАЙК //////////////////////////////////////////////////////
function toggleLike(evt) {
  evt.target.classList.toggle('element__mask_active'); 
}

///////////////////////////////УДАЛЕНИЕ КАРТИНКИ/////////////////////////////////////////////
function deleteCard(evt) {
  const deleteFoto = evt.currentTarget.closest('.element');
  deleteFoto.remove();
}

/////////////////////////// РЕГИСТРАЦИЯ ОТРАБОТЧИКОВ ////////////////////////////////////////
popupOpenBtn.addEventListener('click', () => openPopupProfile(popupEdit));
popupCloseBtn.addEventListener('click', () => closePopup(popupEdit));
formEdit.addEventListener('submit', submitFormHandler);

popupAddOpen.addEventListener('click', () => openPopup(popupCards));
popupAddClous.addEventListener('click', () => closePopup(popupCards));
popupAddCard.addEventListener('submit', addNewCardImg); // отправка формы добавление новой карточки

fotoPopupFull.addEventListener('click', () => openPopup(popupImageModal));
imagePopupClose.addEventListener('click', () => closePopup(popupImageModal));