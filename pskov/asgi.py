"""
ASGI config for pskov project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import testforjob.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pskov.settings')

#application = get_asgi_application()
application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": URLRouter(
            testforjob.routing.websocket_urlpatterns
        )
    })
