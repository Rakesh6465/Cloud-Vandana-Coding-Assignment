function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create a new task item
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="remove-btn" onclick="removeTask(this)">X</button>`;

    // Add the task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Remove Task
function removeTask(button) {
    let li = button.parentElement;
    li.remove();
}
