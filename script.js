const form = document.getElementById('form-task');
const taskInput = document.getElementById('task-input');
const ongoingTasks = document.getElementById('ongoing-tasks');
const toDoTasks = document.getElementById('to-do-tasks');
const completedTasks = document.getElementById('completed-tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = document.createElement('li');
        task.innerHTML = `<span>${taskText}</span> <button>Concluir</button>`;
        toDoTasks.appendChild(task);
        taskInput.value = '';
    }
});

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const task = e.target.parentElement;
        if (task.parentElement === toDoTasks) {
            ongoingTasks.appendChild(task);
        } else if (task.parentElement === ongoingTasks) {
            completedTasks.appendChild(task);
        }
    }
});