let offset = 0;
const sliderLine = document.querySelector('.slider__line');
const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');

if (offset === 0) {
    prev.disabled = true;
}

if (offset === 2500) {
    next.disabled = true;
}

const scrollPrev = () => {
    offset -= 500;
    next.disabled = false;
    if (offset === 0) {
        prev.disabled = true;
    }
    sliderLine.style.left = -offset + 'px';
};

const scrollNext = () => {
    offset += 500;
    prev.disabled = false;
    if (offset === 2500) {
        next.disabled = true;
    }
    sliderLine.style.left = -offset + 'px';
}

document.querySelector('.slider__prev').addEventListener('click', scrollPrev);
document.querySelector('.slider__next').addEventListener('click', scrollNext);

