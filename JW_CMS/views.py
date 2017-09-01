from django.shortcuts import render
from django.http import HttpResponse
from jwCaller import Account
from django.conf import settings
import os
# from .models import Video, Video_list
# Create your views here.


key = settings.JWKEY
secret = settings.JWSECRET

jwAccount = Account(key, secret)

def videoList(request):
    jwAccount.video_list = jwAccount.get_video_list()

    sorted_videos = jwAccount.video_list.sort()

    context = {'videos':sorted_videos}

    return render(request, 'videoList.html', context)
