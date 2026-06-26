let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks(filter = 'All') {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return task.category === filter;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.innerHTML = `
      <div>
        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${tasks.indexOf(task)})">
        <strong>${task.title}</strong> [${task.category}]
        <p>${task.description}</p>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const title = document.getElementById('taskTitle').value;
  const description = document.getElementById('taskDescription').value;
  const category = document.getElementById('taskCategory').value;

  if (title.trim() === '') {
    alert('Please enter a task title');
    return;
  }

  const newTask = {
    title,
    description,
    category,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  document.getElementById('taskTitle').value = '';
  document.getElementById('taskDescription').value = '';
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function filterTasks(category) {
  renderTasks(category);
}

// Initial render
renderTasks();
