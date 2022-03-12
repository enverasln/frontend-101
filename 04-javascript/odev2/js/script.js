const listDOM = document.querySelector('#list');
const taskDOM = document.querySelector('#task');

let tasks = [];
let nextID = 0;

function loadTask() {
    nextID = parseInt(localStorage.getItem('nextID'));
    const tasksObject = localStorage.getItem('tasks');

    if(!nextID) {
        nextID = 1;
    }
    
    if(!tasksObject) {
        tasks = [];        
        return;

    } 

    tasks = JSON.parse(tasksObject);

    tasks.forEach(task => {
        addTaskToListDOM(task);
    });
    
}

function addTaskToListDOM(task) {
    const liDOM = document.createElement("li");
    liDOM.addEventListener("click", clickListItem);
    liDOM.id = task.taskID;
    liDOM.innerHTML = `${task.description}<span onclick="removeTask(event)" class="close">x</span>`;
    listDOM.appendChild(liDOM);
    console.log(task);
}

function clickListItem(event) {
    const listItem = event.target;
    checkTask(listItem);
}

function checkTask(target) {

    const classList = target.classList;
    if(classList.contains("checked")) {
        classList.remove("checked");
    } else {
        classList.add("checked");
    }

    tasks.map(item => {
        if(item.taskID === parseInt(target.id)) {
            item.completed = !item.completed;
        }
    });

    saveTasks();
}

function newElement() {
    const value = taskDOM.value.trim();
    if(!value) {
        showMessage("Listeye boş ekleme yapmazsınız.");
        taskDOM.value ="";
        return;
    }

    task = {
        taskID: nextID,
        description: value,
        completed: false
    };
    addTaskToListDOM(task);
    tasks.push(task);
    taskDOM.value ="";
    showMessage("Listeye eklendi.");
    nextID++;

    saveTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('nextID', nextID);
}

function removeTask(event) {
    const parent = event.target.parentNode;
    console.log(parent.innerHTML);
    tasks = tasks.filter(item => item.taskID !== parseInt(parent.id));
    saveTasks();
    parent.remove();
    showMessage("Kayıt silindi");
    
}


function showMessage(message) {
    const liveToastDOM = document.querySelector('.toast-body');
    liveToastDOM.innerHTML = message;
    $('#liveToast').toast('show');
}

