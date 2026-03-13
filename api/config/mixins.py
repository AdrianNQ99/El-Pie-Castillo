from django.shortcuts import get_object_or_404
from config.apps.tenants.models import Restaurant


class TenantViewMixin:
    """
    Filtra automáticamente los querysets por el restaurante del request.

    El slug del restaurante se lee del parámetro de URL `restaurant_slug`.
    Todas las views de tenant deben heredar este mixin antes del ViewSet base.

    Ejemplo:
        class DishViewSet(TenantViewMixin, viewsets.ModelViewSet):
            queryset = Dish.objects.all()
            serializer_class = DishSerializer
    """

    def get_restaurant(self):
        slug = self.kwargs.get('restaurant_slug')
        return get_object_or_404(Restaurant, slug=slug, is_active=True)

    def get_queryset(self):
        return super().get_queryset().filter(restaurant=self.get_restaurant())

    def perform_create(self, serializer):
        serializer.save(restaurant=self.get_restaurant())
