#from django.db import models
from django.db.models import * #Model, IntegerField, CharField, TextField, DateTimeField, ForeingKey

# Create your models here.

class Manufacturer(Model):
  name = CharField(max_length=20)


class Car(Model):
  model = CharField(max_length=20)
  color = CharField(max_length=5)
  registration = DateTimeField()
  power = IntegerField()
  mileage = IntegerField()
  owner = ForeignKey('Owner', on_delete=CASCADE)
  manufacturer = ForeignKey('Manufacturer', on_delete=CASCADE)
  comment = TextField(max_length=200)


class Owner(Model):
  name = CharField(max_length=20)
  last_name = CharField(max_length=20)
  age = IntegerField()
  gender = CharField(max_length=1)
  comment = TextField(max_length=200)
