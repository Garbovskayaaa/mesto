// // Открытие формы добавление картинок, объявление переменных
// const popupCards = document.querySelector('.popup__add'); // попап добавления новых карточек
// const popupAddOpen = document.querySelector('.profile__add-button'); //  добавления новых карточек
// const popupAddClous = document.querySelector('.popup__close'); // попап добавления новых карточек

// //Функия открытия формы
// function togglePopup(popup) {
//     popup.classList.add('popup_opened');
//   }

// function openPopup() {
//     togglePopup(popupCards);  
// }

// // Функция закрытие - редактирование профиля
// function closePopup() {
//   popup.classList.remove('popup_opened');
// }


// popupAddOpen.addEventListener('click', openPopup);
// popupAddClous.addEventListener('click', closePopup); // закрыть


// const listItem = document.createElement('li');


//   // popupFullScreenClose.addEventListener("click", () => toggleModal(popupFullScreen));
  
//   //Шесть карточек «из коробки»
// const initialCards = [
//     {
//       name: 'Байкал',
//       link: 'https://s00.yaplakal.com/pics/pics_original/2/7/8/4104872.jpg'
//     },
//     {
//       name: 'Дальний Восток',
//       link: 'https://rusmystery.ru/wp-content/uploads/2018/11/yaponskoe.jpgg'
//     },
//     {
//       name: 'Река Лена',
//       link: 'https://fotki.ykt.ru/albums/userpics/2015/09-29/dsc_3141.jpg'
//     },
//     {
//       name: 'Сахалин',
//       link: 'https://wallpapershome.ru/images/pages/pic_h/23351.jpg'
//     },
//     {
//       name: 'Приморье',
//       link: 'https://static.tildacdn.com/tild3137-3133-4037-b631-663832643431/45882029112_2981c7fe.jpg'
//     },
//     {
//       name: 'Кольский полуостров',
//       link: 'https://mtdata.ru/u3/photo2238/20197588453-0/original.jpg'
//     }
//   ];
//   addCards(initialCards);

// // function createCard(item) {
// //     const newCard = cardTemplate.content.cloneNode(true);
// //     newCard.querySelector(".element__suptitle").textContent = item.name;
// //     newCard.querySelector(".element__item").src = item.link;
// //     newCard.querySelector(".element__item").alt = item.name;
// //     // newCard.querySelector(".element__mask").addEventListener("click", likeToggle);
// //     // newCard.querySelector(".element__delete").addEventListener("click", deleteCard);
// //     // newCard.querySelector(".element__item").addEventListener("click", openPhoto);
// //     return newCard;
// //   }

//  // функция добавления карточек
//  function addCards(cards) {
//     const newCards = cards.map(createCard);
//     // elementsList.prepend(...newCards);
//   }
