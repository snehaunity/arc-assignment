document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('TaskForm');
    const taskInput = document.getElementById('taskInput');
    const taskTableBody = document.querySelector('table tbody');
 
    let needToUpdateTasks = false;
 
    // Fetch and display all tasks
    function getTasks() {
        fetch('http://127.0.0.1:8000/create/')
            .then(response => response.json())
            .then(tasks => {
                taskTableBody.innerHTML = '';
                tasks.forEach(task => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${task.id}</td>
                        <td>${task.title}</td>
                        <td>
                            <button class="btn btn-update" onclick="updateTask('${task.id}')">Update</button>
                            <button class="btn btn-delete" onclick="deleteTask('${task.id}')">Delete</button>
                        </td>
                    `;
                    taskTableBody.appendChild(tr);
                });
                needToUpdateTasks = false; // Reset the flag after updating tasks
            });
    }
 
    // Add new task
    function addTask(taskName) {
        fetch('http://127.0.0.1:8000/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: taskName })
        })
        .then(response => response.json())
        .then(() => {
            taskInput.value = ''; // Clear input field
            needToUpdateTasks = true; // Set the flag to indicate task update is needed
        });
    }
 
    // Update task
    window.updateTask = function(taskId) {
        const newTaskName = prompt('Enter new task name:');
        if (newTaskName) {
            fetch(`http://127.0.0.1:8000/detail/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: newTaskName })
            })
            .then(response => response.json())
            .then(() => {
                needToUpdateTasks = true; // Set the flag to indicate task update is needed
            });
        }
    };
 
    // Delete task
    window.deleteTask = function(taskId) {
        fetch(`http://127.0.0.1:8000/detail/${taskId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => {
            needToUpdateTasks = true; // Set the flag to indicate task update is needed
        });
    };
 
    // Event listener for form submission
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskName = taskInput.value;
        addTask(taskName);
    });
 
    // Poll for task updates
    setInterval(() => {
        if (needToUpdateTasks) {
            getTasks(); // Reload tasks if needed
        }
    }, 1000); // Adjust the interval as needed
 
    // Initial load
    getTasks();
});
 