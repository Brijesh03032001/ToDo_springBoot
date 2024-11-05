function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskTitle = document.createElement("span");
    taskTitle.classList.add("task-title");
    taskTitle.innerText = taskInput.value;

    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-btn");
    toggleButton.innerText = "Toggle";
    toggleButton.onclick = function () {
        taskDiv.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(taskDiv);
    };

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(toggleButton);
    taskDiv.appendChild(deleteButton);
    taskList.appendChild(taskDiv);

    taskInput.value = "";
}
