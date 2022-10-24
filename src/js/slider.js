// const sliderLine = document.querySelector('.slider__line');
// const prev = document.querySelector('.slider-prev');
// const next = document.querySelector('.slider-next');
// let offset = 0;
//
// const scrollPrev = () => {
//     next.disabled = false;
//     if (offset === 400) {
//         prev.disabled = true;
//     }
//     offset -= 400;
//     sliderLine.style.left = -offset + 'px';
// };
// const scrollNext = () => {
//     prev.disabled = false;
//     if (offset === 1600) {
//         next.disabled = true;
//     }
//     offset += 400;
//     sliderLine.style.left = -offset + 'px';
// }
//
// prev.addEventListener('click', scrollPrev);
// next.addEventListener('click', scrollNext);

const images = document.querySelectorAll(".slider__img");
const sliderLine = document.querySelector(".slider__line");
const prev = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");
let count = 0;
let width;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((image) => {
    image.style.width = width + "px";
  });
  rollSlider();
}

init();
window.addEventListener("resize", init);

next.addEventListener("click", function () {
  prev.disabled = false;
  count++;
  if (count >= 5) {
    next.disabled = true;
  }
  rollSlider();
});

prev.addEventListener("click", function () {
  next.disabled = false;
  count--;
  if (count < 1) {
    prev.disabled = true;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}
