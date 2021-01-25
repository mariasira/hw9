const enteredTask = document.querySelector('#new-task');
const addButton = document.querySelector('#add-button');
const tasks = document.querySelector('.js-tasks');
const emptyMessage = document.querySelector('.js-empty-message');

const getNewTaskItem = function(taskName) {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    label.innerText = taskName ;
    listItem.appendChild(label);
    const deleteButton = document.createElement("button");
    listItem.appendChild(deleteButton);
    deleteButton.className = 'btn btn-outline-secondary btn-lg' && 'p-2 bg-light border';
    deleteButton.innerHTML = 'Del';
    deleteButton.onclick = deleteTask;
    return listItem;
}

const onAddTask = function () {
   
    const listItem = getNewTaskItem(enteredTask.value);
    tasks.appendChild(listItem);
    enteredTask.value = "";
    emptyMessage.hidden = true;
    listItem.className ='background-yellow';
}

addButton.addEventListener("click", onAddTask);

  let selectedLi;

  tasks.onclick = function(event) {
  let target = event.target;

  while (target != this) {
  if (target.tagName === 'LI') {
    changeColor(target);
    return;
    }
    target = target.parentNode;
    }
  }

 function changeColor(li) {
  if (selectedLi) {
   selectedLi.classList.remove('background-yellow');
   }
  selectedLi = li;
  selectedLi.classList.add('background-green');
}

const deleteTask = function() {
    const listItem = this.parentNode;
    const tasks = listItem.parentNode;
    tasks.removeChild(listItem);
    const isEmpty = tasks.hasChildNodes();
    if (isEmpty === true) {
      tasks.innerHTML = 'List is empty'
    }
}

    
    
    