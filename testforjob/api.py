from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *

class OwnersListView(APIView):

  def get(self, request, format=None):
    # owners = Owner()
    # ownersSer = OwnerSerializer(owners)
    return Response()

  def post(self, request, format=None):
    #print('post owners', request)
    sortedBy = request.data.get('sorted_by', None)
    print('owners post sortedBy', sortedBy)
    direction = '-' if sortedBy['direction'] == 'desc' else ''
    owners = Owner.objects.all().order_by(direction + sortedBy['name'])
    ownersSer = OwnerSerializer(owners, many=True)
    return Response(ownersSer.data)


class OwnerDetailView(APIView):

  def get(self, request, format=None):
    return Response()

  def post(self, request, format=None):
    return Response()


class CarsListView(APIView):

  def get(self, request, format=None):
    return Response()

  def post(self, request, format=None):
    cars = None
    if (owner_id := request.data.get('owner', None)) !=None:
      cars = Car.objects.get(owner = owner_id)
    else:
      cars = Car.objects.all()
    carsSer = CarSerializer(cars, many=True)
    return Response({carsSer.data})
  

@api_view(('POST',))
def get_manufacturers(request, format=None):
  manuf = Manufacturer.objects.all()
  manufSer = ManufacturerSerializer(manuf, many=True)
  return Response(manufSer.data)