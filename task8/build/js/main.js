
//Cтруктура данных
/*
let listData = [
  {
    id: 0,
    name: 'Task1',
    isDone: false,
  },
  {
    id: 1,
    name: 'Task2',
    isDone: false,
  },
  {
    id: 2,
    name: 'Task3',
    isDone: false,
  }
];

//Рендер вывода
function render(data) {
  const list = document.querySelector('.todo-app');
  list.innerHTML = data.map(item => {
    let className = item.isDone ? 'class="todo-app__list--done todo-app__list"' : 'class="todo-app__list"';
    return `<li ${className} data-id=${item.id}>${item.name}</li>`;
  }).join('');
}


//Выполнение заданий, отмена выбора
function onTodoClick(event) {

  const id = +event.target.dataset.id;

  listData.forEach(item => item.id === id ? item.isDone = !item.isDone : null);

  render(listData);
}

document.querySelector('.todo-app').addEventListener('click', onTodoClick);
render(listData);


//Выполнить все
function allDone() {

  listData.forEach(item => item.isDone == false ? item.isDone = !item.isDone : null);

  render(listData);
}

document.querySelector('.todo-app__all-done').addEventListener('click', allDone);


//Отменить все
function allClear() {
  listData.forEach(item => item.isDone == true ? item.isDone = !item.isDone : null);

  render(listData);
}


document.querySelector('.todo-app__all-clear').addEventListener('click', allClear);


//Добавить новый
function addTask() {

  let taskName = document.querySelector('.todo-app__input-name').value;
  let tempId = listData.length;


  if (taskName.replace(/\s+/, '') != '') {
    listData.unshift({ id: tempId, name: taskName, isDone: false, });
    document.querySelector('.todo-app__input-name').value ='';
  }
  else { 
    document.querySelector('.todo-app__input-name').value ='';
    document.querySelector('.todo-app__input-name').placeholder = 'Введите название таска';
  }
  render(listData);
  console.log(listData);
}

document.querySelector('.todo-app__accept-newtask').addEventListener('click', addTask);

*/

//transform: translateX(-100%);



//Model
const container = document.querySelector('.slider__group');
const sliderMainClass = 'slider';
const slideClass = 'slider__slide';
const slideClassActive = '_active';

let slides = [];
let initialization = init(sliderMainClass, slideClass, slides);


function init(slider, slideClass, slideObjArr) {
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
    slideObjArr.push({
      slider: `${slider}`, id: index, url: el[0], transform: `translateX(${-index * 100}%)`, active: el[1], inner: el[2]
    })
  })
  return slideObjArr;
}

function clickLeft(slidesData) {

  let length = slidesData.length;

  let newActiveItem = slidesData.find(el => el.active == true)
  slidesData[newActiveItem.id].active = false;

  if (newActiveItem.id >= 1) {
    slidesData[newActiveItem.id - 1].active = true;

  } else {
    slidesData[length - 1].active = true;
    console.log('hey');
  };

  renderSlider(sliderMainClass, slideClass, slideClassActive, initialization, container);
}

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




function dragAndDrop(changeX) {
  let previous = document.querySelector('.slider__group');
  previous.style.position = "relative";
  previous.style.left = `${-changeX}px`;
  
}


let change = 0;
document.querySelector('.slider__container').onmousedown = (event) => {
  let e = event.pageX;
  change = mouseMove(e);

}


function mouseMove(e) {
  document.querySelector('.slider__container').onmousemove = (event) => {
    change = e - event.pageX;
    dragAndDrop(change);
    console.log(change); 
    return change;
    
  }
}

document.querySelector('.slider__container').onmouseup = function () {
  let previous = document.querySelector('.slider__group');

  document.querySelector('.slider__container').onmousemove = null;
  // document.querySelector('.slider__container').onmouseup = null;
  if (change < -150) {
    clickLeft(initialization);
  }
  else{
    previous.style.position = "";
    previous.style.left = `0px`;
  }
  if (change > 150) {
    clickRight(initialization);
  }
  else{
    previous.style.position = "";
    previous.style.left = `0px`;
  }
  //previous.style.transitionDuration = "0s";
}


//View
renderSlider(sliderMainClass, slideClass, slideClassActive, initialization, container);


function renderSlider(sliderName, slideClass, slideClassActive, slidesData, container) {

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

//document.querySelector('.slider__left').addEventListener('click', {handleEvent: clickLeft, slidesData: initialization});

document.querySelector('.slider__left').onclick = () => {
  let result = clickLeft(initialization);
}

document.querySelector('.slider__right').onclick = () => {
  let result = clickRight(initialization);
}