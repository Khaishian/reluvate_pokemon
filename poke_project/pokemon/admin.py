from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Pokemon)
admin.site.register(PokemonUser)
admin.site.register(PokemonInstance)