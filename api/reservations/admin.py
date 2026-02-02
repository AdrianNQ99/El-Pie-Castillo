from django.contrib import admin

from .models import Reservation


@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ("customer_name", "reservation_date", "number_of_people", "created_at")
    search_fields = ("customer_name", "reservation_date")
    list_filter = ("reservation_date",)
