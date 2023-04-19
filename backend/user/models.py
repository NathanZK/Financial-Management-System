from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# class Role(models.Model):
#     name = models.CharField(blank=False,null=False,max_length=20)
    
#     def __str__(self) -> str:
#         return self.name
    
#     class Meta:
#         ordering = ['name']

class UserExtended(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    money = models.IntegerField(default=0)
    isStudent = models.BooleanField(null=False,blank=False)
    def __str__(self) -> str:
        return self.name
    
    # profilePicture = models.ImageField()
    
    