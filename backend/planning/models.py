from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=20)
    creator = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name
    
    class Meta:
        ordering = ['name']

class Plan(models.Model):
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    creator = models.ForeignKey(User,on_delete=models.CASCADE)
    amount = models.IntegerField(blank=False,null=False)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.creator.username + self.category.name
    
    class Meta:
        ordering = ['-created']
    
class Expense(models.Model):
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    creator = models.ForeignKey(User,on_delete=models.CASCADE)
    amount = models.IntegerField(blank=False,null=False)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.creator.username + self.category.name
    
    class Meta:
        ordering = ['-created']
    
class Income(models.Model):
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    creator = models.ForeignKey(User,on_delete=models.CASCADE)
    amount = models.IntegerField(blank=False,null=False)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.creator.username + self.category.name
    
    class Meta:
        ordering = ['-created']
    