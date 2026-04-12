import { todoList } from "./todo"
import { todoManager } from "./todoManager"


const newManager = new todoManager();       //Skapar instans av todoManager



/**
 * Ladda in todos och 
 * aktivera "click" på knapp.
 */

const addButton = document.getElementById("addButton") as HTMLButtonElement;

document.addEventListener("DOMContentLoaded", () => {

    renderTodos();


    addButton.addEventListener("click", () => {

        getInput();
    });


})



/**
 * Hämta value som skrivs in,
 * validera input i addTodo.
 * Hantera true eller false i handleInput.
 */

const taskInput = document.getElementById("task") as HTMLInputElement;
const priorityInput = document.getElementById("priority") as HTMLInputElement;

function getInput(): void {

    const task: string = taskInput.value;
    const priority: string = priorityInput.value;

    const successResult = newManager.addTodo(task, priority); //true eller false

    handleInput(successResult);
}



/**
 * Använda true eller false.
 * Om korrekt input är true, skapas todo.
 * Annars skrivs felmeddelande ut.
 */

function handleInput(successResult: boolean): void {


    const allFieldsError = document.getElementById("allFieldsError") as HTMLElement;

    if (successResult) {
        renderTodos();

        taskInput.value = "";
        priorityInput.value = "";

        allFieldsError.classList.add("is_hidden");

    } else {
        allFieldsError.classList.remove("is_hidden");
    }
}



/**
 * Hämtar alla todos - getTodo.
 * Gör lista för varje todo.
 * Med möjlighet att checka av.
 */


function renderTodos(): void {

    const todoSpot = document.getElementById("todos") as HTMLDivElement;
    todoSpot.innerHTML = "";

    const allTodos: todoList[] = newManager.getTodos();

    allTodos.forEach((todo, index) => {

        const todoUl = document.createElement("ul") as HTMLUListElement;

        const taskLi = document.createElement("li") as HTMLLIElement;
        taskLi.textContent = todo.task;

        const priorityLi = document.createElement("li") as HTMLLIElement;
        priorityLi.textContent = "Prioritet: " + todo.priority;


        const checkBoxLi = document.createElement("li") as HTMLLIElement;

        const checkbox = document.createElement("input") as HTMLInputElement;
        checkbox.type = "checkbox";
        checkbox.id = `Checkbox${index}`;

        const label = document.createElement("label") as HTMLLabelElement;
        label.htmlFor = `Checkbox${index}`;
        label.textContent = "Markera som utförd: ";

        checkBoxLi.appendChild(label);
        checkBoxLi.appendChild(checkbox);

        todoUl.appendChild(taskLi);
        todoUl.appendChild(priorityLi);
        todoUl.appendChild(checkBoxLi);

        todoSpot.appendChild(todoUl);
    })
}



