"""
URL configuration for todolist_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from todolist import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    
)
from . import views
urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('userprofile/',views.userProfile,name='user-profile'),
    path('list/',views.todoList,name='todo-list'),
    path('add/',views.addList, name='add-list'),
    path('delete/<str:pk>/',views.deleteList, name='delete-list'),
    path('update/<str:pk>/',views.updateStatus, name='update-status'),
    path('register/', views.registerUser, name='register'),
]
