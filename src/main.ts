import { todoList } from "./todo"
import { todoManager } from "./todoManager"

//DOM laddas, prevent default på formulär

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form") as HTMLFormElement;
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        newTodo();
    })
})


const todoMan = new todoManager();


function getBooleand


function newTodo(): void {
    const taskInput = document.getElementById("task") as HTMLInputElement;
    const priorityInput = document.getElementById("priority") as HTMLInputElement;

    const task: string = taskInput.value;
    const priority: string = priorityInput.value;

    if (task && priority) {
        const newTodo = new todoList(task, checkedBox(), priority);
        todoMan.addTodo(newTodo);
        taskInput.value = "";
        priorityInput.value = "";
    }
}


function checkedBox(todoIndex: any): boolean {

    const checkbox = document.getElementById(`checkbox${todoIndex}`) as HTMLInputElement;

    if (checkbox.checked) {
        return true;
    } else {
        return false;
    }
}

//Fortsätt.. boolen måste vara med också för klar eller inte klar.

/**
 * import {todoList} from "./todo"
 import {localStorageHandl} from "./localStorageHandl"
 
 export class todoManager {
     private todos: todoList[] = [];     //Arrays som samlar object med todos
 
     constructor() {
         this.todos = localStorageHandl.loadTodos();     //Retur-arrayen från loadTodos i localStorageHandl
     }
 }
 
 // forstätt... 
 */

