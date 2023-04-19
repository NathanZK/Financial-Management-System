from .models import *
from rest_framework.serializers import ModelSerializer,SerializerMethodField

class UserSerializer(ModelSerializer):
    username = SerializerMethodField()
    email = SerializerMethodField()
    password = SerializerMethodField()
    
    def get_userName(self,object):
        return object.user.username
        
    def get_email(self,object):
        return object.user.email
    
    
    class Meta:
        model = UserExtended
        fields = ['username','email','money']
    
    
    