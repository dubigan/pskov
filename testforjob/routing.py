from django.urls import path

from . import consumers

websocket_urlpatterns = [
    path('testforjob/ws/upload/', consumers.UploadConsumer.as_asgi()),
]