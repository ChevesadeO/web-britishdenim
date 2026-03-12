from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def perfil(request):
    return render(request, 'perfil.html')

def contacto(request):
    return render(request, 'contactenos.html')

def regiprod(request):
    return render(request, 'regiprod.html')