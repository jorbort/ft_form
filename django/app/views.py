from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.contrib.auth.models import User


def hello_world(request):
	return render(request,'index.html',{})

def login_page(request):
	return render(request, 'login.html')

# @api_view(['GET'])
# def login(request):
# 	return render(request,'index.html',{})

@api_view(['POST'])
def login(request):
	user = get_object_or_404(User, username=request.data['username'])
	if not user.check_password(request.data['password']):
		return Response({"detail": "Not found."}, status=status.HTTP_400_NOT_FOUND)
	token, created = Token.objects.get_or_create(user=user)
	serializer = UserSerializer(instance=user)
	return Response({"token": token.key, "user": serializer.data})

@api_view(['POST'])
def signup(request):
	serializer = UserSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
		user = User.objects.get(username=request.data['username'])
		user.set_password(request.data['password'])
		user.save()
		token = Token.objects.create(user=user)
		return Response({"token": token.key, "user": serializer.data})
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def token(request):
	return Response({})

