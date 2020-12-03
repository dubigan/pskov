import json
from channels.generic.websocket import WebsocketConsumer

class UploadConsumer(WebsocketConsumer):
    def connect(self):
        print('UploadConsumer', 'connect')
        self.accept()

    def disconnect(self, close_code):
        print('UploadConsumer disconnect', close_code)

    def receive(self, text_data):
        # text_data_json = json.loads(text_data)
        # message = text_data_json['message']
        print('UploadConsumer', repr(text_data))

        # self.send(text_data=json.dumps({
        #     'message': message
        # }))