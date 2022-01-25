///////////////////////////////объявление переменных//////////////////////////////////
// Находим форму в DOM - редактирование профиля
const popupEdit = document.querySelector('.popup_type_edit'); // модал edit профиль
const formEdit = popupEdit.querySelector('.popup__edit-profile'); // форма ввода edit профиль
// Находим кнопки - редактирование профиля
const profileOpenBtn = document.querySelector('.profile__edit-button'); // кнопка открытия edit профиль
// Находим поля формы в DOM - редактирование профиля
const nameInput = popupEdit.querySelector('.popup__input_user_name'); // форма ввода имя user
const jobInput = popupEdit.querySelector('.popup__input_user_job'); // форма ввода занятие user
const nameProfile = document.querySelector('.profile__name'); // главная страница имя user
const jobProfile = document.querySelector('.profile__job'); // главная страница занятие user
// Открытие формы добавление картинок
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

////////////////////////////////////ФОРМА РЕДАКТИРОВАНИЯ ПРОФИЛЯ////////////////////////
// // функция закрытия попапа при клике на esc
// function closePopupEsc(evt) {
//   if (evt.key === 'Escape') {
//     const currentPopup = document.querySelector('.popup_opened');
//     closePopup(currentPopup);
//   }
// };

// // // универсальный попап открытие
// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupEsc);
// };

  // // // попап закрытия Оверлей/Крестик
  // popups.forEach((popup) => {
  //   popup.addEventListener('click', (evt) => {
  //     if (evt.target.classList.contains('popup_opened')) {
  //       closePopup(popup)
  //     }
  //     if (evt.target.classList.contains('popup__close')) {
  //       closePopup(popup)
  //     }
  //   })
  // });

// // универсальный попап закрытия
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupEsc);
// };

// Функция открытие - редактирование профиля
// function openPopupProfile() {
//   nameInput.value = nameProfile.textContent;
//   jobInput.value = jobProfile.textContent;
//   openPopup(popupEdit);
// };

// Функция Обработчик «отправки» формы - редактирование профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEdit);
};

//////////////////////////////////ДОБАВЛЯЕМ КАРТИНКИ//////////////////////////////////////
// function createCard(item) {
  // const addCard = cardTemplateElement.content.cloneNode(true);
  // const cardImage = addCard.querySelector('.element__item');
  // cardImage.src = item.link;
  // cardImage.alt = item.name;
  // addCard.querySelector('.element__suptitle').textContent = item.name;
  // addCard.querySelector('.element__mask').addEventListener('click', toggleLike);
  // cardImage.addEventListener('click', openPhoto);
  // addCard.querySelector('.element__delete').addEventListener('click', deleteCard);
  // return addCard;
// };

// initialCards.map(renderElements); // новый массив

function renderElements(item) { //// методы
  const addCard = createCard(item);
  cardElements.prepend(addCard); // вставка новой картинки в начало
};

// функция добавления фото из формы
function addNewCardImg(evt) {
  evt.preventDefault();
  const newCard = createCard ({name: titleInput.value, link: linkInput.value});
  cardElements.prepend(newCard);
  evt.currentTarget.reset();
  closePopup(popupCards);
};

// функция открытия фотографии для просмотра 
// function openPhoto (evt) {
//   fotoPopupFull.src = evt.target.src;
//   fotoPopupFull.alt = evt.currentTarget.alt;
//   fotoPopupTxt.textContent = evt.currentTarget.alt;
//   openPopup(popupImageModal);
// };

////////////////////////////////// ЛАЙК //////////////////////////////////////////////////////
// function toggleLike(evt) {
//   evt.target.classList.toggle('element__mask_active'); 
// };

///////////////////////////////УДАЛЕНИЕ КАРТИНКИ/////////////////////////////////////////////
// function deleteCard(evt) {
//   const deleteFoto = evt.currentTarget.closest('.element');
//   deleteFoto.remove();
// };

/////////////////////////// РЕГИСТРАЦИЯ ОТРАБОТЧИКОВ ////////////////////////////////////////
// profileOpenBtn.addEventListener('click', () => openPopupProfile(popupEdit));
// formEdit.addEventListener('submit', handleProfileFormSubmit);

// popupAddOpen.addEventListener('click', () => openPopup(popupCards));
// popupAddCard.addEventListener('submit', addNewCardImg); // отправка формы добавление новой карточки