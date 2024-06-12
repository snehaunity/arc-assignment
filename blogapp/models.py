from django.db import models

# Create your models here.
class Task(models.Model):
    title=models.CharField(null=True,blank=True,max_length=50)
    description=models.TextField(null=True,blank=True)
    PENDING = 'P'
    COMPLETED = 'C'
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (COMPLETED, 'Completed'),
    ]

    status = models.CharField(
        max_length=1,
        choices=STATUS_CHOICES,
        default=PENDING,
    )

    def __str__(self):
        return self.id