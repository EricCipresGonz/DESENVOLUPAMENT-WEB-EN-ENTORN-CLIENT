const btn = document.getElementById("btn");
const taskInput = document.getElementById("taskInput");
const ul = document.getElementById("ul");
const Filtro = document.getElementById("inputFilter");

btn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = taskText;

    const done = CB("Done", () => markAsDone(li));
    const del = CB("Delete", () => li.remove());

    li.appendChild(done);
    li.appendChild(del);
    ul.appendChild(li);

    taskInput.value = "";
}

function CB(text, onClick) {
    const button = document.createElement("button");
    button.innerHTML = text;
    button.addEventListener("click", onClick);
    return button;
}

function markAsDone(li) {
    li.style.color = "green";
}

Filtro.addEventListener("input", () => {
    const filterText = Filtro.value.toLowerCase();
    document.querySelectorAll("li").forEach(task => {
        const taskText = task.innerText.toLowerCase();
        task.style.display = taskText.includes(filterText) ? "block" : "none";
    });
});
