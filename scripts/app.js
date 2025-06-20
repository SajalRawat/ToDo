const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-todo-button');
const todoList = document.querySelector(".todo-list");

let todos = [];

function renderTodos() {
    todoList.querySelector("#todos").innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        const buttonDiv = document.createElement("div")
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button')
        deleteButton.textContent = 'Delete';
        const completedButton = document.createElement('button');
        completedButton.classList.add('completed-button')
        completedButton.textContent = 'Complete'; 
        deleteButton.onclick = () => deleteTodo(index);
        let toggle = true;
        completedButton.onclick = () => {li.classList.toggle('cut')
            completedButton.classList.toggle("uncomplete")
            if (toggle){
                completedButton.textContent = "Completed"
                toggle = false
            }
            else{
                completedButton.textContent = "Complete"
                toggle = true
            }
        };
        document.querySelector("#todos").append(li)
        
        li.appendChild(buttonDiv)  
        buttonDiv.appendChild(completedButton)  
        buttonDiv.appendChild(deleteButton)
    }); 
}

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);
        todoInput.value = '';
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}
function completeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});