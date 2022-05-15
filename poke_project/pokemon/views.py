from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class PokemonReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

class PokemonUserViewSet(viewsets.ModelViewSet):
    queryset = PokemonUser.objects.all()
    serializer_class = PokemonUserSerializer

class PokemonInstanceReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
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

class PokemonInstanceCreateViewSet(viewsets.ModelViewSet):
    queryset = PokemonInstance.objects.all()
    serializer_class = PokemonInstanceSerializer

    permission_classes = [IsAuthenticated]