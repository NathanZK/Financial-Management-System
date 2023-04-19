from django.urls import path
from . import views


urlpatterns = [
    path('api/category/',views.categoryApi),
    path('api/category/<str:pk>/',views.modifyCategoryApi),
    path('api/plan/',views.planApi),
    path('api/plan/<str:pk>/',views.modifyPlanApi),
    path('api/expense/',views.expenseApi),
    path('api/expense/<str:pk>/',views.modifyExpenseApi),
    path('api/income/',views.incomeApi),
    path('api/income/<str:pk>/',views.modifyIncomeApi),
]