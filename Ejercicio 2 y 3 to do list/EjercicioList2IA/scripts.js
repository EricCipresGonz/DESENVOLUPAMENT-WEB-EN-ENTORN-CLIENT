const btn = document.getElementById("btn");
const taskInput = document.getElementById("taskInput");
const inputFilter = document.createElement("input");
inputFilter.type = "text";
inputFilter.placeholder = "Filtrar tareas...";
document.body.insertBefore(inputFilter, document.getElementById("ul"));

btn.addEventListener("click", () => {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = ""; // Limpiar el campo después de agregar la tarea
    }
});

function addTask(taskText) {
    let li = document.createElement("li");
    li.innerHTML = taskText;

    const done = document.createElement("button");
    done.innerHTML = "Done";
    done.id = "done";

    done.addEventListener("click", () => {
        li.classList.toggle('linea');
    });

    const e = document.createElement("button");
    e.innerHTML = "Delete";
    e.id = "delete";
    
    e.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(done);
    li.appendChild(e);
    let ul = document.getElementById("ul");
    ul.appendChild(li);
}

inputFilter.addEventListener("input", () => {
    const filterText = inputFilter.value.toLowerCase();
    const tasks = document.querySelectorAll("li");

    tasks.forEach((task) => {
        const taskText = task.innerText.toLowerCase();
        if (taskText.includes(filterText)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
});
