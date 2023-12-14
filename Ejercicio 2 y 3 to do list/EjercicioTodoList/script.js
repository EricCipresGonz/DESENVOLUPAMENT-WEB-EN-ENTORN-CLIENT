const btnaddTask = document.getElementById("addTask");
btnaddTask.addEventListener('click', addTask);

let counter = 0;

function addTask() {
    const taskText = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const temp = document.getElementById('template');
    const clonedTemplate = temp.content.cloneNode(true);

    let input = clonedTemplate.querySelector('.valor');
    input.innerText = taskText.value;

    const vale = clonedTemplate.querySelector("li");
    vale.setAttribute("id", "id" + counter);
    counter++;

    const btnRemoveTask = clonedTemplate.querySelector('.removeTask');
    btnRemoveTask.addEventListener('click', function () {
        deleteamos(vale);
    });

    const checkbox = clonedTemplate.querySelector("input[type='checkbox']");
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            compTarea(vale);
        } else {
            desTarea(vale);
        }
    });

    taskList.appendChild(clonedTemplate);
}

function deleteamos(li) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(li);
}

function compTarea(li) {
    li.querySelector("label").style.textDecoration = "line-through";
    li.querySelector("label").style.color = "green";
}

function desTarea(li) {
    li.querySelector("label").style.textDecoration = "none";
    li.querySelector("label").style.color = "";
}

function myFunction() {
    var input, filter, ul, li, label, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("taskList");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        label = li[i].querySelector("label");
        txtValue = label.textContent || label.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
