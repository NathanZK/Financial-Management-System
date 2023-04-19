from .models import *
from rest_framework.serializers import ModelSerializer

class PostSerializer(ModelSerializer):
    
    class Meta:
        model = Post
        fields = '__all__'
        
class DonationSerializer(ModelSerializer):
    class Meta:
        model = Donation
        fields = '__all__'
        
    

