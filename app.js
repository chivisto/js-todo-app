// load every event in the page
const loadEvents = () => {
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);
}

// subit data function
const submit = (e) => {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTask(input.value);
    input.value = '';
}

let taskArray = [];
// add tasks
const addTask = (task) => {
    let p = document.querySelector('p');
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"><label><span id="edit">${task}</span></label><br><span class="delete">Delete</span>`;
    ul.appendChild(li);
    document.querySelector('.tasksBoard').style.display = 'block';

    taskArray.push(task);
    const tasksLeft = taskArray.length;
    p.innerHTML = `<span class="tasksLeft">Tasks left: ${tasksLeft}</span>`;
}

//edit tasks
const editTask = () => {
    document.getElementById('edit').onclick = function () {
        document.body.removeChild(this);
        let input = document.createElement('input');
        input.id = 'edit';
        input.value = this.innerHTML;
        document.body.appendChild(input);
        input.select();
        console.log('am i here?')
    }
} 

//clear list
const clearList = (e) => {
    let p = document.querySelector('p');
    let ul = document.querySelector('ul').innerHTML = '';
    taskArray = []

    const tasksLeft = taskArray.length;
    p.innerHTML = `<span class="tasksLeft">Tasks left: ${tasksLeft}</span>`;
}

// delete task
const deleteTask = (e) => {
    let p = document.querySelector('p');
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);

    taskArray.pop();
    const tasksLeft = taskArray.length;
    p.innerHTML = `<span class="tasksLeft">Tasks left: ${tasksLeft}</span>`;
}

// deleteTick
const deleteOrTick = (e) => {
    if (e.target.className == 'delete')
        deleteTask(e);
    else {
        tickTask(e);
    }
}

// check a task
const tickTask = (e) => {
    const task = e.target.nextSibling;
    if (e.target.checked) {
        task.style.textDecoration = "line-through";
        task.style.color = "#ff0000";

        let p = document.querySelector('p');
        taskArray.pop();
        const tasksLeft = taskArray.length;
        p.innerHTML = `<span class="tasksLeft">Tasks left: ${tasksLeft}</span>`;
    } else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";

        let p = document.querySelector('p');
        taskArray.push(task);
        const tasksLeft = taskArray.length;
        p.innerHTML = `<span class="tasksLeft">Tasks left: ${tasksLeft}</span>`;
    }

}

loadEvents();