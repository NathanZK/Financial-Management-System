from django.shortcuts import render
from .models import *
from .donationSerializers import *

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# Create your views here.


#post
@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def postApi(request):
    if request.method == "POST":
        reason = request.data['reason']
        amount = request.data['amount']
        try:
            Post.objects.create(creator = request.user,reason=reason,amount=amount)
            return Response(status=200)
        except Exception as e:
            print(e)
            return Response(status=200)
    elif request.method == "GET":
        posts = Post.objects.filter(creator = request.user)
        serilizer = PostSerializer(posts,many = True)
        return Response(serilizer.data)
    else:
        return Response(status=400)
        

@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def postModifyApi(request,pk):
    if request.method == "GET":
        try:
            try:
                post = Post.objects.get(id=pk)
            except:
                return Response(status=404)
            serilizer = PostSerializer(post)
            return Response(serilizer.data)
        except Exception as e:
            print(e)
            return Response(status=500)
    elif request.method == "PUT":
        try:
            try:
                post = Post.objects.get(id = pk)
            except Exception as e:
                print(e)
                return Response(status=404)
            post.reason = request.data['reason']
            post.amount = request.data['amount']
            post.save()
            return Response(status=200)
        except:
            return Response(status=500)
    elif request.method == "DELETE":
        try:
            try:
                post = Post.objects.get(id = pk)
            except Exception as e:
                print(e)
                return Response(status=404)
            post.delete()
            return Response(status=200)
        except:
            return Response(status=500)
        
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAllPosts(request):
    print("here")
    try:
        posts = Post.objects.all()
        serilizer = PostSerializer(posts,many = True)
        return Response(serilizer.data)
    except Exception as e:
        return Response(status=500)
        
            
            
#donation post amount donator created
@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def donationApi(request,pk):
    if request.method == 'GET':
        try:
            try:
                post = Post.objects.get(id=pk)
            except Exception as e:
                return Response(status=404)
            donations = Donation.objects.filter(post = post)
            serilizer = DonationSerializer(donations,many=True)
            return Response(serilizer.data)
        except Exception as e:
            print(e)
            return Response(status=500)
    elif request.method == "POST":
        try:
            try:
                post = Post.objects.get(id=pk)
            except Exception as e:
                return Response(status=404)
            amount = request.data['amount']
            user = request.user
            Donation.objects.create(post = post,donator=user,amount=amount)
            return Response(status=200)
        except Exception as e:
            return Response(status=500)
    else:
        return Response(status=400)
        