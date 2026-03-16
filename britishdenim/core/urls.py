from django.urls import path
from . import views

urlpatterns = [

path("", views.index, name="index"),

path("registro-producto/", views.regiprod, name="regiprod"),

path("contacto/", views.contacto, name="contacto"),

path("perfil/", views.perfil, name="perfil"),

path("dashboard/", views.dashboard, name="dashboard"),

]