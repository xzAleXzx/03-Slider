const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
  changeSlides('up');
});

downBtn.addEventListener('click', () => {
  changeSlides('down');
});

function changeSlides(direction) {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px`;

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px`;

  // console.log(activeSlideIndex * height);
}

document.onkeydown = key;

function key(e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    changeSlides('up');
  } else if (e.keyCode == '40') {
    changeSlides('down');
  }
}

function wheelHandler(event) {
  const e = event || window.event;
  const dy = e.wheelDeltaY || e.deltaY;
  // console.log(dy);
  if (dy < 0) {
    changeSlides('down');
  } else if (dy > 0) {
    changeSlides('up');
  }
}

window.addEventListener('wheel', wheelHandler);
