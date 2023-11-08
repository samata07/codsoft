document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTask");
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(taskItem);

            taskInput.value = ""; // Clear the input field
        }
    });

    taskList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete")) {
            event.target.parentElement.remove();
        }
    });
});
