from django.urls import path
from . import views

urlpatterns = [

    path('', views.index, name='index'),
    path('perfil/', views.perfil, name='perfil'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('regiprod/', views.regiprod, name='regiprod'),
    path('contacto/', views.contacto, name='contacto'),
    path('logout/', views.logout_view, name='logout'),

]