//Task1

function colorPlate(arr, maxLength) {
  if (maxLength != 0) {
    let ran = random(0, maxLength);
    arr[ran].classList.add('_active');
    arr[ran].style.background = randomColor();
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
  let r = Math.floor(Math.random() * (256));
  let g = Math.floor(Math.random() * (256));
  let b = Math.floor(Math.random() * (256));
  let arr = `rgb(${ r }, ${ g }, ${ b })`;
  return arr;
}


//Глобальные переменные планировщика для остановки
let timeTable; 
let time; 

function colorPlateMain() {
    time = setTimeout(function hundredTimes() {

    let arr = [...document.querySelectorAll('.container__task1-item:not(._active)')];
    let maxLength = arr.length;
    colorPlate(arr, maxLength);

    maxLength != 0 ? time = setTimeout(hundredTimes, 1000) : clearInterval(time);

  }, 1000)
}

colorPlateMain(); //Автоматический запуск при открытие страницы

//Пауза
document.querySelector('.task1-pause').onclick = () => {
  clearInterval(time);
}

//Продолжить
document.querySelector('.task1-start').onclick = () => {
  clearInterval(time);
  colorPlateMain();
}

//Перезапуск
document.querySelector('.task1-restart').onclick = () => {
  clearInterval(time);

  let arr = [...document.querySelectorAll('.container__task1-item._active')];
  arr.forEach((elem) => {
    elem.classList.remove('_active');
    elem.style.background = "transparent";
  });
  
  colorPlateMain();
}

