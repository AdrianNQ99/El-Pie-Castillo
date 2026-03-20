from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAdminUser
from .models import Reservation
from .serializers import ReservationSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all().order_by('-created_at')
    serializer_class = ReservationSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return [IsAdminUser()]