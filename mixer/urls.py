from django.urls import path
from . import views

urlpatterns = [
    path('', views.mixer_request, name='mixer_path'),
]
