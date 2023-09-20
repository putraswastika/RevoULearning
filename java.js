const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const itemcontainer = document.getElementById("item-container");
let todoData = [];

const uuid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

const renderItem = (item) => {
    return `
    <div id ="item-todo">
    <p onClick="deleteItem('${item.id}')">❌</p>
    <p class=${item.completed ? 'strike' : 'normal'} onclick="handleComplete('${item.id}')">${item.title}</p>
    </div>
    `;
}

const printTodo = () => {
    let html = '';
    todoData.forEach(item => {
        html += renderItem(item);
    });
    itemcontainer.innerHTML = html;
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value.length) {
        const newTodo = [
            ...todoData,
            {
                id: uuid(),
                title: input.value,
                completed: false
            }
        ];
        localStorage.setitem('local', JSON.stringify(newTodo));
        todoData = newTodo;
        printTodo();
        input.value = '';
    }
});

const deleteItem = (id) => {
    todoData = todoData.filter(item => item.id !== id);
    localStorage.setItem('local', JSON.stringify(todoData));
    printTodo();
}

const handleComplete = (id) => {
    let newTodo = JSON.parse(localStorage.getItem('local'));
    let index = newTodo.findIndex(item => item.id === id);
    newTodo[index].completed = !newTodo[index].completed;
    localStorage.setItem('local', JSON.stringify(newTodo));
    todoData = newTodo; // Update todoData
    printTodo();
}

const getData = () => {
    const storage = localStorage.getItem('local');
    if (storage) {
        todoData = JSON.parse(storage);
        printTodo();
    } else {
        localStorage.setItem('local', JSON.stringify([]));
    }
}

getData();
