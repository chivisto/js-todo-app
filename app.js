//loader
const loadEvents = () =>{
    //submit list
    document.querySelector('form').addEventListener('submit', submit);
    //clear list
    document.getElementById('clear').addEventListener('click',clearList);
}

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

//clear list function
const clearList = (e) =>{
    let ul = document.querySelector('ul').innerHTML = '';
}








loadEvents();


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

