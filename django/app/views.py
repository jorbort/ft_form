from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.

def hello_world(request):
	return render(request,'index.html',{})

def login_page(request):
	return render(request, 'login.html')