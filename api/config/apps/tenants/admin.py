from django.contrib import admin
from .models import Restaurant, GalleryImage


@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'owner', 'plan', 'is_active', 'created_at')
    list_filter = ('plan', 'is_active')
    search_fields = ('name', 'slug', 'email')
    prepopulated_fields = {'slug': ('name',)}


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('restaurant', 'alt_text', 'order')
    list_filter = ('restaurant',)
