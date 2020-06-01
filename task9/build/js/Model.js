export default class Model {
  listData = [];
  

  loadData(loadDone, arr) {
    let tempValue = JSON.parse(localStorage.getItem('myListData'));

    if (tempValue != null) {
      arr = JSON.parse(localStorage.getItem('myListData'));
      loadDone();
    } else {
      const aja = new XMLHttpRequest();
      aja.onload = () => {

        let data = JSON.parse(aja.responseText);
        arr.push(...data);
        localStorage.setItem("myListData", JSON.stringify(arr));
        loadDone();
      }

      aja.open('GET', './data/data.json');
      aja.send();
      console.log(arr);
    }
    this.listData = arr;
  }
  
  //Проверка данных в Local Storage
  checkSave(data) {
    JSON.parse(localStorage.getItem('myListData')) != data ? localStorage.setItem("myListData", JSON.stringify(data)) : null;
    data = JSON.parse(localStorage.getItem('myListData'));

  }
  
  //Отметить все выполненными
  allDone(data) {
    data.forEach(item => item.isDone == false ? item.isDone = !item.isDone : null);
  }
  
  //Отметить все не выполненными
  allClear(data) {
    data.forEach(item => item.isDone == true ? item.isDone = !item.isDone : null);
  }
  
  //Cмена статуса таска по клику 
  onTodoClick(id, data) {
    data.forEach(item => item.id === id ? item.isDone = !item.isDone : null);
  }

  maxid = 0; // Значение максимального id в массиве для генерации последующего
  //Добавление нового таска
  addTask(data) {

    console.log(this.maxid);
    let taskName = document.querySelector('.todo-app__input-name').value;

    this.maxid = this.maxid + 1;
    data.forEach(element => {
      element.id >= this.maxid ? this.maxid = element.id + 1 : null;
    });

    let tempId = this.maxid;
    
    //Проверка на наличие симолов в названии таска
    if (taskName.replace(/\s+/, '') != '') {
      data.unshift({ id: tempId, name: taskName, isDone: false, });
      document.querySelector('.todo-app__input-name').value = '';
    }
    else {
      document.querySelector('.todo-app__input-name').value = '';
      document.querySelector('.todo-app__input-name').placeholder = 'Введите название таска';
    }
  }


  // Cбор статистики по выполнению тасков
  checkStat(data) {
    let all = 0;
    let done = 0;

    data.forEach(el => {
      el.isDone == true ? done++ : null;
      all = all + 1;
    })
    let stat = [all, done];

    return stat;
  }


  //Удаление таска
  deleteTask(data, id) {
    data.forEach(el => el.id == id ? data.splice(data.indexOf(el), 1) : null);
  }

}