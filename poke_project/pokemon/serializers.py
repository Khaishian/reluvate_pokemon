from asyncore import read
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *
import random

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email']

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = ['id', 'name', 'hp', 'attack', 'defense', 'type']

class PokemonInstanceSerializer(serializers.ModelSerializer):
    pokemon = PokemonSerializer(read_only=True)
    owner = UserSerializer(read_only=True)
    level = serializers.IntegerField(read_only=True)

    pokemon_id = serializers.PrimaryKeyRelatedField(
        many=False, write_only=True, queryset=Pokemon.objects.all()
    )

    class Meta:
        model = PokemonInstance
        fields = ['id', 'pokemon', 'pokemon_id', 'level', 'owner']

    def create(self, validated_data): 
        pokemon = validated_data.pop("pokemon_id", None)
        validated_data["owner"] = self.context["request"].user
        validated_data["level"] = random.randint(1,100)
        pokemonInstance = PokemonInstance.objects.create(pokemon=pokemon, **validated_data)
        return pokemonInstance 


# class PokemonUserSerializer(serializers.ModelSerializer):
#     user = UserSerializer(read_only=True)
#     pokemon = PokemonSerializer(read_only=True)

#     class Meta:
#         model = PokemonUser
#         fields = ['user', 'pokemon']

