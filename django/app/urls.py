from django.urls import path

from . import views

urlpatterns = [
	path('', hello_world), #http://localhost:8000
	path('/login', views.login_page, name='login_page')
]