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