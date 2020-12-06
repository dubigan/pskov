from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from django.core.paginator import Paginator
from rest_framework.renderers import JSONRenderer
from rest_framework_csv.renderers import CSVRenderer
from django.utils.encoding import smart_text
from rest_framework import renderers
from .models import *
from .serializers import *

def getOwner(request):
  owner_pk = request.data.get('item_pk', None)
  return Owner.objects.get(pk=owner_pk)


class OwnersListView(APIView):

  def get(self, request, format=None):
    # owners = Owner()
    # ownersSer = OwnerSerializer(owners)
    return Response()

  def post(self, request, format=None):
    #print('post owners', request)
    if request.data.get('btn_del', None) != None:
      owner = getOwner(request)
      Car.objects.filter(owner=owner).delete()
      owner.delete()
    
    if request.data.get('btn_edit', None) != None:
      owner = getOwner(request)
      request.session['owner_pk'] = owner.pk
      return Response({ 'redirect': '/testforjob/owner'})

    if request.data.get('btn_add', None) != None:
      request.session['owner_pk'] = -1
      return Response({ 'redirect': '/testforjob/owner'})
    
    if (sortedBy := request.data.get('sorted_by', None)) != None:
      #print('owners post sortedBy', sortedBy)
      owners = Owner.objects.all()
      name = sortedBy['name']
      if len(name) > 0:
        direction = '-' if sortedBy['direction'] == 'desc' else ''
        owners = owners.order_by(direction + name)
      ownersSer = OwnerSerializer(owners, many=True)
    return Response(ownersSer.data)


class OwnerDetailView(APIView):

  def get(self, request, format=None):
    return Response()

  def post(self, request, format=None):
    #print('OwnerDetailView', request.data)
    if request.data.get('btn_add', None) != None:
      request.session['owner_pk'] = request.data.get('owner_pk', None)
      request.session['car_pk'] = -1
      request.session['back_from_car'] = request.data.get('url', None)
      return Response({ 'redirect': '/testforjob/car'})

    # getOwner
    owner = None
    if (owner_pk := request.session.get('owner_pk', -1)) != -1:
      owner = Owner.objects.get(pk=owner_pk)
    else:
      owner = Owner()
    
    if (owner_data := request.data.get('owner', None)) != None: # save owner
      print('OwnerDetailView owner_data', owner_data)
      ownerSer = OwnerSerializer(owner, data=owner_data)
      if ownerSer.is_valid(raise_exception=True):
        owner = ownerSer.save()
    
    ownerSer = OwnerSerializer(owner)
    #print('OwnerDetailView', ownerSer.data)
    return Response(ownerSer.data)


def getCar(request):
  car_pk = request.data.get('item_pk', None)
  return Car.objects.get(pk=car_pk)

class CarsListView(APIView):

  def get(self, request, format=None):
    return Response()

  def post(self, request, format=None):
    if request.data.get('btn_edit', None) != None:
      car = getCar(request)
      request.session['car_pk'] = car.pk
      request.session['back_from_car'] = request.data.get('url', None)
      return Response({ 'redirect': '/testforjob/car'})

    if request.data.get('btn_del', None) != None:
      car = getCar(request)
      car.delete()

    cars = None
    if (owner_pk := request.data.get('owner', -1)) != -1:
      #print('CarsListView owner_pk', owner_pk)
      try:
        cars = Car.objects.filter(owner = owner_pk)
      except Exception as e:
        print('CarsListView', e) 
        cars = Car.objects.none()
    else:
      cars = Car.objects.all()
    #carsSer = CarSerializer(cars, many=True)

    if (sortedBy := request.data.get('sorted_by', None)) != None:
      #print('owners post sortedBy', sortedBy)
      #cars = Car.objects.all()
      name = sortedBy['name']
      if len(name) > 0:
        direction = '-' if sortedBy['direction'] == 'desc' else ''
        cars = cars.order_by(direction + name)
    
    carsSer = CarSerializer(cars, many=True)
    #print('CarsListView', carsSer.data)

    return Response(carsSer.data)
  

class CarDetailView(APIView):

  def get(self, request, format=None):
    return Response()

  def post(self, request, format=None):
    car = Car()
    if (owner_pk := request.session.get('owner_pk', -1)) != -1:
      owner = Owner.objects.get(pk = owner_pk)
      car.owner = owner
    if (car_pk := request.session.get('car_pk', -1)) > -1:
      car = Car.objects.get(pk=car_pk)
    carSer = CarSerializer(car)

    if (car_data := request.data.get('car', None)) != None: # save car
      print('CarDetailView car_data', car_data)
      #owner_pk = request.session['owner_pk']
      carSer = CarSerializer(car, data=car_data)
      if carSer.is_valid(raise_exception=True):
        car = carSer.save()
        if (back_from_car := request.session.get('back_from_car', None)) != None:
          return Response({'redirect': back_from_car.replace('/api', '')})

    return Response(carSer.data)


class Dashboard(APIView):
  def get(self, request, format=None):
    return Response()

  def post(self, request, format=None):
    return Response()


def removeId(data):
  for o in data:
    #print('download_json', o)
    try:
      o.pop('id')
      for car in o['cars']:
        print('download_json', car)
        car.pop('id')
        #car.pop('owner')
    except: pass

def getDataForDownload():
  owners = Owner.objects.all()
  ownersSer = OwnerSerializer(owners, many=True) 
  removeId(ownersSer.data)
  return ownersSer.data

@api_view(['POST',])
@renderer_classes((CSVRenderer,))
def download_csv(request, format=None):
  return Response(getDataForDownload(), headers={'content-disposition': 'attachment; filename="file.csv"'} )

@api_view(['POST',])
@renderer_classes((JSONRenderer,))
def download_json(request, format=None):
  return Response(getDataForDownload(), headers={'content-disposition': 'attachment; filename="file.json"'} )

class PlainTextRenderer(renderers.BaseRenderer):
    media_type = 'text/plain'
    format = 'txt'

    def render(self, data, media_type=None, renderer_context=None):
      print('PlainTextRenderer', data)
      return smart_text(data, encoding=self.charset)

@api_view(['POST',])
@renderer_classes((PlainTextRenderer,))
def download_text(request, format=None):
  return Response(getDataForDownload(), headers={'content-disposition': 'attachment; filename="file.txt"'} )


