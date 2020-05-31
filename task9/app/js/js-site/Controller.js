import Model from './Model.js';
import View from './View.js';

export default class Controller {

  constructor() {
    this.model = new Model();
    this.view = new View();

    this.model.loadData(this.onLoadData, this.model.listData);
    this.view.render(this.model.listData, this.onCheck, this.checkStat);
    this.model.checkSave(this.model.listData);

    this.view.addListeners(
      this.allClear,
      this.addTask,
      this.allDone,
      this.onTodoClick,
      this.deleteTask,
    )
  }
  
  //Загрузка данных
  onLoadData = () => {
    this.view.render(this.model.listData, this.onCheck, this.checkStat);
  }

  //Проверка сохраненных данных в local Storage
  onCheck = () => {
    this.model.checkSave(this.model.listData);
  }
  
  //Сбор статистики
  checkStat = () => {
    return this.model.checkStat(this.model.listData);
  }

  //Отметить все выполненными
  allDone = () => {
    this.model.allDone(this.model.listData);
    this.view.render(this.model.listData, this.onCheck, this.checkStat);
  }

  //Отметить все не выполненными
  allClear = () => {
    this.model.allClear(this.model.listData);
    this.view.render(this.model.listData, this.onCheck, this.checkStat);
  }
  
  //Смена статуса выполнения по нажатию на таск
  onTodoClick = (e) => {
    const id = +event.target.dataset.id;
    this.model.onTodoClick(id, this.model.listData);
    this.view.render(this.model.listData, this.onCheck, this.checkStat);
  }
  
  //Добавление нового таска
  addTask = () => {
    this.model.addTask(this.model.listData);
    this.view.render(this.model.listData, this.onCheck, this.checkStat);
  }
  
  //Удаление таска по нажатию правой кнопкой мыши
  deleteTask = (e) => {
    const id = +e.target.dataset.id;
    e.which === 3 ? this.model.deleteTask(this.model.listData, id) : null;
    this.view.render(this.model.listData, this.onCheck, this.checkStat);
  }

}