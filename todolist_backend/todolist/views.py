from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from todolist.models import  User
from todolist.serializers import  UserSerializer,UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
# Create your views here.




def user(request):
    pass

def todo(request):
    context={}
    return render('<h1>Wlocome to todo </h1>',context=context)