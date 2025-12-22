// ----------------------------------------------------------------------------
// TASK ARRAY (start empty)
// ----------------------------------------------------------------------------
let tasks = [];

// ----------------------------------------------------------------------------
// DOM ELEMENTS
// ----------------------------------------------------------------------------
const descriptionInput = document.getElementById("description");
const prioritySelect = document.getElementById("priority");
const addButton = document.getElementById("addButton");
const container = document.querySelector(".container");

// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

// Display tasks on DOM
function displayTasks(taskList) {
  // Remove old task elements first
  const oldTasks = document.querySelectorAll(".task-item");
  oldTasks.forEach(task => task.remove());

  // Build DOM elements for each task
  taskList.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task-item";
    taskDiv.textContent = task.description;

    // Set color based on priority
    taskDiv.style.color = task.priority === 1 ? "red" : "grey";

    // Append to container
    container.appendChild(taskDiv);
  });
}

// Add new task from user input
function addItem() {
  const description = descriptionInput.value.trim();
  const priority = prioritySelect.value === "High" ? 1 : 0;

  if (description === "") return; // prevent empty tasks

  // Create new task object
  const newTask = { description, priority };

  // Add to array
  tasks.push(newTask);

  // Update DOM
  displayTasks(tasks);

  // Clear input
  descriptionInput.value = "";
}

// Filter tasks
function filterTasks(filter) {
  let filteredTasks;
  if (filter === "important") {
    filteredTasks = tasks.filter(task => task.priority === 1);
  } else if (filter === "not-important") {
    filteredTasks = tasks.filter(task => task.priority === 0);
  } else {
    filteredTasks = tasks; // show all
  }

  displayTasks(filteredTasks);
}

// ----------------------------------------------------------------------------
// EVENTS
// ----------------------------------------------------------------------------
addButton.addEventListener("click", addItem);

// Add filter buttons dynamically
const filtersDiv = document.createElement("div");
filtersDiv.style.marginTop = "20px";

const btnImportant = document.createElement("button");
btnImportant.textContent = "Important";
btnImportant.addEventListener("click", () => filterTasks("important"));

const btnNotImportant = document.createElement("button");
btnNotImportant.textContent = "Not Important";
btnNotImportant.addEventListener("click", () => filterTasks("not-important"));

const btnAll = document.createElement("button");
btnAll.textContent = "All";
btnAll.addEventListener("click", () => filterTasks("all"));

filtersDiv.appendChild(btnImportant);
filtersDiv.appendChild(btnNotImportant);
filtersDiv.appendChild(btnAll);

// Append filter buttons below form
container.appendChild(filtersDiv);
