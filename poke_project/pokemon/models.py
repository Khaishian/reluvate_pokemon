from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.
class Pokemon(models.Model):
    name = models.CharField(max_length=30)
    hp = models.IntegerField()
    attack = models.IntegerField()
    defense = models.IntegerField()
    type = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class PokemonInstance(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)
    level = models.IntegerField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

# class PokemonUser(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)