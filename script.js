
function addTask() {
    const taskdiv = document.getElementById("list-cont");
    const newtask = document.getElementById("newtask");

    if(newtask.value === "") {
        alert("Enter a valid Task!");
    }
    else {
        let task = document.createElement("li");
        taskdiv.append(task);
        task.innerHTML = newtask.value;
        newtask.value = "";
        btn = document.createElement("btn");
        task.append(btn);
        btn.innerHTML = "<button>Delete</button>";
    }    
    save();
}

let taskdiv = document.getElementById("list-cont");
taskdiv.addEventListener("click", function(event) {
    console.log(event);
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        save();
    }
    else if(event.target.tagName === "BUTTON") {
        event.target.parentElement.parentElement.remove();
        save();
    }
});

function save() {
    localStorage.setItem("tasks", taskdiv.innerHTML);
}

function load() {
    taskdiv.innerHTML = localStorage.getItem("tasks");
}

load();