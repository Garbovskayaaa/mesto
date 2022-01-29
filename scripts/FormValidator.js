export default class FormValidator {
    constructor (selector, onSubmit) {
        this._selector = selector;
    }

    _getTemplate() {
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.popup__form')
            .clonrNode(true)
    }

    _handelSubmit = () => {
        const imput = this._element.querySelector('.popup__input');
        const value = imput.value
        e.preventDefault();
        onSubmit(value);
    }


    getView() {
        this._element = this._getTemplate();
        this._element.addEventListener('submit', this._handelSubmit)

        return this._element
    }
}