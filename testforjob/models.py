#from django.db import models
from django.db.models import * #Model, IntegerField, CharField, TextField, DateTimeField, ForeingKey

# Create your models here.

class Manufacturer(Model):
  name = CharField(max_length=20)


class Car(Model):
  model = CharField(max_length=50, default='', unique=False, blank=True)
  color = CharField(max_length=20, default='', unique=False, blank=True)
  production = DateTimeField()
  power = IntegerField()
  mileage = IntegerField()
  manufacturer = ForeignKey('Manufacturer', on_delete=CASCADE)
  owner = ForeignKey('Owner', related_name='cars', on_delete=CASCADE)
  comment = TextField(max_length=200, default='', unique=False, blank=True)


class Owner(Model):
  name = CharField(max_length=50, default='', unique=False, blank=True)
  patronymic = CharField(max_length=50, default='', unique=False, blank=True)
  last_name = CharField(max_length=50, default='', unique=False, blank=True)
  age = IntegerField()
  gender = CharField(max_length=1, default='f', unique=False, blank=True)
  gender = CharField(max_length=1, default='f', unique=False, blank=True)
  comment = TextField(max_length=200, default='', unique=False, blank=True)
