const todoInput = document.querySelector('#input-box');
const todoTasks = document.querySelector('#todo-tasks');

function addTask() {
  if (todoInput.value === '') {
    alert(' You Must Write Something ');
  } else {
    let li = document.createElement('li');
    li.innerHTML = todoInput.value;
    todoTasks.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  todoInput.value = '';
  saveData();
}

todoTasks.addEventListener(
  'click',
  (e) => {
    console.log();
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", todoTasks.innerHTML);
}
function showTask() {
  todoTasks.innerHTML= localStorage.getItem("data")
}
showTask();
