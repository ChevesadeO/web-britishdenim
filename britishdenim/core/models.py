from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

# Modelo para el Perfil de Usuario
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.user.username

# NUEVO: Modelo para registrar los productos vendidos
class ProductoRegistrado(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="productos")
    referencia = models.CharField(max_length=50)
    fecha = models.DateTimeField(auto_now_add=True)
    descripcion = models.TextField(default="Producto registrado en British Denim")

    def __str__(self):
        return f"{self.referencia} - {self.user.username}"


# --- SIGNALS (Para crear el perfil automáticamente) ---
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    Profile.objects.get_or_create(user=instance)