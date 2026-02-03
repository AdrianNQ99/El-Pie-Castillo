from rest_framework import serializers
from .models import Dish

class DishSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    
    class Meta:
        model = Dish
        fields = ['id', 'category', 'category_name', 'name', 'description', 'price', 'available']
