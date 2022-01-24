import { closePopupEsc, openPopup } from './index.js'; 

const popupImageModal = document.querySelector('.popup_type_image'); // картинка
const fotoPopupFull = document.querySelector('.popup__foto'); // картинка
const fotoPopupTxt = document.querySelector('.popup__foto-name'); // наименование картинки
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
  
  _handleClickLike = () => {
    // Лайк
    this._element.querySelector('.element__mask').classList.toggle('element__mask_active');
  }

  _removeElement = () => {
    // удаление картинки
    this._element.remove();
  }

  _handleOpenPopup = (evt) => {
    fotoPopupFull.src = this._link;
    fotoPopupFull.alt = evt.currentTarget.alt;
    fotoPopupTxt.textContent = this._name;
    popupImageModal.classList.add('popup_opened');
  }

  _handleClosePopup = () => {
    if (evt.key === 'Escape') {
    popupImageModal.classList.remove('popup_opened')
    document.removeEventListener('keydown', closePopupEsc);
    }
  }

  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    const elementCard = this._element.querySelector('.element__item');
    // Добавим данные
    elementCard.src = this._link;
    this._element.querySelector('.element__suptitle').textContent = this._name;
    this._element.querySelector('.element__delete').addEventListener('click', this._removeElement);
    this._element.querySelector('.element__mask').addEventListener('click', this._handleClickLike);
    elementCard.addEventListener('click', this._handleOpenPopup);


    return this._element; 
  }
  _setEventListeners() {
    popupCloseButton.addEventListener('click', this._handleClosePopup);
  }
}

