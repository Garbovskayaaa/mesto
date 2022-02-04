export default class Card {
  constructor(data) {
    this._link = data.link;
    this._name = data.name;
  };

  _getTemplate() {
    // здесь выполним все необходимые операции, чтобы вернуть разметку Работа с шаблоном разметки
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
      .querySelector(".template-card")
      .content
      .querySelector(".element")
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  };

  _handleClickLike = () => {
    // Лайк
    this._element
      .querySelector(".element__mask")
      .classList.toggle("element__mask_active");
  };

  _removeElement = () => {
    // удаление картинки
    this._element.remove();
  };

  _handleOpenPopup = (evt) => {
    const popupFoto = document.querySelector(".popup__foto");
    popupFoto.src = this._link;
    popupFoto.alt = evt.currentTarget.alt;
    document.querySelector(".popup__foto-name").textContent = this._name;
    document.querySelector(".popup_type_image").classList.add("popup_opened");
  };

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    const elementCard = this._element.querySelector(".element__item");
    // Добавим данные
    elementCard.src = this._link;
    elementCard.addEventListener("click", this._handleOpenPopup);
    this._element.querySelector(".element__suptitle").textContent = this._name;
    this._element.querySelector(".element__delete").addEventListener("click", this._removeElement);
    this._element.querySelector(".element__mask").addEventListener("click", this._handleClickLike);
    return this._element;
  };
}
