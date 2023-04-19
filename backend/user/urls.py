from django.urls import path
from . import views

urlpatterns = [
    path('api/user/',views.userApi),
    # path('api/roles/',views.rolesApi)
]