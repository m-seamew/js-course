
//Cтруктура данных

import Controller from '/app/js/js-site/Controller.js';
const controller = new Controller();

/*

//Model
let listData = [];
*/
/*
//
function loadData(arr) {
  const aja = new XMLHttpRequest();
  let tempValue = JSON.parse(localStorage.getItem('myListData'));
  if (tempValue != null) 
  {
    arr = JSON.parse(localStorage.getItem('myListData'));
    render(arr);

  } else {

    aja.onload = () => {

      let data = JSON.parse(aja.responseText);
      arr.push(...data);
      localStorage.setItem("myListData", JSON.stringify(arr));
      render(arr);

    }

    aja.open('GET', './data/data.json');
    aja.send();
  }

  return arr;
}
*/

//view
//Рендер вывода
/*
function render(data) {

  JSON.parse(localStorage.getItem('myListData')) != data ? localStorage.setItem("myListData", JSON.stringify(data)) : null;

  data = JSON.parse(localStorage.getItem('myListData'));

  const list = document.querySelector('.todo-app');
  list.innerHTML = data.map(item => {
    let className = item.isDone ? 'class="todo-app__list--done todo-app__list"' : 'class="todo-app__list"';
    return `<li ${className} data-id=${item.id}>${item.name}</li>`;
  }).join('');

}*/
/*
//cont + model
//Выполнение заданий, отмена выбора
function onTodoClick(event) {

  const id = +event.target.dataset.id;

  listData.forEach(item => item.id === id ? item.isDone = !item.isDone : null);

  render(listData);
}

//document.querySelector('.todo-app').addEventListener('click', onTodoClick);


listData = loadData(listData);



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


//document.querySelector('.todo-app__all-clear').addEventListener('click', allClear);


//Добавить новый
function addTask() {

  let taskName = document.querySelector('.todo-app__input-name').value;
  let tempId = listData.length;


  if (taskName.replace(/\s+/, '') != '') {
    listData.unshift({ id: tempId, name: taskName, isDone: false, });
    document.querySelector('.todo-app__input-name').value = '';
  }
  else {
    document.querySelector('.todo-app__input-name').value = '';
    document.querySelector('.todo-app__input-name').placeholder = 'Введите название таска';
  }
  render(listData);
  // console.log(listData);
}

//document.querySelector('.todo-app__accept-newtask').addEventListener('click', addTask);

*/