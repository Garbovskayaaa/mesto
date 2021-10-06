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
function openPopup() {
  popupCards.classList.add('popup_opened');
  }

// Функция закрытие формы
function closePopup() {
  popupCards.classList.remove('popup_opened');
}

//////////////////////////////////ДОБАВЛЯЕМ НОВЫЕ КАРТИНКИ////////////////////////////////////////
const photos = document.querySelector('.photos'); // основная секция section class="photos"
const elementsContainer = photos.querySelector('.elements'); // ul class="elements"
const addButton = popupCards.querySelector('.popup__submit'); //Кнопка сохранения button type="submit"
//////////////// const resetButton = photos.querySelector('.input__btn_action_reset');
//////////////// const noSongsElement = photos.querySelector('.no-songs');

function addCard (textValue, urlValue) {
  const trackContainer = document.createElement('li');
  trackContainer.classList.add('element');
  const artistElement = document.createElement('h4');
  artistElement.classList.add('song__artist');
  artistElement.textContent = artistValue; 
  
  const titleElement = document.createElement('h4');
  titleElement.classList.add('song__title');
  titleElement.textContent = titleValue;
  
  const likeButtonElement = document.createElement('button');
  likeButtonElement.classList.add('song__like');

  songsContainer.insertAdjacentHTML('beforeend', `
    <div class="song">
      <h4 class="song__artist">${artistValue}</h4>
      <p class="song__title">${titleValue}</p>
      <button class="song__like"></button>
    </div>
  `);
}





popupAddOpen.addEventListener('click', openPopup); // открыть
popupAddClous.addEventListener('click', closePopup); // закрыть
