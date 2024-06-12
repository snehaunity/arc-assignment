from django.test import TestCase
from rest_framework.test import APIClient
from .models import Task

class TaskAPITestCase(TestCase):
    def setUp(self):
        
        self.client = APIClient()
        self.task = Task.objects.create(title='Test Task', description='Test Description', status='Pending')

    def test_task_creation(self):
        response = self.client.post('/api/tasks/', {'title': 'New Task', 'description': 'New Description', 'status': 'Pending'})
        self.assertEqual(response.status_code, 201)

    def test_task_list(self):
        response = self.client.get('/api/tasks/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)

    def test_task_update(self):
        response = self.client.put(f'/api/tasks/{self.task.id}/', {'title': 'Updated Task', 'description': 'Updated Description', 'status': 'Completed'})
        self.assertEqual(response.status_code, 200)

    def test_task_deletion(self):
        response = self.client.delete(f'/api/tasks/{self.task.id}/')
        self.assertEqual(response.status_code, 204)
