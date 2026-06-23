const addButton = document.getElementById('hinzufuegen-btn');
const inputField = document.getElementById('neues-todo');
const todoList = document.getElementById('todo-liste');

function addTask(){
    const taskText = inputField.value.trim();

    if (taskText === ''){
        alert('Bitte gib eine Aufgabe ein!');
        return;
    }
    const li = document.createElement('li')
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.backgroundColor = '#dc3545';
    deleteBtn.style.marginLeft = '10px';

    deleteBtn.onclick = function(){
        li.remove();
    
    };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    inputField.value = '';
}
addButton.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        addTask();
    }
});
