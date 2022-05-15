from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Pokemon(models.Model):
    name = models.CharField(max_length=30)
    hp = models.IntegerField()
    attack = models.IntegerField()
    defense = models.IntegerField()
    type = models.CharField(max_length=30)

    def __str__(self):
        return self.name

# class User(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)