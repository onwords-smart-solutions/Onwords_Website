from django.db import models
from django.urls import reverse

# Create your models here.

class Member(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)


class Item(models.Model):
    title=models.CharField(max_length=100)
    des=models.TextField
def _str_(self):
     return self.title
def get_absolute_url(self):
     return reverse('detail',args=[self.id,])