from .models import *
from rest_framework.serializers import ModelSerializer,SerializerMethodField

class UserSerializer(ModelSerializer):
    username = SerializerMethodField()
    email = SerializerMethodField()
    # roles =SerializerMethodField()
    
    
    def get_username(self,object):
        return object.user.username
        
    def get_email(self,object):
        return object.user.email
    # def get_roles(self,object):
    #     return [role.name for role in object.role]
    
    
    class Meta:
        model = UserExtended
        fields = ['username','email','money','name','isStudent']
    
# class RoleSerializer(ModelSerializer):
#     class Meta:
#         model = Role
#         fields = '__all__'    
    