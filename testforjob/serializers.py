from rest_framework import serializers
from .models import *

class ManufacturerSerializer(serializers.ModelSerializer):
  class Meta:
    model = Manufacturer
    fields = '__all__'


class CarSerializer(serializers.ModelSerializer):
  class Meta:
    model = Car
    fields = '__all__'


class OwnerSerializer(serializers.ModelSerializer):
  cars = CarSerializer(many=True, read_only=True)
  class Meta:
    model = Owner
    fields = '__all__'