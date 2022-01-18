const popupImage = document.querySelector('.popup__foto');
const popupElement = document.querySelector('.popup_type_image');
const popupCloseButton = document.querySelector('.popup__close');


export default class Card {
  constructor (name, link) {
    this._link = link;
    this._name = name;
  }

 // здесь выполним все необходимые операции, чтобы вернуть разметку Работа с шаблоном разметки
  _getTemplate() {
  // забираем разметку из HTML и клонируем элемент
    const cardElement = document
    .querySelector('.template-card')
    .content
    .querySelector('.element')
    .cloneNode(true);

  // вернём DOM-элемент карточки
    return cardElement;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    // Добавим данные
    this._element.querySelector('.element__item').src = this._link;
    this._element.querySelector('.element__suptitle').textContent = this._name;
  
    return this._element; 
  }

  _handleOpenPopup() {
    popupImage.src = this._link;
    popupElement.classList.add('popup_opened');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_opened');
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }
}