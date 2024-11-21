from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class FormUser(AbstractUser):
	email= models.EmailField(max_length=50)
	password = models.CharField(max_length=250)