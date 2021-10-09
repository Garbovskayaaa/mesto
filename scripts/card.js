const newCard = document.querySelector('.popup__submit');

newCard.addEventListener('click', function () {
  const title = document.querySelector('.popup__input_title');
  const link = document.querySelector('.popup__input_link');

  addCard(title.value, link.value);
  renderHasCards();

  title.value = '';
  link.value = '';
});
  