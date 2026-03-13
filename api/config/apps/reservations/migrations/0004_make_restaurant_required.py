import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservations', '0003_reservation_restaurant_reservation_status'),
        ('tenants', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='restaurant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reservations', to='tenants.restaurant'),
        ),
    ]
