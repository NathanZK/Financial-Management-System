# from django.shortcuts import render
from .models import *
from .userSerializers import *
from django.contrib.auth.models import User

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# Create your views here.

# @api_view(['GET'])
# def rolesApi(request):
#     roles = Role.objects.all()
#     serilizer = RoleSerializer(roles,many = True)
#     return Response(serilizer.data)

@api_view(['GET','POST'])
def userApi(request):
    if request.method == "GET":
        if not request.user.is_authenticated:
            return Response(status=401)
        try:
            curruser = request.user
            user = UserExtended.objects.get(user = curruser)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except Exception as e:
            print(e)
            return Response(status=500)
    elif request.method == "POST":
        try:
            username = request.data['username']
            email = request.data['email']
            password = request.data['password']
            name = request.data['name']
            isStudent = request.data['isStudent']
            defaultUser = User.objects.create(username=username,email=email,password=password)
            UserExtended.objects.create(user=defaultUser,money=0,name = name,isStudent = isStudent)
            return Response(status=200)
        except:
            return Response(status=500)
    else:
        return Response(status=400)
        