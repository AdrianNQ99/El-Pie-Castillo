from django.db import models
from django.contrib.auth.models import User
import uuid


class Restaurant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='restaurants')

    # Identidad
    slug = models.SlugField(max_length=80, unique=True, db_index=True)
    name = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    tagline = models.CharField(max_length=200, blank=True)

    # Contacto
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    whatsapp = models.CharField(max_length=20, blank=True)
    address = models.TextField(blank=True)
    maps_embed_url = models.URLField(blank=True)

    # Visual
    logo = models.ImageField(upload_to='restaurants/logos/', blank=True)
    hero_image = models.ImageField(upload_to='restaurants/heroes/', blank=True)
    primary_color = models.CharField(max_length=7, default='#CA8A04')

    # Horarios: {"lunes": {"open": "13:00", "close": "23:00"}, ...}
    schedule = models.JSONField(default=dict, blank=True)

    # Redes sociales: {"instagram": "url", "facebook": "url", ...}
    social_links = models.JSONField(default=dict, blank=True)

    # Config
    is_active = models.BooleanField(default=True)
    plan = models.CharField(max_length=20, choices=[
        ('basic', 'Básico'),
        ('pro', 'Pro'),
        ('premium', 'Premium'),
    ], default='basic')

    # Stripe
    stripe_customer_id = models.CharField(max_length=100, blank=True)
    stripe_subscription_id = models.CharField(max_length=100, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name


class GalleryImage(models.Model):
    restaurant = models.ForeignKey(
        Restaurant,
        on_delete=models.CASCADE,
        related_name='gallery_images',
    )
    image = models.ImageField(upload_to='restaurants/gallery/')
    alt_text = models.CharField(max_length=200, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.restaurant.name} — image {self.order}"
