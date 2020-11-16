from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *

def getOwner(request):
  owner_pk = request.data.get('owner_pk', None)
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
      direction = '-' if sortedBy['direction'] == 'desc' else ''
      owners = Owner.objects.all().order_by(direction + sortedBy['name'])
      ownersSer = OwnerSerializer(owners, many=True)
    return Response(ownersSer.data)


class OwnerDetailView(APIView):

  def get(self, request, format=None):
    return Response()

  def post(self, request, format=None):
    #print('OwnerDetailView', request.data)
    if request.data.get('btn_add', None) != None:
      request.session['car_pk'] = -1
      request.session['back_from_car'] = request.path
      return Response({ 'redirect': '/testforjob/car'})

    # getOwner
    owner = None
    if (owner_pk := request.session.get('owner_pk', -1)) != -1:
      owner = Owner.objects.get(pk=owner_pk)
    else:
      owner = Owner()
    
    if (owner_data := request.data.get('owner', None)) != None: # save owner
      #print('OwnerDetailView owner_data', owner_data)
      ownerSer = OwnerSerializer(owner, data=owner_data)
      if ownerSer.is_valid(raise_exception=True):
        owner = ownerSer.save()
    
    ownerSer = OwnerSerializer(owner)
    return Response(ownerSer.data)


def getCar(request):
  car_pk = request.data.get('car_pk', None)
  return Car.objects.get(pk=car_pk)
class CarsListView(APIView):

  def get(self, request, format=None):
    return Response()

  def post(self, request, format=None):
    if request.data.get('btn_del', None) != None:
      car = getCar(request)
      car.delete()

    if request.data.get('btn_edit', None) != None:
      car = getCar(request)
      request.session['car_pk'] = car.pk
      request.session['back_from_car'] = request.path
      return Response({ 'redirect': '/testforjob/car'})

    cars = None
    if (owner_id := request.data.get('owner_pk', -1)) != -1:
      #print('CarsListView owner_id', owner_id)
      try:
        cars = Car.objects.filter(owner = owner_id)
      except Exception as e:
        print('CarsListView', e) 
        cars = Car.objects.none()
    else:
      cars = Car.objects.all()
    carsSer = CarSerializer(cars, many=True)

    if (sortedBy := request.data.get('sorted_by', None)) != None:
      #print('owners post sortedBy', sortedBy)
      direction = '-' if sortedBy['direction'] == 'desc' else ''
      cars = Car.objects.all().order_by(direction + sortedBy['name'])
      carsSer = CarSerializer(cars, many=True)

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
      #print('CarDetailView car_data', car_data)
      carSer = CarSerializer(car, data=car_data)
      if carSer.is_valid(raise_exception=True):
        car = carSer.save()
        if (back_from_car := request.session.get('back_from_car', None)) != None:
          return Response({'redirect': back_from_car.replace('/api', '')})

    return Response(carSer.data)



@api_view(('POST',))
def get_manufacturers(request, format=None):
  manuf = Manufacturer.objects.all()
  manufSer = ManufacturerSerializer(manuf, many=True)
  return Response(manufSer.data)