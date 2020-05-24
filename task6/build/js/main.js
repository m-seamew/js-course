//Homework 6


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
  r = Math.floor(Math.random() * (256));
  g = Math.floor(Math.random() * (256));
  b = Math.floor(Math.random() * (256));
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
// Task 2

function randomIncl(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randEl(min, max) {
  let a = randomIncl(min, max);
  let b = randomIncl(min, max);
  let ans = [a,b];
  return ans;
}


function randomMath() {

  let field = document.querySelector('.input__label--math');
  let result;
  let variables;

  switch (randomIncl(0, 3)) {
    //Деление
    case 0:
      variables = randEl(10, 100);
      result =  variables[0] / variables[1];

      variables[0] % variables[1] != 0 ? result = Number( result.toFixed(1) ) : null;
      field.innerText = `Математическое уравнение: ${ variables[0] } / ${ variables[1] }`;
      return result;

    //Умножение
    case 1: 
      variables = randEl(2, 30);
      result =  variables[0] * variables[1];
      field.innerText = `Математическое уравнение: ${ variables[0] } * ${ variables[1] }`;
      return result;
    
    //Вычетание
    case 2: 
      variables = randEl(10, 100);

      variables[1] >= variables[0] ? variables.reverse() : null;
 
      result =  variables[0] - variables[1];
      field.innerText = `Математическое уравнение: ${ variables[0] } - ${ variables[1] }`;
    return result;
    

    //Добавление
    case 3: 
      variables = randEl(10, 100);
      result =  variables[0] + variables[1];
      field.innerText = `Математическое уравнение: ${ variables[0] } + ${ variables[1] }`;
      return result;
  }
}

//Инициализирование функции и создание математического выражения для пользователя при загрузке страницы
let result = randomMath();

//Вызов обработчика 
document.querySelector('.task2--button').onclick = () => {
  let ans = document.querySelector('.input-math').value;
  let message = document.querySelector('.task2--cheack');

  if (ans != null) {
    if (result == ans) {
     result = randomMath();
     message.innerText ="Верно!";
    }
    else {
      message.innerText ="Попробуйте еще!";
    }
  }
}
//Task 3
function checkInput(str) {
  let string = str.value;
  let arrString = string.split('');
  let strLength = arrString.length;
  let mask = /\d+/g;

  //Флаг ошибки ввода для отображеия подсказки
  let error = false;

  let errorMatches = [];
  errorMatches = string.match(mask);

  if (errorMatches != null) {

    error = true;
 
    errorMatches.forEach(element => {

      let tempIndex = string.indexOf(element);
      let indexLength = element.length;

      strLength >= tempIndex + indexLength ? arrString.splice(tempIndex,indexLength) : null;
      string = arrString.join('');

    });

  }

  let result = [string, error];
  return result;
}


document.querySelector('.input-text').oninput = () => {
  let string = document.querySelector('.input-text');
  let result = checkInput(string);

  string.value = result[0];
  
  result[1] == true ? document.querySelector('.input__label--text').innerHTML = 'Введите ваше имя<span class="input__span">*Нельзя использовать цифры</span>': null;
  
};