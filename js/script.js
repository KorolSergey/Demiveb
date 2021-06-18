const popupCourses = document.querySelector('.detail__other-courses');
const hideButton = document.querySelector('.detail__hide-img');

hideButton.addEventListener('click', () => {
    popupCourses.classList.toggle('detail__hide-courses');
});