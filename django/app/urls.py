from django.urls import path

from . import views

urlpatterns = [
	path('', views.hello_world),
	# path('/login', views.login_page, name='login_page')
	path('login/', views.login),
	path('signup/', views.signup),
	path('token/', views.token, name='token')
]