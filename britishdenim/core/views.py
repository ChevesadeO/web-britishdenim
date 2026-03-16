from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def regiprod(request):
    return render(request, 'regiprod.html')


def contacto(request):
    return render(request, 'contactenos.html')

def perfil(request):
    return render(request, 'perfil.html')


def dashboard(request):
    return render(request, 'dashboard.html')