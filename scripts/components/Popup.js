export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._popupCloseButton = document.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
  };

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupSelector.classList.remove('popup_opened');
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  setEventListeners() {
    this._popupCloseButton.addEventListener('click', () => {
      this.close();
    });
    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      };
      if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
    })
  }
}