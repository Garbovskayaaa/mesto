// отвечает за открытие и закрытие попапов
// Принимает единственный параметр — селектор попапа.
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    // this._popupCloseButton = this._popup.querySelector('.popup__close');
    this._submitButton = this._popup.querySelector('.popup__button');
  };
// публичные методы open и close, которые отвечают за открытие и закрытие попапа.
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_opened');
  };
// приватный метод _handleEscClose, закрытие попапа клавишей Esc.
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  };
// публичный метод setEventListeners, 
// добавляет слушатель клика иконке закрытия попапа. 
// Модальное окно также закрывается при клике на оверлей.
  setEventListeners() {
    this._popupCloseButton = this._popup.querySelector('.popup__close');

    this._popupCloseButton.addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) this.close();
    })
  }

  loadingMessage(loading) {
    if (loading === true) {
      this._submitButton.textContent = 'Сохранение...'
    }
    else {
      this._submitButton.textContent = 'Сохранить'
    }
  }
}