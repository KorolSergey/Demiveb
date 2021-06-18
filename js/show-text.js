/* кнопка Подробнее */

const showBtn = document.querySelector('.about__show-button');
const showText = document.querySelector('.about__description-text-wrapper');

showBtn.addEventListener('click', () => {
    showText.classList.add('show');
    showBtn.style.display = 'none';
});