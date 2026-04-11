import { todoList } from "./todo"
import { localStorageHandl } from "./localStorageHandl"



export class todoManager {
    private todos: todoList[] = [];     //Arrays som samlar object med todos

    constructor() {
        this.todos = localStorageHandl.loadTodos();     //Retur-arrayen från loadTodos i localStorageHandl
    }


    public addTodo(task: string, priority: string): boolean {

        if (task && priority) {
            const newTodo = new todoList(task, false, priority);
            this.todos.push(newTodo);
            return true;
        } else {
            return false;
        }

    }

    public getTodos(): todoList[] {
        return this.todos;
    }
}


// Här ska det vara en metod addTodo() som lägger till nya todos



//Det är fel! Varför blir det fyra som pushas till arrayen??