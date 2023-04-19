# from django.shortcuts import render
from .models import *
from .userSerializers import *

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# Create your views here.

@api_view(['GET','POST','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def userApi(request):
    pass