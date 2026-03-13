import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0003_category_restaurant_dish_restaurant'),
        ('tenants', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='restaurant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='categories', to='tenants.restaurant'),
        ),
        migrations.AlterField(
            model_name='dish',
            name='restaurant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dishes', to='tenants.restaurant'),
        ),
    ]
