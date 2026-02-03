from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='/admin/')),
    path("admin/", admin.site.urls),
    path("api/menu/", include("config.apps.menu.urls")),
    path("api/reservations/", include("config.apps.reservations.urls")),
]
