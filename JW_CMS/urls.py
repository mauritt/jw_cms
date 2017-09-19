from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.videoList, name='video list'),
    url(r'^(?P<column>[A-z]*)_(?P<order>(asc|desc))$', views.videoList, name='video list'),
    url(r'^search/(?P<searchTerm>[A-z  0-9 _ ]*)$', views.videoList, name='video list'),
    url(r'^video/upload$', views.uploadRequest, name='upload'),
    url(r'^details/(?P<videoKey>[A-z0-9]+)$', views.videoDetails, name='video details'),
    url(r'^update/(?P<videoKey>[A-z0-9]+)$', views.updateDetails, name='video update'),
    url(r'^delete/(?P<videoKey>[A-z0-9]+)$', views.deleteVideo, name='delete video'),
]
