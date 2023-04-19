from django.urls import path
from . import views


urlpatterns = [
    path('api/post/',views.postApi),
    path('api/post/<str:pk>/',views.postModifyApi),
    path('api/allposts/',views.getAllPosts),
    path('api/donation/<str:pk>/',views.donationApi),
    
]