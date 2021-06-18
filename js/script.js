/* окно блока "Не пропусти" */

const popupCourses = document.querySelector('.detail__other-courses');
const hideButton = document.querySelector('.detail__hide-img');

hideButton.addEventListener('click', () => {
    popupCourses.classList.toggle('detail__hide-courses');
});



/* кнопка Подробнее */




const showBtn = document.querySelector('.about__show-button');
const showText = document.querySelector('.about__description-text-wrapper');

showBtn.addEventListener('click', () => {
    showText.classList.add('show');
    showBtn.style.display = 'none';
});