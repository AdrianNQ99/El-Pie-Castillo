from django.db import models


class Reservation(models.Model):
    restaurant = models.ForeignKey(
        'tenants.Restaurant',
        on_delete=models.CASCADE,
        related_name='reservations',
    )
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    date = models.DateField()
    time = models.TimeField()
    guests = models.PositiveIntegerField()
    message = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pendiente'),
        ('confirmed', 'Confirmada'),
        ('cancelled', 'Cancelada'),
    ], default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.date} {self.time}"