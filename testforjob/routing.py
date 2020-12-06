from django.urls import path

from .consumers import UploadConsumer

websocket_urlpatterns = [
    path('testforjob/ws/upload/', UploadConsumer.as_asgi()),
]