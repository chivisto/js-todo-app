// load every event in the page
const loadEvents = () =>{
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

// add tasks
const addTask = (task) =>{
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"><label>${task}</label><br><span class="delete">Delete</span>`;
    ul.appendChild(li);
    document.querySelector('.tasksBoard').style.display = 'block';
}

//clear list
const clearList = (e) => {
    let ul = document.querySelector('ul').innerHTML = '';
}

// deleteTick
const deleteOrTick = (e) => {
    if (e.target.className == 'delete')
        deleteTask(e);
    else {
        tickTask(e);
    }
}

// delete task
const deleteTask = (e) => {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

// tick a task
const tickTask = (e) => {
    const task = e.target.nextSibling;
    if (e.target.checked) {
        task.style.textDecoration = "line-through";
        task.style.color = "#ff0000";
    } else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
    }
}

loadEvents();