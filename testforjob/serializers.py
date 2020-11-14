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
  cars = CarSerializer(many=True)
  class Meta:
    depth = 2
    model = Owner
    fields = '__all__'

  def validate_name(self, data):
    if len(data) == 0: raise serializers.ValidationError("Поле Имя не может быть пустым")
    return data

  def validate_patronymic(self, data):
    return data
    
  def validate_last_name(self, data):
    if len(data) == 0: raise serializers.ValidationError("Поле Фамилия не может быть пустым")
    return data

  def validate_gender(self, data):
    if len(data) == 0: raise serializers.ValidationError("Поле Пол не может быть пустым")
    if data != 'm' and data != 'f': raise serializers.ValidationError("Неверный пол")
    return data

  def validate_age(self, data):
    if data < 18 or data > 120: raise serializers.ValidationError("Возраст должен быть между 18 и 120 годами")
    return data

  def update(self, instance, data):
    print('OwnerSerialize update', data)
    cars = None
    try: cars = data.pop('cars')
    except: pass
    instance.name = data.get('name', instance.name)
    instance.last_name = data.get('last_name', instance.last_name)
    instance.patronymic = data.get('patronymic', instance.patronymic)
    instance.gender = data.get('gender', instance.gender)
    instance.age = data.get('age', instance.age)
    instance.comment = data.get('comment', instance.comment)
    instance.save()
    Car.objects.filter(owner=instance).delete()
    if cars:
      for car in cars:
        Car.objects.create(owner=instance, **car)
    return instance
