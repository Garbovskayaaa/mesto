// Находим форму в DOM - редактирование профиля
const popup = document.querySelector('.popup');
const formEdit = popup.querySelector('.popup__edit-profile');

// Находим кнопки - редактирование профиля
let popupOpenBtn = document.querySelector('.profile__edit-button');
let popupCloseBtn = popup.querySelector('.popup__close');

// Находим поля формы в DOM - редактирование профиля 
let nameInput = popup.querySelector('.popup__input_user_name');
let jobInput = popup.querySelector('.popup__input_user_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

// Функция открытие - редактирование профиля
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

// Функция закрытие - редактирование профиля
function closePopup() {
  popup.classList.remove('popup_opened');
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