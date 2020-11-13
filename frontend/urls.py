from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ),
    path('testforjob/owners/', views.index),
    path('testforjob/cars/', views.index),
    #path('sc/orders/', views.index),
    #path('sc/order/new/', views.index),

]