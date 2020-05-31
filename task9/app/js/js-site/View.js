export default class View {

  list = document.querySelector('.todo-app');
  

  //Отображение тасков
  render(data, checkSave, checkStat) {

    checkSave(); //Проверка данных в Local Storage
    let stat = checkStat(); // Получение данных статистики

    const allField = document.querySelector(".todo-app__all");
    const doneField = document.querySelector(".todo-app__done");

    allField.innerHTML = `Всего: ${stat[0]}`;
    doneField.innerHTML = `Выполнено: ${stat[1]}`;

    //Отображение тасков
    this.list.innerHTML = data.map(item => {
      let className = item.isDone ? 'class="todo-app__list--done todo-app__list"' : 'class="todo-app__list"';
      return `<li ${className} data-id=${item.id}>${item.name}</li>`;
    }).join('');

  };

  addListeners(allClear, addTask, allDone, onTodoClick, deleteTask) {
    document.querySelector('.todo-app__all-clear').addEventListener('click', allClear);
    document.querySelector('.todo-app__accept-newtask').addEventListener('click', addTask);
    document.querySelector('.todo-app__all-done').addEventListener('click', allDone);
    document.querySelector('.todo-app').addEventListener('click', onTodoClick);
    document.querySelector('.todo-app').addEventListener('contextmenu', deleteTask);
  }

}