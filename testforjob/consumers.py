import json
from channels.generic.websocket import WebsocketConsumer
from .models import *
from .serializers import *

class UploadConsumer(WebsocketConsumer):
    def connect(self):
      #print('UploadConsumer', 'connect')
      self.accept()

    def disconnect(self, close_code):
      #print('UploadConsumer disconnect', close_code)
      pass

    def receive(self, text_data):
      text_data_json = json.loads(text_data)
      #print('UploadConsumer', text_data_json)
      #print('UploadConsumer clearDB', clearDB)     
      #print('UploadConsumer content', content)
      self.send(text_data=json.dumps({
          'message': 'data is loaded'
      }))

      try:
        clearDB = text_data_json.get('cleardb', False)
        content = text_data_json.get('content', [])
        content_json = json.loads(content)

        if clearDB:
          Owner.objects.all().delete()
          Car.objects.all().delete()

        for o in content_json:
          owner = Owner()
          ownerSer = OwnerSerializer(owner, data=o)
          #print('UploadConsumer', ownerSer.initial_data)
          if ownerSer.is_valid(raise_exception=True):
            owner = ownerSer.save()

        self.send(text_data=json.dumps({'message': 'success load data to DB'}))
      except:
        self.send(text_data=json.dumps({
          'message': 'error load data to DB'
      }))

