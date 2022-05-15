from dataclasses import fields
from rest_framework import serializers
from .models import *

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = ['name', 'hp', 'attack', 'defense', 'type']

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['pokemon']
