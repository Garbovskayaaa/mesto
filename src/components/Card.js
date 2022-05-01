export default class Card {
  constructor(data, cardSelector, {handleCardClick, handleCardDelete}) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._cardId = data._id;
    console.log(this._cardId)
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;

    this._element = this._getTemplate();
    this._elementCard = this._element.querySelector('.element__item');
    this._elementDelete = this._element.querySelector('.element__delete');
    this._elementConteiner = this._element.querySelector('.element__like-container');
    this._elementMask = this._element.querySelector('.element__mask');
  }

  _getTemplate() {
    // здесь выполним все необходимые операции, чтобы вернуть разметку Работа с шаблоном разметки
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  _setEventListeners () {
    this._elementDelete.addEventListener('click', () => this._handleCardDelete(this._cardId));
    this._elementMask.addEventListener('click', this._handleClickLike);
    this._elementCard.addEventListener('click', this._openImagePopup);
}

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._elementCard.src = this._link;
    this._elementCard.alt = this._name;
    this._element.querySelector('.element__suptitle').textContent = this._name;
    // this._elementNumber.textContent = this._cardSelector;
    this._setEventListeners();
    this._setLikes();
    return this._element;
  }

  _handleClickLike = () => {
    // Лайк
    this._elementMask.classList.toggle('element__mask_active');
  };

  _setLikes() {
    const likeElement = this._element.querySelector('.element__like-number')
    likeElement.textContent = this._likes.length
  }

  deleteCard() {
    // удаление картинки
    this._element.remove();
    this._element = null;
  };

  _openImagePopup = () => {
    // открываем картинку
    this._handleCardClick(this._name, this._link);
  };

  // likesCounterUpdate(data) {
  //   this._countLikeElement.textContent = data.length;
  // }

  // _toggleLikeState() {
  //   if (this._checkUserLike()) {
  //     this.setLike();
  //   } else {
  //     this.unsetLike();
  //   }
  // }

  // _checkUserLike() {
  //   return this._likes.some((item) => item._id === this._currentUserId);
  // }
}