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