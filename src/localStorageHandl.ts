import {todoList} from "./todo"

export class localStorageHandl {

    static saveTodos(todos: todoList[]) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    static loadTodos(): any {
        const todoStr = localStorage.getItem("todos");

        if (todoStr) {

            const savedTodo = JSON.parse(todoStr);
            return savedTodo.map((td: {task: string; completed: boolean; priority: string}) =>
            new todoList(td.task, td.completed, td.priority));
        } else {
            return [];
        }
    }

}