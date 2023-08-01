from .models import Movie
from rest_framework import serializers


class MovieSerailizer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Movie
        fields = '__all__'
