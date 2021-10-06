let heart = document.querySelector('.element__mask');

heart.onclick = function (event) {
    event.target.classList.toggle('element__mask_active');
};
