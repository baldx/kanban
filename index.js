const addBtn = document.querySelector('.add');
const name = document.querySelector('.name');
const task = document.querySelector('.task');
const status = document.querySelector('.status');
const submitTask = document.querySelector('.submit');
const nameInput = document.querySelector('#name');
const taskInput = document.querySelector('#task');
const form = document.querySelector('form');
let body = document.querySelector('body');
let isRunning = true;

addBtn.addEventListener('click', () => {
    form.style.display = 'block';
});

submitTask.addEventListener('click', (e) => {  
    e.preventDefault();
    const statusInput = document.querySelector('input[name="status"]:checked');
    form.style.display = 'none';
    body.innerHTML += 
    `
    <div class="todo">
        <div class="name">${nameInput.value}</div>
        <div class="task">${taskInput.value}</div>
        <button class="status">${statusInput ? statusInput.value : "Not done"}</button>
    </div>
    `     
    
    nameInput.value = '';
    taskInput.value = '';
    const checkedRadio = document.querySelector('input[name="status"]:checked');

    if (checkedRadio) checkedRadio.checked = false;
});
