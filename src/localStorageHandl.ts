import { todoList } from "./todo"

export class localStorageHandl {

    /**
     * Arrayen med alla todos sparas i localStorage
     */

    static saveTodos(todos: todoList[]): void {
        localStorage.setItem("todos", JSON.stringify(todos));
    }


    /**
     * Arrayen hämtas från localStorage.
     * Map går igenom alla objekt och omvandlar till todoList-objekt.
     * Om nåt finns att hämta returneras ny array.
     */

    static loadTodos(): todoList[] {
        const todoStr = localStorage.getItem("todos");

        if (todoStr) {

            const savedTodo = JSON.parse(todoStr);
            return savedTodo.map((td: { task: string; completed: boolean; priority: string }) =>
                new todoList(td.task, td.completed, td.priority));
        } else {
            return [];
        }
    }

}