from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('perfil/', views.perfil, name='perfil'),
    path('contacto/', views.contacto, name='contacto'),
    path('regiprod/', views.regiprod, name='regiprod'),
]