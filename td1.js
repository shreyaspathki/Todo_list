let todoList = [];

function renderTodo() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObj = todoList[i];
        const { taskName, dueDate } = todoObj;

        const html = `
        <div class="todo-item">
            <div>${taskName} (Due: ${dueDate})</div>
            <button class="delete-btn" onclick="deleteTodo(${i});">Delete</button>
        </div>
        `;

        todoListHTML += html;
    }

    document.querySelector('.js-html').innerHTML = todoListHTML;
}

function addTodo() {
    const taskInputElement = document.getElementById('taskInput');
    const dateInputElement = document.getElementById('dateInput');

    const taskName = taskInputElement.value;
    const dueDate = dateInputElement.value;

    if (taskName === '' || dueDate === '') {
        alert('Please enter both task and due date!');
        return;
    }

    todoList.push({ taskName, dueDate });

    taskInputElement.value = '';
    dateInputElement.value = '';

    renderTodo();
}

function handleTaskEnterKeyPress(event) {
    if (event.key === 'Enter') {
        document.getElementById('dateInput').focus();
    }
}
function handleDateEnterKeyPress(event) {
    if (event.key === 'Enter') {
     addTodo();
    }
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodo();
}

document.getElementById('taskInput').addEventListener('keydown', handleTaskEnterKeyPress);
document.getElementById('dateInput').addEventListener('keydown', handleDateEnterKeyPress);
