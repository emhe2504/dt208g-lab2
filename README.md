Hej!


Här är min webbplats: https://dt208g-lab2.onrender.com



Efter att ha tittat på uppgiftens tillhörande föreläsning och uppföljning valde jag att strukturerar upp mitt arbete i flera ts-filer likt Lars förslag. En för interface, en för todoList-klassen, 
en fil för management av todos, en fil för handtering av localStorage samt en fil för själva main och utskrift till DOM.

Jag har skapat de metoder och attribut som finns listade i uppgiften. TodoManager har de samlade metoderna och constructorn initierar todos-arrayen och laddar todos från LocalStorage. 
Metodernas namn beskriver vad de gör: addTodo (lägger till todo efter input-validering), markTodoCompleted (sköter uppdatering av true/false om en todo checkas av), deleteTodo (raderar todos) 
och getTodos (hämtar alla todos som finns samlade i todoList arrayen).

Spara data till localStorage samt ladda data från local storage sköter localStorageHandl-filen. 

I main.ts skapas de faktiskta todo-listorna med en lista för varje todo. Samtliga listor innehåller vad som ska göras, prioritet (som måste vara 1-3), en checkbox för "markera som utförd" samt en 
knapp för att radera en todo.

Jag har försökt kommentera koden väl och nu när jag testkört applikationen har allt fungerat för mig, så jag hoppas det gör det för er med :)


/Emma
