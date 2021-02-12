document.addEventListener("DOMContentLoaded", () => {

  const createTaskForm = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")
  const newTaskDesc = document.getElementById("new-task-description")

  createTaskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let listItem = document.createElement("li");
    listItem.textContent = newTaskDesc.value;
    taskList.appendChild(listItem);
  });
});
