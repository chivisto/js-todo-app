const submit = (e) =>{
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTask(input.value);
    input.value = '';
}

loadEvents();
// load every event in the page
function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
}
// subit data function
// function submit1(e) {
//     e.preventDefault();
//     let input = document.querySelector('input');
//     if (input.value != '')
//         addTask(input.value);
//     input.value = '';
// }

