let tasksdata = {}


const todo = document.querySelector("#todo")
const progress = document.querySelector("#progress")
const done = document.querySelector("#done")
const over = document.querySelector(".hover-over")
const tasks = document.querySelectorAll(".task")
let dragElement = null;
const toggleModalButton = document.querySelector("#toggle-modal")
const modal = document.querySelector(".modal")
const modalbg = document.querySelector(".bg")
const addTaskButton = document.querySelector(".add-task-btn")



function addtask(tite, desc, column) {
    const div = document.createElement("div")
    div.classList.add("task")
    div.setAttribute("draggable", "true")
    div.innerHTML = `
    <h2>${tite}</h2>
    <p>${desc}</p>
    <button id="krdedelete">Delete</button>
    `
    column.appendChild(div)

    div.addEventListener("drag", function() {
        dragElement = div
    })

    const deleteButton = div.querySelector("button");
    deleteButton.addEventListener("click", function() {
        div.remove();
        updateTaskCounts();
    })
    return div
}


function updateTaskCounts() {
    const columns = [todo, progress, done];
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        tasksdata[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector("h2").innerText,
                desc: t.querySelector("p").innerText
            }
        })
        localStorage.setItem("tasksdata", JSON.stringify(tasksdata))
        count.innerText = tasks.length;
    })
}

if (localStorage.getItem("tasksdata")) {
    const data = JSON.parse(localStorage.getItem("tasksdata"));
    for (const col in data) {
        const column = document.querySelector(`#${col}`);
        data[col].forEach(taskData => {
            addtask(taskData.title, taskData.desc, column)
        })

    }
    updateTaskCounts()
}


tasks.forEach(function(task) {
    task.addEventListener("drag", function(e) {
        dragElement = task
    })
})
const columns = [todo, progress, done]


function addDragEventOnColumn(column) {
    column.addEventListener("dragenter", function(e) {
        e.preventDefault();
        column.classList.add("hover-over")
    })
    column.addEventListener("dragleave", function(e) {
        e.preventDefault();
        column.classList.remove("hover-over")
    })
    column.addEventListener("dragover", function(e) {
        e.preventDefault();
        // column.classList.remove("hover-over")
    })
    column.addEventListener("drop", function(e) {
        e.preventDefault();
        if (!dragElement) return;

        column.appendChild(dragElement)
        column.classList.remove("hover-over");

        updateTaskCounts()
    })
}

addDragEventOnColumn(todo)
addDragEventOnColumn(progress)
addDragEventOnColumn(done)



toggleModalButton.addEventListener("click", function() {
    modal.classList.toggle("active")

})
modalbg.addEventListener("click", function() {
    modal.classList.remove("active")

})
addTaskButton.addEventListener("click", function() {
    const taskTitle = document.querySelector("#task-title-input").value
    const taskDesc = document.querySelector("#task-desc-input").value

    addtask(taskTitle, taskDesc, todo);
    modal.classList.remove("active")
    updateTaskCounts()

    document.querySelector("#task-title-input").value = "";
    document.querySelector("#task-desc-input").value = "";
})


const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});