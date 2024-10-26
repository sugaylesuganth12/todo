const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");
    
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    
    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        taskItem.remove();
    });
    
    taskList.appendChild(taskItem);
    taskInput.value = "";
}
