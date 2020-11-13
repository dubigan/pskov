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
    owners = Owner.objects.all()
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
    if (owner_id := request.data.get('owner', None)) !=None:
      cars = Car.objects.get(owner = owner_id)
      carsSer = CarSerializer(cars, many=True)
      return Response({'cars': carsSer.data})
    return Response()
  

@api_view(('POST',))
def get_manufacturers(request, format=None):
  return Response()