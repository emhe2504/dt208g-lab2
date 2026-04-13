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

const todoSpot = document.getElementById("todos") as HTMLDivElement;

function renderTodos(): void {

    todoSpot.innerHTML = "";        //Rensa listan

    const allTodos: todoList[] = newManager.getTodos();

    if (allTodos.length > 0) {

        allTodos.forEach((todo, index) => {

            const todoUl = document.createElement("ul") as HTMLUListElement;
            todoUl.id = `ul-${index}`;

            const taskLi = document.createElement("li") as HTMLLIElement;
            taskLi.textContent = todo.task;

            const priorityLi = document.createElement("li") as HTMLLIElement;
            priorityLi.textContent = "Prioritet: " + todo.priority;


            const checkBoxLi = document.createElement("li") as HTMLLIElement;

            const checkbox = document.createElement("input") as HTMLInputElement;
            checkbox.type = "checkbox";
            checkbox.id = `Checkbox-${index}`;

            const label = document.createElement("label") as HTMLLabelElement;
            label.htmlFor = `Checkbox-${index}`;
            label.textContent = "Markera som utförd: ";

            checkBoxLi.appendChild(label);
            checkBoxLi.appendChild(checkbox);


            //Möjlighet att markera todo klar via checkbox

            checkbox.addEventListener("change", () => {

                if (checkbox.checked) {

                    newManager.markTodoCompleted(index, true);
                    todoUl.style.textDecoration = 'line-through';

                } else {
                    newManager.markTodoCompleted(index, false);
                    todoUl.style.textDecoration = 'none';
                }

            })

            //Möjlighet att radera todo via radera-knapp

            const deleteLi = document.createElement("li");

            const deleteButton = document.createElement("button") as HTMLButtonElement;
            deleteButton.textContent = "Radera";
            deleteButton.id = `button${index}`;

            //Styling
            deleteButton.style.backgroundColor = "white";
            deleteButton.style.border = "1px solid #355872"
            deleteButton.style.borderRadius = "5px";
            deleteButton.style.color = "#355872"
            deleteButton.style.width = "15%"
            deleteButton.style.marginBottom = "1%";

            deleteLi.appendChild(deleteButton);


            todoUl.appendChild(taskLi);
            todoUl.appendChild(priorityLi);
            todoUl.appendChild(checkBoxLi);
            todoUl.appendChild(deleteLi);

            todoSpot.appendChild(todoUl);

            deleteButton.addEventListener("click", () => deleteTodo(index));
        })

    } else {

        const textElement = document.createElement("p") as HTMLElement;
        textElement.id = "check";
        textElement.textContent = "Du har checkat av alla punkter!";
        todoSpot.appendChild(textElement);


    }

}


function deleteTodo(index: number): void {

    newManager.deleteTodo(index);
    renderTodos();
}
