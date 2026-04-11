import { todoList } from "./todo"
import { todoManager } from "./todoManager"


const newManager = new todoManager();

const addButton = document.getElementById("addButton") as HTMLButtonElement;



document.addEventListener("DOMContentLoaded", () => {

    createTodos(); //Ska denna vara här? kanske bättre att skapande triggande av click, medan utskrift till dom av den redan färdiga listan sker i annan funktion?


    addButton.addEventListener("click", () => {

        getInput();
    });


})



const taskInput = document.getElementById("task") as HTMLInputElement;
const priorityInput = document.getElementById("priority") as HTMLInputElement;

/**
 * Hämta input
 * Kontrollera och använda i addTodo
 */

function getInput(): void {

    const task: string = taskInput.value;
    const priority: string = priorityInput.value;

    const successResult = newManager.addTodo(task, priority);

    handleInput(successResult);
}


/**
 * Hantera input
 * Om vi har input skapa todo
 * Om inte, felmeddelande
 */

function handleInput(successResult: boolean): void {


    const allFieldsError = document.getElementById("allFieldsError") as HTMLElement;

    if (successResult) {
        createTodos();

        taskInput.value = "";
        priorityInput.value = "";

        allFieldsError.classList.add("is_hidden");

    } else {
        allFieldsError.classList.remove("is_hidden");
    }
}






function createTodos(): void {

    const todoSpot = document.getElementById("todos") as HTMLDivElement;

    const allTodos: todoList[] = newManager.getTodos();

    console.log(allTodos);

    allTodos.forEach((todo, index) => {

        const todoUl = document.createElement("ul");

        const taskLi = document.createElement("li");
        taskLi.textContent = todo.task;

        const priorityLi = document.createElement("li");
        priorityLi.textContent = todo.priority;


        const checkBoxLi = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `Checkbox${index}`;

        checkBoxLi.appendChild(checkbox);

        const label = document.createElement("label");
        label.htmlFor = `Checkbox${index}`;
        label.appendChild(document.createTextNode("Markera som utförd: "))

        todoUl.appendChild(taskLi);
        todoUl.appendChild(priorityLi);
        todoUl.appendChild(checkBoxLi);

        todoSpot.appendChild(todoUl);
    })
}



