import type {todo} from './intTodo';

export class todoList implements todo {
    task: string;
    completed: boolean;
    priority: number;

    constructor(task: string, completed: boolean, priority: number) {   //Constructor för att initiera variablerna i todoList
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }
}