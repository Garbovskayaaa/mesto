// Находим форму в DOM - редактирование профиля
const popup = document.querySelector('.popup');

// Находим кнопки - редактирование профиля
let popupOpenBtn = document.querySelector('.profile__edit-button');
let popupCloseBtn = popup.querySelector('.popup__close');

// Находим поля формы в DOM - редактирование профиля 
let NameInput = popup.querySelector('.popup__input_user_name');
let JobInput = popup.querySelector('.popup__input_user_job');
let NameProfile = document.querySelector('.profile__name');
let JobProfile = document.querySelector('.profile__job');

// Функция открытие - редактирование профиля
function popupOpen() {
  popup.classList.add('popup_opened');
  NameInput.value = NameProfile.textContent;
  JobInput.value = JobProfile.textContent;
}

// Функция закрытие - редактирование профиля
function popupClose() {
  popup.classList.remove('popup_opened');
}

// Функция Обработчик «отправки» формы - редактирование профиля
function formSubmitHandler(evt) {
  evt.preventDefault(); 
  let popupName = NameInput.value;
  let popupJob = JobInput.value;
  NameProfile.textContent = popupName;
  JobProfile.textContent = popupJob;
  popupClose()
}

// зарегистрировать обработчик события - редактирование профиля
popupOpenBtn.addEventListener('click', popupOpen); // открыть
popupCloseBtn.addEventListener('click', popupClose); // закрыть
popup.addEventListener('submit', formSubmitHandler); //отправка формы