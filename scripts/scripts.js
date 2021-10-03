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


//Шесть карточек «из коробки»
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Отработчик открытие - добавление картинки
popupOpenCard.onclick = function () {
  popupCard.classList.add('popup_opened');
}

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

// Лайк
let heart = document.querySelectorAll('.element__mask');

heart.onclick = function (evt) {  
  evt.target.classList.toggle('element__mask_active');
};

// зарегистрировать обработчик события - редактирование профиля
popupOpenBtn.addEventListener('click', openPopup); // открыть
popupCloseBtn.addEventListener('click', closePopup); // закрыть


formEdit.addEventListener('submit', formSubmitHandler); //отправка формы

