from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from todolist.models import  User,todo
from todolist.serializers import  TodoSerializer, UserSerializer,UserSerializerWithToken
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





@api_view(['GET'])
@permission_classes([IsAuthenticated,IsAuthenticated])
def todoList(request):
    # Retrieve all todo items from the database
    print('request data ',request.user)

    # todo_items = todo.objects.all()
    todo_items = todo.objects.filter(user=request.user)
    # Serialize the todo items
    serializer = TodoSerializer(todo_items, many=True)
    print('serializer data',serializer)
    # Return the serialized data as JSON response
    return Response(serializer.data)