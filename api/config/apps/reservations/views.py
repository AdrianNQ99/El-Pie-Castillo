from rest_framework import viewsets
from config.mixins import TenantViewMixin
from .models import Reservation
from .serializers import ReservationSerializer


class ReservationViewSet(TenantViewMixin, viewsets.ModelViewSet):
    queryset = Reservation.objects.all().order_by('-created_at')
    serializer_class = ReservationSerializer