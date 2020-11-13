from django.shortcuts import render


def index(request):
  #print('views.index', request)
  return render(request, 'frontend/index.html')