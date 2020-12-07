from rest_framework import serializers
from datetime import date, datetime
from .models import *

class CarSerializer(serializers.ModelSerializer):
  class Meta:
    model = Car
    exclude = ('owner',)

  def validate_owner(self, data):
    print('validate_owner')
    return data

  def validate_manufacturer(self, data):
    if data == None or len(data) == 0: 
      raise serializers.ValidationError("Поле Производитель не может быть пустым")
    return data

  def validate_model(self, data):
    if data == None or len(data) == 0: 
      raise serializers.ValidationError("Поле Модель не может быть пустым")
    return data

  def validate_production(self, data):
    if data == None:
      raise serializers.ValidationError("Поле Дата выпуска не может быть пустым")

    try:
      dt = datetime.strptime(data, '%d.%m.%Y')
    except Exception as e: 
      raise serializers.ValidationError("Неверный формат даты. Используйте формат dd.mm.yyyy")
    
    if dt > datetime.now():
      raise serializers.ValidationError("Дата не может быть в будущем")
    
    return data

  def validate_color(self, data):
    if data == None or len(data) == 0: 
      raise serializers.ValidationError("Поле Цвет не может быть пустым")
    return data

  def validate_power(self, data):
    if data == None: 
      raise serializers.ValidationError("Поле Мощность не может быть пустым")
    return data

  def validate_mileage(self, data):
    if data == None: 
      raise serializers.ValidationError("Поле Пробег не может быть пустым")
    return data

  def update(self, instance, data):
    if instance.owner != None:
      instance.manufacturer = data.get('manufacturer', instance.manufacturer)
      instance.model = data.get('model', instance.model)
      instance.production = data.get('production', instance.production)
      instance.color = data.get('color', instance.color)
      instance.power = data.get('power', instance.power)
      instance.mileage = data.get('mileage', instance.mileage)
      instance.comment = data.get('comment', instance.comment)
      instance.save()
    return instance



class OwnerSerializer(serializers.ModelSerializer):
  cars = CarSerializer(many=True)
  class Meta:
    depth = 2
    model = Owner
    fields = '__all__'

  def validate_cars(self, data): # OK 
    return data

  def validate_name(self, data):
    if data == None or len(data) == 0: 
      raise serializers.ValidationError("Поле Имя не может быть пустым")
    return data

  def validate_patronymic(self, data):
    return data
    
  def validate_last_name(self, data):
    if data == None or len(data) == 0: 
      raise serializers.ValidationError("Поле Фамилия не может быть пустым")
    return data

  def validate_gender(self, data):
    if data == None or len(data) == 0: 
      raise serializers.ValidationError("Поле Пол не может быть пустым")
    if data != 'm' and data != 'f': 
      raise serializers.ValidationError("Неверный пол")
    return data

  def validate_age(self, data):
    if data == None or data < 18 or data > 120: 
      raise serializers.ValidationError("Возраст должен быть между 18 и 120 годами")
    return data

  def update(self, instance, data):
    #print('OwnerSerialize update', data)
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
    if cars != None:
      for car in cars:
        try: car.pop('owner')
        except: pass
        Car.objects.create(owner=instance, **car)
    return instance
