from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import Dish
from .serializers import DishSerializer

class DishViewSet(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer

    def get_permissions(self):
        if self.action in ('list', 'retrieve'):
            return [AllowAny()]
        return [IsAdminUser()]