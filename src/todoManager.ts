import { todoList } from "./todo"
import { localStorageHandl } from "./localStorageHandl"



export class todoManager {
    public todos: todoList[] = [];     //Arrays som samlar object med todos

    constructor() {
        this.todos = localStorageHandl.loadTodos();     //Initierar och laddar retur-arrayen från loadTodos
    }


    /**
     * Om korrekt input skickas ny todo till ovan array.
     * Även till saveTodos som hanterar localStorage.
     * Returnerar true eller false beroende på korrekt input
     */

    public addTodo(task: string, priority: string): boolean {

        if ((task && priority) && (priority === "1" || priority === "2" || priority === "3")) {
            const newTodo: todoList = new todoList(task, false, priority);
            this.todos.push(newTodo);
            localStorageHandl.saveTodos(this.todos);
            return true;
        } else {
            return false;
        }

    }

    /**
     * Korrigera completed i this.todos (true/false)
     * beroende på om checkbox är checked eller inte 
     */

    public markTodoCompleted(index: number, completed: boolean): void {


        this.todos[index].completed = completed;
        localStorageHandl.saveTodos(this.todos);

    }

    public deleteTodo(index: number): void {

        this.todos.splice(index, 1);
        localStorageHandl.saveTodos(this.todos);
    }


    /**
     * Metod för att hämta hela listan av todos
     */

    public getTodos(): todoList[] {
        return this.todos;
    }
}