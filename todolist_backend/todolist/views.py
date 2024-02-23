from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from todolist.models import  User
from todolist.serializers import  UserSerializer,UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
# Create your views here.


# resources for user authentication
#     https://jwt.io/    to decode the user token 
#   https://django-rest-framework-simplejwt.readthedocs.io/en/latest/     jwt authenticaton
#   https://www.django-rest-framework.org/api-guide/authentication/     json authentication api guid
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):  # copide from simplejwt  from git hun repo    https://github.com/jazzband/djangorestframework-simplejwt/blob/master/rest_framework_simplejwt/serializers.py
    def validate(self, attrs):
        data = super().validate(attrs)
        data['name'] = self.user.username
        data['email'] = self.user.email
        data['is_admin'] = self.user.is_superuser



        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



















def todo(request):
    context={}
    return render('<h1>Wlocome to todo </h1>',context=context)