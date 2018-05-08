from rest_framework import serializers

from .models import Product, Choices


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'name',
            'rating',
            'price',
            'discount',
            'brand',
            'color'
        ]

    color = serializers.SerializerMethodField()

    def get_color(self, instance):
        names = []
        a = instance.color.get_queryset()
        for i in a:
            names.append(i.color)
        return names