from django.urls import path
from .api import *


urlpatterns = [
  path('api/owners/', OwnersListView.as_view(), name='owners-list'),
  path('api/owner/', OwnerDetailView.as_view(), name='owner-detail'),
  path('api/cars/', CarsListView.as_view(), name='cars-list'),
  path('api/car/', CarDetailView.as_view(), name='car-detail'),
  path('api/manufacturers/', get_manufacturers, name='get-manufacturers')
]