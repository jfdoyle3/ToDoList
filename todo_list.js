//v2.0
// It should have a array to store todos
var todos=['item 1', 'item 2', 'item 3'];
// It should have a function to add todos
function displayTodos(){
    console.log(todos);
}

// It should have a function to change todos
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

//It should have a function to change todos.
function changeTodo(position, newValue){
    todos[position]= newValue;
    displayTodos();
}

// It should have a functions to delete todos.
function deleteTodo(position, amount) {
    todos.splice(position, amount);
    displayTodos();
}