# Task Manager Application

This is a simple Django application that allows users to manage a list of tasks. It provides RESTful APIs to perform CRUD (Create, Read, Update, Delete) operations on tasks. Additionally, there's a basic HTML page that uses JavaScript to interact with the APIs.

## Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd task-manager
```

### 2. Set Up Virtual Environment (Optional but Recommended)

```bash
python3 -m venv venv
```

Activate the virtual environment:

- On Windows:
  ```bash
  venv\Scripts\activate
  ```
- On macOS and Linux:
  ```bash
  source venv/bin/activate
  ```

### 4. Run Migrations

```bash
python manage.py migrate
```

### 5. Run the Django Development Server

```bash
python manage.py runserver
```

The server should now be running locally on http://127.0.0.1:8000/.

## API Endpoints

### 1. List all Tasks

- **URL:** `create/`
- **Method:** GET

### 2. Create a Task

- **URL:** `create/`
- **Method:** POST
- **Body Parameters:**
  - `title` (required): Title of the task
  - `description` (optional): Description of the task
  - `status` (optional): Status of the task (Pending or Completed)

### 3. Update a Task

- **URL:** `/detail/<task_id>/`
- **Method:** PUT
- **URL Parameters:**
  - `task_id` (required): ID of the task to update
- **Body Parameters:**
  - `title` (optional): New title of the task
  - `description` (optional): New description of the task
  - `status` (optional): New status of the task (Pending or Completed)

### 4. Delete a Task

- **URL:** `/detail/<task_id>/`
- **Method:** DELETE
- **URL Parameters:**
  - `task_id` (required): ID of the task to delete

## Frontend

The frontend is a simple HTML page located at `index.html`. It interacts with the API endpoints using JavaScript to perform CRUD operations on tasks.

## Database

The project uses SQLite as the database. The database file (`db.sqlite3`) will be automatically created upon running migrations.

## Conclusion

You should now have the project up and running locally. Feel free to explore the APIs and interact with the frontend to manage your tasks efficiently. If you encounter any issues or have suggestions for improvements, please let me know. Enjoy task management with Task Manager!
