from django.db import models


class Reservation(models.Model):
    customer_name = models.CharField(max_length=100)
    reservation_date = models.CharField(max_length=50)
    number_of_people = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.customer_name} - {self.reservation_date}"
