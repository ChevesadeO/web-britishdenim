from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required


def index(request):
    return render(request, 'index.html')


def regiprod(request):
    return render(request, 'regiprod.html')


def contacto(request):
    return render(request, 'contactenos.html')


def perfil(request):

    if request.method == "POST":

        email = request.POST.get("email")
        password = request.POST.get("password")
        nombre = request.POST.get("nombre")

        # REGISTRO
        if nombre:
            if User.objects.filter(username=email).exists():
                return render(request, "perfil.html", {
                    "error": "El usuario ya existe"
                })

            user = User.objects.create_user(
                username=email,
                email=email,
                password=password,
                first_name=nombre
            )

            login(request, user)
            return redirect("dashboard")

        # LOGIN
        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            return redirect("dashboard")

        return render(request, "perfil.html", {
            "error": "Usuario o contraseña incorrectos"
        })

    return render(request, "perfil.html")


@login_required
def dashboard(request):
    return render(request, "dashboard.html")