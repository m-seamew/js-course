const task1 = function () {
  let length = document.getElementById('length').value;
  let width = document.getElementById('width').value;
  let high = document.getElementById('high').value;
  alert(`Вам необходимо ${(length*high+width*high)*2/16}`);
}

document.getElementById('task1__form').onsubmit = function () {
  task1();
};