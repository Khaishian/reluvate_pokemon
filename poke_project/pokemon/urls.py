from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'allpokemon', PokemonViewSet)
# router.register(r'users', UserViewSet)


urlpatterns = [
    re_path(r'^', include(router.urls)),
]