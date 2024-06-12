
from rest_framework import generics
from .serializers import TaskSerializer
from .models import Task

# Create your views here.

class TaskListCreateAPIView(generics.ListCreateAPIView):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
  

class TaskRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
  