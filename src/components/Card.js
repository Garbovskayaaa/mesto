export default class Card {
  constructor(link, name, cardSelector, { handleCardClick }) {
    this._link = link;
    this._name = name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._elementCard = this._element.querySelector('.element__item');
    this._elementDelete = this._element.querySelector('.element__delete');
    this._elementConteiner = this._element.querySelector('.element__like-container');
    this._elementMask = this._element.querySelector('.element__mask');
    this._elementNumber = this._element.querySelector('.element__like-number');
  }

  _getTemplate() {
    // здесь выполним все необходимые операции, чтобы вернуть разметку Работа с шаблоном разметки
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }


  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._elementCard.src = this._link;
    this._elementCard.alt = this._name;
    this._element.querySelector('.element__suptitle').textContent = this._name;
    // this._elementNumber.textContent = this._cardSelector;
    this._setEventListeners();
    return this._element;
  }

  _handleClickLike = () => {
    // Лайк
    this._elementMask.classList.toggle('element__mask_active');
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

  likesCounterUpdate(data) {
    this._countLikeElement.textContent = data.length;
  }

  _toggleLikeState() {
    if (this._checkUserLike()) {
      this.setLike();
    } else {
      this.unsetLike();
    }
  }

  _checkUserLike() {
    return this._likes.some((item) => item._id === this._currentUserId);
  }

    _setEventListeners () {
      this._elementDelete.addEventListener('click', this._removeElement);
      this._elementMask.addEventListener('click', this._handleClickLike);
      this._elementCard.addEventListener('click', this._openImagePopup);
  }
}