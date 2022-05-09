export default class Card {
  constructor(data, cardSelector, {handleCardClick, handleCardDelete, handleLikeClick}) {
    this._link = data.link;
    this._name = data.name;    
    this._likes = data.likes;
    this._id = data.id;
    // console.log(this._id)
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeClick = handleLikeClick;

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
    this._elementDelete.addEventListener('click', () => this._handleCardDelete(this._id));
    this._elementMask.addEventListener('click', () => this._handleLikeClick(this._id));
    this._elementCard.addEventListener('click', this._openImagePopup);
}

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._elementCard.src = this._link;
    this._elementCard.alt = this._name;
    this._element.querySelector('.element__suptitle').textContent = this._name;
    this._setEventListeners();
    this.setLikes(this._likes);
    
    if(this._ownerId !== this._userId) {
      this._element.querySelector('.element__delete').style.display = 'none'
    }
    return this._element;
  }

  _fillLike = () => {
    this._elementMask.classList.add('element__mask_active');
  }

  _removeFeelLike  = () => {
    this._elementMask.classList.remove('element__mask_active');
  }

  isLiked = () => {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId)
    return userHasLikedCard
  }

  //принимает снаружи новые лайки
  setLikes(newLikes) {
    // console.log('newLikes', newLikes)
    this._likes = newLikes
    const likeElement = this._element.querySelector('.element__like-number')
    likeElement.textContent = this._likes.length

    //если среди лайков, найдется юзер у которого юзер.айди совпадает с вашим юзер.айди

    if(this.isLiked()) {
      this._fillLike()
    } else {
      this._removeFeelLike()
    }
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
}