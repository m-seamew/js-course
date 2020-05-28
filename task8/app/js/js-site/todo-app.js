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