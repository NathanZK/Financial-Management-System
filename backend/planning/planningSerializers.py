from .models import *
import json
from rest_framework.serializers import ModelSerializer,SerializerMethodField

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        
class PlanSerializer(ModelSerializer):
    category_obj = SerializerMethodField()
    
    def get_category_obj(self,object):
        return CategorySerializer(Category.objects.get(id = object.category.id)).data
        
    
    class Meta:
        model = Plan
        fields = ['category_obj','amount','created','id']
        
class IncomeSerializer(ModelSerializer):
    category_obj = SerializerMethodField()
    
    def get_category_obj(self,object):
        return CategorySerializer(Category.objects.get(id = object.category.id)).data
        
    
    class Meta:
        model = Plan
        fields = ['category_obj','amount','created','id']

class ExpenseSerializer(ModelSerializer):
    category_obj = SerializerMethodField()
    
    def get_category_obj(self,object):
        return CategorySerializer(Category.objects.get(id = object.category.id)).data
        
    
    class Meta:
        model = Plan
        fields = ['category_obj','amount','created','id']