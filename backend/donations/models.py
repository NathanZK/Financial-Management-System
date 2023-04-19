from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Post(models.Model):
    creator = models.ForeignKey(User,on_delete=models.CASCADE)
    reason = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    def __str__(self) -> str:
        return self.creator.username + self.reason[:20]
    
    class Meta:
        ordering = ['-updated']
    
class Donation(models.Model):
    post = models.ForeignKey(Post,on_delete=models.CASCADE)
    donator = models.ForeignKey(User,on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.donator.username + "to" + self.post.reason[:10]
    
    class Meta:
        ordering = ['-created']
