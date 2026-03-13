"""
Management command: migrate_to_tenant

Creates the first Restaurant tenant for El Pie Castillo and assigns all
existing Category, Dish, and Reservation records to it.

Usage:
    python manage.py migrate_to_tenant
    python manage.py migrate_to_tenant --email admin@example.com

The command is idempotent: running it a second time with the same slug
will skip creation and only reassign records that still have NULL restaurant.
"""

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from config.apps.tenants.models import Restaurant
from config.apps.menu.models import Category, Dish
from config.apps.reservations.models import Reservation


class Command(BaseCommand):
    help = 'Create the first tenant (El Pie Castillo) and migrate existing data to it.'

    def add_arguments(self, parser):
        parser.add_argument(
            '--email',
            default='admin@elpiecastillo.com',
            help='Email for the owner superuser (default: admin@elpiecastillo.com)',
        )

    def handle(self, *args, **options):
        email = options['email']

        # 1. Ensure a superuser / owner exists
        owner, created = User.objects.get_or_create(
            username='admin',
            defaults={
                'email': email,
                'is_staff': True,
                'is_superuser': True,
            },
        )
        if created:
            owner.set_password('changeme123')
            owner.save()
            self.stdout.write(self.style.WARNING(
                f'Superuser "admin" created with password "changeme123". '
                f'Change it immediately with: python manage.py changepassword admin'
            ))
        else:
            self.stdout.write(f'Using existing user: {owner.username}')

        # 2. Create the Restaurant tenant (idempotent)
        restaurant, created = Restaurant.objects.get_or_create(
            slug='el-pie-castillo',
            defaults={
                'owner': owner,
                'name': 'El Pie Castillo',
                'description': 'Cocina casera con ingredientes locales al pie del castillo.',
                'tagline': 'Cocina francesa artesanal',
                'email': email,
                'primary_color': '#CA8A04',
            },
        )
        if created:
            self.stdout.write(self.style.SUCCESS(f'Restaurant created: {restaurant.name} (slug={restaurant.slug})'))
        else:
            self.stdout.write(f'Restaurant already exists: {restaurant.name}')

        # 3. Reassign orphan records (restaurant IS NULL)
        categories_updated = Category.objects.filter(restaurant__isnull=True).update(restaurant=restaurant)
        dishes_updated = Dish.objects.filter(restaurant__isnull=True).update(restaurant=restaurant)
        reservations_updated = Reservation.objects.filter(restaurant__isnull=True).update(restaurant=restaurant)

        self.stdout.write(self.style.SUCCESS(
            f'Migrated → Categories: {categories_updated}, '
            f'Dishes: {dishes_updated}, '
            f'Reservations: {reservations_updated}'
        ))
