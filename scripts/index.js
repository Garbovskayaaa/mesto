import FormValidator from './FormValidator.js';
import Card from './Card.js';


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

// универсальный попап открытие
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};

// функция закрытия попапа при клике на esc
export function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
    }
};

initialCards.forEach((item) => {
  const card = new Card (item.name, item.link);
  const cardElement = card.generateCard();

  document.querySelector('.elements').append(cardElement);
});