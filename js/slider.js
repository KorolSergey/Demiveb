let offsetSlider = 0;

const btnPrev = document.querySelector('.master__prev-new');
const btnNext = document.querySelector('.master__next-new');
/* const contentWrapper = document.querySelector('.masters__content');
 */
const container = document.querySelector('.masters__container');
const sliderWrapper = document.querySelector('.masters__slider-wrapper');


btnNext.addEventListener('click', () => {
    offsetSlider += 1170;
    if (offsetSlider > 2340) {
        offsetSlider = 0;
    }
    sliderWrapper.style.left = -offsetSlider + 'px';
});

btnPrev.addEventListener('click', () => {
    offsetSlider -= 1170;
    if (offsetSlider < 0) {
        offsetSlider = 2340;
    }
    sliderWrapper.style.left = -offsetSlider + 'px';
});