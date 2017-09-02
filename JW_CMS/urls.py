from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.videoList, name='video list'),
    url(r'^(?P<column>[A-z]*)_(?P<order>(asc|desc))$', views.videoList, name='video list'),
]
