from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from todolist.models import  User,todo
from todolist.serializers import  TodoSerializer, UserSerializer,UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from django.contrib.auth.hashers import make_password
# Create your views here.


# resources for user authentication
#     https://jwt.io/    to decode the user token 
#   https://django-rest-framework-simplejwt.readthedocs.io/en/latest/     jwt authenticaton
#   https://www.django-rest-framework.org/api-guide/authentication/     json authentication api guid
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):  # copide from simplejwt  from git hun repo    https://github.com/jazzband/djangorestframework-simplejwt/blob/master/rest_framework_simplejwt/serializers.py
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data

        for k,v in serializer.items():
            data[k]  =   v
        
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def userProfile(request):
    user = request.user
    if user.is_authenticated:
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)
    else:
        return Response({"message": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def todoList(request):
    # Retrieve all todo items from the database
    # print('request data ',request.user)

    # todo_items = todo.objects.all()
    todo_items = todo.objects.filter(user=request.user)
    # Serialize the todo items
    serializer = TodoSerializer(todo_items, many=True)
    # print('serializer data',serializer)
    # Return the serialized data as JSON response
    return Response(serializer.data)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addList(request):

    user = request.user
    data = request.data['todo']
    status = request.data['status']
    # print('data from request user',request.data['item'])
    item = todo.objects.create(
        user = user,
        todo = data,
        status = status,
    )
    return Response({'detail' : 'Todo is created' })


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteList(request,pk):
    print("pk from front end ", pk)
    user = request.user
    deleteItem = todo.objects.get(user = user,id = pk)
    deleteItem.delete()
    return Response({'detail' : 'Todo is deleted' })



@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def updateStatus(request,pk):
    user = request.user
    print('request user  data',user)
    status = request.data.get('statusvalue')

    
    print('request data',status)
    try:
        # Get the todo item by its primary key and user
        todo_item = todo.objects.get(user=user, id=pk)
    except todo.DoesNotExist:
        return Response({'detail': 'Todo item not found'}, status=status.HTTP_404_NOT_FOUND)
    status = request.data.get('status')  # Get the new status from request data
    if status is not None:  # Check if new status is provided
        todo_item.status = status  # Update the status
        todo_item.save()  # Save the changes to the database
        return Response({'detail': 'Todo status updated successfully'})
    else:
        return Response({'detail': 'No new status provided'}, status=status.HTTP_400_BAD_REQUEST)
    





@api_view(['POST'])
def registerUser(request):
    data = request.data
    try :
        user = User.objects.create(
            first_name = data['name'],
            username = data['email'],
            email = data['email'],
            password = make_password(data['password']),
        )
        serializer = UserSerializerWithToken(user,many=False)
        return Response(serializer.data)
    except:
        message = {'detail':'User with this email alread exist'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
