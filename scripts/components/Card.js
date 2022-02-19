export default class Card {
  constructor(link, name, cardSelector, { handleCardClick }) {
    this._link = link;
    this._name = name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._elementCard = this._element.querySelector('.element__item');
  }

  _getTemplate() {
    // здесь выполним все необходимые операции, чтобы вернуть разметку Работа с шаблоном разметки
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
      .querySelector('.template-card')
      .content.querySelector('.element')
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  _handleClickLike = () => {
    // Лайк
    this._element.querySelector('.element__mask').classList.toggle('element__mask_active');
  };

  _removeElement = () => {
    // удаление картинки
    this._element.remove();
    this._element = null;
  };
  
  _openImagePopup = () => {
    // открываем картинку
    this._handleCardClick(this._name, this._link);
  };

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._elementCard.src = this._link;
    this._elementCard.alt = this._name;
    this._element.querySelector('.element__suptitle').textContent = this._name;
    this._element.querySelector('.element__delete').addEventListener('click', this._removeElement);
    this._element.querySelector('.element__mask').addEventListener('click', this._handleClickLike);
    this._elementCard.addEventListener('click', this._openImagePopup);
    return this._element;
  }
}
