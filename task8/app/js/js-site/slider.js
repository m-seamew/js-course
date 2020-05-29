//Model
const container = document.querySelector('.slider__group');
const sliderMainClass = 'slider';
const slideClass = 'slider__slide';
const slideClassActive = '_active';
const sliderContainer = 'slider__container';

let slides = [];
let initialization = init(sliderMainClass, slideClass, slides, sliderContainer);

//Инициация слайдера, сбор данных, создание слайдов.
function init(slider, slideClass, slideObjArr, sliderContainer) {
  let images = [...document.querySelectorAll(`.${slider} > *> * > .${slideClass}`)];

  let bgUrl = images.map(function (el) {
    let url = window.getComputedStyle(el).backgroundImage;

    let inner = el.innerHTML;
    console.log(inner);
    let active = false;
    el.classList.contains('_active') == true ? active = true : null;
    let item = [url, active, inner]
    return item;
  });

  bgUrl.map(function (el, index) {
    let width = document.querySelector(`.${sliderContainer}`).clientWidth;
    slideObjArr.push({
      slider: `${slider}`, id: index, url: el[0], transform: `translateX(${-index * width}px)`, active: el[1], inner: el[2]
    })
  })
  return slideObjArr;
}


//Клик влево
function clickLeft(slidesData) {

  let length = slidesData.length;

  let newActiveItem = slidesData.find(el => el.active == true)
  slidesData[newActiveItem.id].active = false;

  if (newActiveItem.id >= 1) {
    slidesData[newActiveItem.id - 1].active = true;

  } else {
    slidesData[length - 1].active = true;
  };

  renderSlider(sliderMainClass, slideClass, slideClassActive, initialization, container);
}

//Клик вправо
function clickRight(slidesData) {

  let length = slidesData.length;

  let newActiveItem = slidesData.find(el => el.active == true)
  slidesData[newActiveItem.id].active = false;

  console.log(newActiveItem.id)
  if (newActiveItem.id + 1 < length) {
    slidesData[newActiveItem.id + 1].active = true;

  } else {
    slidesData[0].active = true;
  };

  renderSlider(sliderMainClass, slideClass, slideClassActive, initialization, container);
}



//Перетаскивание
let change = 0;

function dragAndDrop(changeX, res) {
  let arr = document.querySelector('.slider__group');
  arr.style.transform = `translateX(${(+res[0] - changeX)}px)`;

}

function mouseMove(e, res) {
  document.querySelector('.slider__container').onmousemove = (event) => {
    change = e - event.pageX;
    dragAndDrop(change, res);
    console.log(change);
    return change;
  }
}

document.querySelector('.slider__container').onmousedown = (event) => {
  let e = event.pageX;
  document.querySelector('.slider__group').style.transition = "transform 0s";
  let mask = /(-\d+)|\d+/
  let res = document.querySelector('.slider__group').style.transform.match(mask);

  change = mouseMove(e, res);
}

document.querySelector('.slider__container').onmouseup = function () {
  let previous = document.querySelector('.slider__group');

  document.querySelector('.slider__container').onmousemove = null;

  if (change < -100) {
    clickLeft(initialization);

  }
  else {
    renderSlider(sliderMainClass, slideClass, slideClassActive, initialization, container);
  }
  if (change > 100) {
    clickRight(initialization);
  } else {
    renderSlider(sliderMainClass, slideClass, slideClassActive, initialization, container);
  }
}


//View
renderSlider(sliderMainClass, slideClass, slideClassActive, initialization, container);


function renderSlider(sliderName, slideClass, slideClassActive, slidesData, container) {
  document.querySelector('.slider__group').style.transition = "transform 1s";
  container.innerHTML = slidesData.map(el => {
    if (el.active == true && el.slider == sliderName) {
      container.style.transform = el.transform
      return `<div class="${slideClass} ${slideClassActive}" data-id=${el.id}>${el.inner}</div>`;
    }
    else {
      return `<div class="${slideClass}" data-id=${el.id}>${el.inner}</div>`;
    }
  }).join('');
}

//Controller 



document.querySelector('.slider__left').onclick = () => {
  let result = clickLeft(initialization);
}

document.querySelector('.slider__right').onclick = () => {
  let result = clickRight(initialization);
}






