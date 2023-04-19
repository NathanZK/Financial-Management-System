from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Role(models.Model):
    name = models.CharField(blank=False,null=False,max_length=20)
    
    class Meta:
        ordering = ['name']

class UserExtended(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    money = models.IntegerField()
    role = models.ManyToManyField(Role)
    # profilePicture = models.ImageField()
    
    