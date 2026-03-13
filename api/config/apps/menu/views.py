from rest_framework import viewsets
from config.mixins import TenantViewMixin
from .models import Dish
from .serializers import DishSerializer


class DishViewSet(TenantViewMixin, viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer