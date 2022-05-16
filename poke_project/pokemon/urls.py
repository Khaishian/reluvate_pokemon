from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'allpokemon', PokemonReadOnlyViewSet)
# router.register(r'users', PokemonUserViewSet)
router.register(r'unownedpokemon', PokemonUnownedViewSet)
router.register(r'mypokemon', PokemonInstanceViewSet, basename="mypokemon")
router.register(r'addpokemon', PokemonInstanceViewSet, basename="addpokemon")
router.register(r'releasepokemon', PokemonInstanceViewSet, basename="releasepokemon")


urlpatterns = [
    re_path(r'^', include(router.urls)),
]