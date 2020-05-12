// Заданиe 1
function task1() {
  let name = prompt('Как тебя зовут', 'Клиент');
  while ( name == null) {
    yearBirthday = prompt('Некоректный ввод. Как тебя зовут');
  }
  alert(`Здравствуйте, ${name}`);
}

//Задание 2
function task2() {
  const thisYear = 2020;
  let yearBirthday = prompt('Уточните год вашего рождения', 2020);
  while ( yearBirthday == null || yearBirthday < 0) {
    yearBirthday = prompt('Некоректный ввод. Уточните год вашего рождения');
  }
  let years = thisYear - (+yearBirthday);
  if(years <= 130){
  alert(`Вероятно, Вам ${years} полных лет`);}
  else{
    alert(`Вероятно, Вы вампир или другой представитель потусторонних сил и вам ${years} полных лет`); 
  }
}

//Задание 3
function task3() {
  let length = prompt('Укажите длину стороны квадрата, м');
  while (length == null || length <= 0) {
    length = prompt('Некоректный ввод. Укажите длину стороны квадрата, м');
  }
  let perimetr = length * 4;
  alert(`Периметр квадрата равен ${perimetr} м`);
}

//Задание 4
function task4() {
  let r = prompt('Укажите радиус круга, см');
  while (r == null || r <= 0) {
    r = prompt('Некоректный ввод. Укажите радиус круга, см');
  }
  let S = Math.PI * (r ** 2);
  alert(`Площадь круга ${S} см2`);
}

//Задание 5
function task5() {
  let l = prompt('Укажите расстояние между городами, км');
  let s = prompt('Укажите желаемое время в дороге, час');
  while (s == null || s <= 0) {
    s = prompt('Некоректный ввод. Укажите желаемое время в дороге');
  }
  let time = l / s;
  if (l % s == 0) {
    alert(`Вам необходимо придерживаться средней скорости - ${time} км/час`);
  }
  else {
    alert(`Вам необходимо придерживаться средней скорости - ${time.toFixed(1)} км/час`);
  }
}

//Задание 6
function task6() {
  const rate = 0.92;
  let amount = prompt('Укажите количество USD, которые вы хотите поменять.');
  while (amount == null || amount <= 0) {
    amount = prompt('Некоректный ввод. Повторно укажите количество USD');
  }
  let amountEUR = amount * rate;
  if (amountEUR - Math.floor(amountEUR) == 0) {
    alert(`Вы получите ${(amount * rate)} EUR`);
  }
  else {
    alert(`Вы получите ${(amount * rate).toFixed(2)} EUR`);
  }
}

//Задание 7
function task7() {
  let capacityFlesh = prompt('Укажите объем вашего Flash-носителя, ГБ');
  while (capacityFlesh <= 0 || capacityFlesh == null) {
    capacityFlesh = prompt('Некоректный ввод. Укажите объем вашего Flash-носителя, ГБ');
  }
  alert(`Вы можете загрузить такое кол-во файлов по 820 МБ - ${Math.floor(capacityFlesh * 1024 / 820)}`);
}

//Задание 8
function task8() {
  let amount = prompt('Укажите количество денег');
  while (amount <= 0 || amount == null) {
    amount = prompt('Некоректный ввод. Укажите количество денег, USD');
  }
  let pricePP = prompt('Укажите стоимсть 1 шоколадки');
  while (pricePP <= 0 || pricePP == null) {
    pricePP = prompt('Некоректный ввод. Укажите стоимсть 1 шоколадки, USD');
  }
  let number = Math.floor(amount / pricePP);
  alert(`Вы можете приобрести - ${number} шоколодок, останется - ${amount - (number * pricePP)} USD`);
}

//Задание 9
function task9() {
  let number = prompt('Введите число');
  let tempNumber = number;
  let k = 1;
  while (tempNumber >= 10) {
    tempNumber = tempNumber / 10;
    k = k * 10;
  }
  let reverse = 0;
  while (number > 0) {
    reverse = reverse + (number % 10) * k;
    k = k / 10;
    number = Math.floor(number / 10);
  }
  alert(`Перевернутое число - ${reverse}`);
  console.log(typeof reverse);
}

task1();
task2();
task3();
task4();
task5();
task6();
task7();
task8();
task9();