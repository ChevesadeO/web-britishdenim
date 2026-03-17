from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout


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

    # EDITAR PERFIL
    if request.method == "POST":

        user = request.user

        user.username = request.POST.get("email")
        user.email = request.POST.get("email")
        user.first_name = request.POST.get("first_name")
        user.last_name = request.POST.get("last_name")

        user.save()

        return redirect("dashboard")

    return render(request, "dashboard.html")


# CERRAR SESIÓN
def logout_view(request):
    logout(request)
    return redirect("index")