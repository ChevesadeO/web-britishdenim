from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import Profile, ProductoRegistrado

# VISTA INDEX
def index(request):
    return render(request, 'index.html')

# VISTA PAGINA REGISTRO PRODUCTO (CONTENEDOR)
def regiprod(request):
    return render(request, 'regiprod.html')

# VISTA CONTACTO
def contacto(request):
    return render(request, 'contactenos.html')

# VISTA PERFIL (MANEJA LOGIN Y REGISTRO DESDE MODAL)
def perfil(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        nombre = request.POST.get("nombre")
        # Capturamos la referencia que viene desde el modal de regprod.html
        ref_venta = request.POST.get("referencia_venta")

        # --- LÓGICA DE REGISTRO DE NUEVO USUARIO ---
        if nombre: 
            if User.objects.filter(username=email).exists():
                return render(request, "perfil.html", {
                    "error": "El usuario ya existe"
                })

            # Creamos el usuario
            user = User.objects.create_user(
                username=email,
                email=email,
                password=password,
                first_name=nombre
            )

            # Si el usuario se registró desde la página de productos, guardamos la referencia
            if ref_venta:
                ProductoRegistrado.objects.create(
                    user=user, 
                    referencia=ref_venta,
                    descripcion="Producto registrado al crear cuenta"
                )

            login(request, user)
            return redirect("dashboard")

        # --- LÓGICA DE LOGIN NORMAL ---
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect("dashboard")

        return render(request, "perfil.html", {
            "error": "Usuario o contraseña incorrectos"
        })

    return render(request, "perfil.html")

# CERRAR SESIÓN
def logout_view(request):
    logout(request)
    return redirect("index")

# DASHBOARD (USUARIO LOGUEADO)
@login_required
def dashboard(request):
    # Obtenemos los productos del usuario logueado para mostrarlos en la tabla/lista
    productos = ProductoRegistrado.objects.filter(user=request.user).order_by('-fecha')

    if request.method == "POST":
        user = request.user

        # Identificamos si el POST es para registrar un producto nuevo desde el dashboard
        nueva_ref = request.POST.get("nueva_referencia")
        
        if nueva_ref:
            ProductoRegistrado.objects.create(
                user=user, 
                referencia=nueva_ref,
                descripcion="Registrado desde el panel de usuario"
            )
            return redirect("dashboard")

        # Si no es una referencia nueva, asumimos que es edición de perfil
        user.first_name = request.POST.get("first_name")
        user.last_name = request.POST.get("last_name")
        user.email = request.POST.get("email")
        user.username = request.POST.get("email") # Mantenemos username = email
        user.save()

        # Actualizamos el país en el modelo Profile
        profile = user.profile
        profile.country = request.POST.get("country")
        profile.save()

        return redirect("dashboard")

    return render(request, "dashboard.html", {"productos": productos})