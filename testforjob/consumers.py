import json
from channels.generic.websocket import WebsocketConsumer
from .models import *
from .serializers import *

class UploadConsumer(WebsocketConsumer):
    def connect(self):
      print('UploadConsumer', 'connect')
      self.accept()

    def disconnect(self, close_code):
      print('UploadConsumer disconnect', close_code)

    def receive(self, text_data):
      text_data_json = json.loads(text_data)
      self.send(text_data=json.dumps({
          'message': 'data is loaded'
      }))
      #print('UploadConsumer', text_data_json)
      Owner.objects.all().delete()
      Car.objects.all().delete()
      for o in text_data_json:
        #print(o)
        owner = Owner()
        ownerSer = OwnerSerializer(owner, data=o)
        #print('UploadConsumer', ownerSer.initial_data)
        if ownerSer.is_valid(raise_exception=True):
          owner = ownerSer.save()

        # self.send(text_data=json.dumps({
        #     'message': message
        # }))