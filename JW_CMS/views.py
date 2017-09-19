from django.shortcuts import render
from django.http import HttpResponse, QueryDict
from jwCaller import Account
from django.conf import settings
import os
# from .models import Video, Video_list
# Create your views here.


key = settings.JWKEY
secret = settings.JWSECRET

jwAccount = Account(key, secret)

def videoList(request, column=None, order=None, searchTerm=None):

    if not column and not order:
        if searchTerm:
            jwAccount.video_list = jwAccount.get_video_list(search=searchTerm)
        else:
            jwAccount.video_list = jwAccount.get_video_list()
        column = 'title'
        order = 'asc'

    sorted_videos = jwAccount.video_list.sort(column,order)

    context = {'videos':sorted_videos}

    return render(request, 'videoList.html', context)

def videoDetails(request, videoKey):
    context = {}

    video = jwAccount.get_video(videoKey)
    context['video'] = video

    embed = 'http://content.jwplatform.com/players/{}-pu8YCHH3.js'
    embed = embed.format(video.key)
    context['embed'] = embed

    conversions = jwAccount.get_conversions(videoKey)
    context['conversions'] = conversions

    tracks = jwAccount.get_tracks(videoKey)
    context['tracks'] = tracks

    return render(request, 'videoDetails.html', context)


def uploadRequest(request):
    URL = jwAccount.get_upload_URL('video')
    return HttpResponse(URL)

def updateDetails(request, videoKey):
    if request.method == 'POST':
        q = QueryDict(request.body).copy()
        q.pop('csrfmiddlewaretoken')
        params={}
        for x in q.keys():
            params[x] = q[x]

        resp = jwAccount.videos.update(video_key=videoKey, **params)

        if resp['status'] == 'ok':
            print('success')
            return HttpResponse('success')
        else:
            print('fail')
            return HttpResponse('fail')

def deleteVideo(request, videoKey):
    resp = jwAccount.videos.delete(video_key=videoKey)
    return HttpResponse('ok')



