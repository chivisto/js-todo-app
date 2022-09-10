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
    li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
    ul.appendChild(li);
    document.querySelector('.tasksBoard').style.display = 'block';
}

loadEvents();
// load every event in the page
function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
}


// function addTask(task) {
//     let ul = document.querySelector('ul');
//     let li = document.createElement('li');
//     li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
//     ul.appendChild(li);
//     document.querySelector('.tasksBoard').style.display = 'block';
// }


// subit data function
// function submit1(e) {
//     e.preventDefault();
//     let input = document.querySelector('input');
//     if (input.value != '')
//         addTask(input.value);
//     input.value = '';
// }

