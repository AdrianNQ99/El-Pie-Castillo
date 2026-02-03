from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='/admin/')),
    path("admin/", admin.site.urls),
    path("menu/", include("config.apps.menu.urls")),
    path("reservations/", include("config.apps.reservations.urls")),
]
