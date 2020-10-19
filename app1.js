const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collecction');
const clearBtn = document.querySelector('.clear-task');
const taskInput = document.querySelector('#add-task');

loadEventListener();

function loadEventListener(){
  form.addEventListener('submit',addTask);
}

function addTask(e){

const li = document.createElement('li');
li.className = 'collection-item';
li.appendChild(document.createTextNode(taskInput.value));
const link = document.createElement('a');
link.className= 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);
taskList.appendChild(li);
taskInput.value='';




  e.preventDefault();
}