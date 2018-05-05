//v5.0

var todosList={
    todos: [],
    displayTodos: function (){
        if (this.todos.length === 0){
            console.log('Your ToDo list is empty');
        } else {
           console.log("My Todos: ");
        for(var i=0; i < this.todos.length; i++){
            console.log(this.todos[i].todoText);
          }    
        }
    },
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
            });
        this.displayTodos();
    },
    changeTodo: function (position, todoText){
        this.todos[position].todoText=todoText;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position ,1);
        this.displayTodos();
    },
    toggleComplete: function(position){
        var todo=this.todos[position];
        todo.completed=!todo.completed;
        this.displayTodos();
    }      
};
