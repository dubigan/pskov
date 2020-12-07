#from django.db import models
from django.db.models import * #Model, IntegerField, CharField, TextField, DateTimeField, ForeingKey

# Create your models here.

class Car(Model):
  model = CharField(max_length=50, default='', unique=False, blank=True, null=True)
  color = CharField(max_length=20, default='', unique=False, blank=True, null=True)
  production = CharField(max_length=50, default='', unique=False, blank=True, null=True)
  power = IntegerField(blank=True, null=True)
  mileage = IntegerField(blank=True, null=True)
  #manufacturer = ForeignKey('Manufacturer', on_delete=CASCADE)
  manufacturer = CharField(max_length=50, default='', null=True, unique=False, blank=True)
  owner = ForeignKey('Owner', related_name='cars', on_delete=CASCADE, null=True)
  comment = TextField(max_length=200, default='', unique=False, blank=True, null=True)


class Owner(Model):
  name = CharField(max_length=50, default='', unique=False, blank=True)
  patronymic = CharField(max_length=50, default='', unique=False, blank=True)
  last_name = CharField(max_length=50, default='', unique=False, blank=True)
  age = IntegerField(blank=True, null=True)
  gender = CharField(max_length=1, default='f', unique=False, blank=True)
  gender = CharField(max_length=1, default='f', unique=False, blank=True)
  comment = TextField(max_length=200, default='', unique=False, blank=True)
