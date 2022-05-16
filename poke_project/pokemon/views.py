from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q

# Create your views here.
class PokemonReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

class PokemonUnownedViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

    def get_queryset(self):
        owned_list = []
        for instance in PokemonInstanceViewSet.get_queryset(self): 
            owned_list.append(instance.pokemon.name)
        owned_list = list(dict.fromkeys(owned_list))
        return Pokemon.objects.filter(~Q(name__in=owned_list))

# class PokemonUserViewSet(viewsets.ModelViewSet):
#     queryset = PokemonUser.objects.all()
#     serializer_class = PokemonUserSerializer

class PokemonInstanceViewSet(viewsets.ModelViewSet):
    queryset = PokemonInstance.objects.all()
    serializer_class = PokemonInstanceSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """
        Filter objects so a user only sees his own stuff.
        If user is admin, let him see all.
        """
        if self.request.user.is_staff:
            return PokemonInstance.objects.all()
        else:
            return PokemonInstance.objects.filter(owner=self.request.user)
            

# class PokemonInstanceCreateViewSet(viewsets.ModelViewSet):
#     queryset = PokemonInstance.objects.all()
#     serializer_class = PokemonInstanceSerializer

#     permission_classes = [IsAuthenticated]
    