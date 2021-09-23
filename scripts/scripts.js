const popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.menu_open_popup');
let popupCloseBtn = popup.querySelector('.popup__close');

let NameInput = popup.querySelector('.popup__input_username');
let JobInput = popup.querySelector('.popup__input_job');
let NameProfile = document.querySelector('.profile__name');
let JobProfile = document.querySelector('.profile__job');


function popupToggle() {
  popup.classList.toggle('popup_opened');
  NameInput.value = NameProfile.textContent;
  JobInput.value = JobProfile.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault(); 
  NameProfile.textContent = NameInput.value;
  JobProfile.textContent = JobInput.value;
}

popupOpenBtn.addEventListener('click', popupToggle);
popupCloseBtn.addEventListener('click', popupToggle);
popup.addEventListener('submit', formSubmitHandler); //отправка формы