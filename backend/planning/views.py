from django.shortcuts import render

from .models import *
from .planningSerializers import *

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import json
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

#categories

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def categoryApi(request):
    if request.method == "GET":
        try:
            categories = Category.objects.filter(creator=request.user)
            serilizer = CategorySerializer(categories,many = True)
            return Response(serilizer.data)
        except:
            return Response(status=400)
    elif request.method == 'POST':
        try:
            previous = Category.objects.filter(name = request.data['name'],creator = request.user)
            if len(previous)>0:
                return Response(status=400)
            Category.objects.create(name = request.data['name'],creator=request.user)
            return Response(status=201)
        except Exception as e:
            print(e)
            return Response(status=500)
    else:
        return Response(status=400)
    

@api_view(['PUT','DELETE'])
@permission_classes([IsAuthenticated])
def modifyCategoryApi(request,pk):
    if request.method == "DELETE":
        try:
            category = Category.objects.get(id=pk)
            category.delete()
            return Response(status=200)
        except:
            return Response(status=400)
    elif request.method == "PUT":
        try:
            try:
                category = Category.objects.get(id=pk)
            except:
                return Response(status=400)
            category.name = request.data['name']
            category.save()
            return Response(status=200)
        except Exception as e:
            return Response(status=500)
        
    else:
        return Response(status=400)
        
    
    
    
#plan
@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def planApi(request):
    if request.method == 'GET':
        try:
            plans = Plan.objects.filter(creator = request.user)
            serializer = PlanSerializer(plans,many = True)
            return Response(serializer.data)
        except Exception as e:
            print(e)
            return Response(status=500)
    elif request.method == "POST":
        try:
            categoryId = json.loads(request.data['category'])['id']
            category = Category.objects.get(id = categoryId)
            Plan.objects.create(category = category,creator=request.user,amount = request.data['amount'])
            return Response(status=200)
        except Exception as e:
            print(e)
            return Response(status=500)
        
    else:
        return Response(status=400)
    

@api_view(['PUT','DELETE'])
@permission_classes([IsAuthenticated])     
def modifyPlanApi(request,pk):
    if request.method == "DELETE":
        try:
            try:
                plan = Plan.objects.get(id=pk)
            except Exception as e:
                print(e)
                return Response(status=400)
            plan.delete()
            return Response(status=200)
        except:
            return Response(status=500)
    elif request.method == 'PUT':
        try:
            categoryId = json.loads(request.data['category'])['id']
            category = Category.objects.get(id = categoryId)
            plan = Plan.objects.get(id=pk)
            plan.category = category
            plan.amount = request.data['amount']
            plan.save()
            return Response(status=200)
        except:
            return Response(status=400)
            
    else:
        return Response(status=400)


#expenses
@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def expenseApi(request):
    if request.method == 'GET':
        try:
            expenses = Expense.objects.filter(creator = request.user)
            serializer = ExpenseSerializer(expenses,many = True)
            return Response(serializer.data)
        except Exception as e:
            print(e)
            return Response(status=500)
    elif request.method == "POST":
        try:
            categoryId = json.loads(request.data['category'])['id']
            category = Category.objects.get(id = categoryId)
            Expense.objects.create(category = category,creator=request.user,amount = request.data['amount'])
            return Response(status=200)
        except Exception as e:
            print(e)
            return Response(status=500)
        
    else:
        return Response(status=400)
    

@api_view(['PUT','DELETE'])
@permission_classes([IsAuthenticated])     
def modifyExpenseApi(request,pk):
    if request.method == "DELETE":
        try:
            try:
                expense = Expense.objects.get(id=pk)
            except Exception as e:
                print(e)
                return Response(status=400)
            expense.delete()
            return Response(status=200)
        except:
            return Response(status=500)
    elif request.method == 'PUT':
        try:
            categoryId = json.loads(request.data['category'])['id']
            category = Category.objects.get(id = categoryId)
            expense = Expense.objects.get(id=pk)
            expense.category = category
            expense.amount = request.data['amount']
            expense.save()
            return Response(status=200)
        except:
            return Response(status=400)
            
    else:
        return Response(status=400)





#incomes
@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def incomeApi(request):
    if request.method == 'GET':
        try:
            incomes = Income.objects.filter(creator = request.user)
            serializer = IncomeSerializer(incomes,many = True)
            return Response(serializer.data)
        except Exception as e:
            print(e)
            return Response(status=500)
    elif request.method == "POST":
        try:
            categoryId = json.loads(request.data['category'])['id']
            category = Category.objects.get(id = categoryId)
            Income.objects.create(category = category,creator=request.user,amount = request.data['amount'])
            return Response(status=200)
        except Exception as e:
            print(e)
            return Response(status=500)
        
    else:
        return Response(status=400)
    

@api_view(['PUT','DELETE'])
@permission_classes([IsAuthenticated])     
def modifyIncomeApi(request,pk):
    if request.method == "DELETE":
        try:
            try:
                income = Income.objects.get(id=pk)
            except Exception as e:
                print(e)
                return Response(status=400)
            income.delete()
            return Response(status=200)
        except:
            return Response(status=500)
    elif request.method == 'PUT':
        try:
            categoryId = json.loads(request.data['category'])['id']
            category = Category.objects.get(id = categoryId)
            income = Income.objects.get(id=pk)
            income.category = category
            income.amount = request.data['amount']
            income.save()
            return Response(status=200)
        except:
            return Response(status=400)
            
    else:
        return Response(status=400)
