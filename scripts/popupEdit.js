////////////////////////////////////ФОРМА РЕДАКТИРОВАНИЯ ПРОФИЛЯ////////////////////////////////////

// Находим форму в DOM - редактирование профиля
const popupEdit = document.querySelector('.popup__edit');
const formEdit = popupEdit.querySelector('.popup__edit-profile');

// Находим форму в DOM - добавление картинки
const popupCard = document.querySelector('.popup__add');
const popupOpenCard = document.querySelector('.profile__add-button');

// Находим кнопки - редактирование профиля
let popupOpenBtn = document.querySelector('.profile__edit-button');
let popupCloseBtn = popupEdit.querySelector('.popup__close');

// Находим поля формы в DOM - редактирование профиля
let nameInput = popupEdit.querySelector('.popup__input_user_name');
let jobInput = popupEdit.querySelector('.popup__input_user_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

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

// зарегистрировать обработчик события - редактирование профиля
popupOpenBtn.addEventListener('click', openPopup); // открыть
popupCloseBtn.addEventListener('click', closePopup); // закрыть
formEdit.addEventListener('submit', formSubmitHandler); //отправка формы

////////////////////////////////////ФОРМА ДОБАВЛЕНИЯ КАРТИНОК/////////////////////////////////////

// Открытие формы добавление картинок, объявление переменных
const popupCards = document.querySelector('.popup__add'); // попап добавления новых карточек
const popupAddOpen = document.querySelector('.profile__add-button'); //  добавления новых карточек
const popupAddClous = popupCards.querySelector('.popup__close'); // попап добавления новых карточек

//Функия открытия формы
function openPopupAdd() {
  popupCards.classList.add('popup_opened');
  }

// Функция закрытие формы
function closePopupAdd() {
  popupCards.classList.remove('popup_opened');
}

popupAddOpen.addEventListener('click', openPopupAdd); // открыть
popupAddClous.addEventListener('click', closePopupAdd); // закрыть


//////////////////////////////////ДОБАВЛЯЕМ КАРТИНКИ/////////////////////////////////////////////////

// (1) Добавление элементов из имеющегося массива
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

const cardElements = document.querySelector(".elements");
const cardTemplateElement = document.querySelector(".template-card");

function elementCard(item) {
  const addCard = cardTemplateElement.content.cloneNode(true);
  addCard.querySelector(".element__suptitle").textContent = item.name;
  addCard.querySelector(".element__item").src = item.link;
  addCard.querySelector(".element__item").alt = item.name;
  addCard.querySelector(".element__mask").addEventListener("click", maskToggle);
  // addCard.querySelector(".element__delete").addEventListener("click", deleteCard); /// нет такого
  addCard.querySelector(".element__item").addEventListener("click", openPhoto);
  return addCard;
}

function renderElements(item) { //// методы
  
  const addCard = elementCard(item);
  cardElements.prepend(addCard); // вставка новой картинки в начало
}
initialCards.map(renderElements); // новый массив


////////////////////////////////// ОТКРЫТИЕ КАРТИНКИ ////////////////////////////////////////////////

function openPhoto(event) {
  const link = event.target.currentSrc;
  const title = event.currentTarget.nextElementSibling.innerText;
  const alt = event.currentTarget.nextElementSibling.innerText;
  
  photoFull.src = link; 
  photoFullTitle.innerText = title;
  photoFullTitle.innerText = alt;
  
  togglePopup(popupPhoto);  
}

////////////////////////////////// ЛАЙК //////////////////////////////////////////////////////////////

function maskToggle(evt) {
  evt.target.classList.toggle("element__mask_active"); 
}


////////////////////////////////ДОБАВЛЕНИЕ КАРТИНКИ///////////////////////////////////////////////////
const newCard = document.querySelector('.popup__submit');

newCard.addEventListener('click', function () {
  const title = document.querySelector('.popup__input_title');
  const link = document.querySelector('.popup__input_link');

  addCard(title.value, link.value);
  renderHasCards();

  title.value = '';
  link.value = '';
});