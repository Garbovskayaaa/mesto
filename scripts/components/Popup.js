export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  };

  open() {
    this._element.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  };

  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._element.classList.remove("popup_opened");
  };

  _handleEscClose() {
    if (evt.key === "Escape") {
      const popup = document.querySelector(".popup_opened");
      this.close();
    }
  };

  setEventListeners() {
    this._element.querySelector(".popup__close").addEventListener("click", function () {
      this.close();
    });

    this._element.addEventListener("mousedown", function (evt) {
      if (evt.target !== evt.currentTarget) {
        return;
      }
    })

    return Popup;
  };
}