 import {todoList} from "./todo"
 import {localStorageHandl} from "./localStorageHandl"


 
 export class todoManager {
     private todos: todoList[] = [];     //Arrays som samlar object med todos
 
     constructor() {
         this.todos = localStorageHandl.loadTodos();     //Retur-arrayen från loadTodos i localStorageHandl
     }


      public addTodo(todos: todoList): void {

        this.todos.push(todos);
        localStorageHandl.saveTodos(this.todos);

 }

 }


// Här ska det vara en metod addTodo() som lägger till nya todos

