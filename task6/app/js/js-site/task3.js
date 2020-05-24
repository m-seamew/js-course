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