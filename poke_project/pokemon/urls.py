from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'allpokemon', PokemonReadOnlyViewSet)
router.register(r'users', PokemonUserViewSet)
router.register(r'mypokemon', PokemonInstanceReadOnlyViewSet, basename="mypokemon")
router.register(r'addpokemon', PokemonInstanceCreateViewSet, basename="addpokemon")


urlpatterns = [
    re_path(r'^', include(router.urls)),
]