from django.shortcuts import render

def mixer_request(request):
    return render(request, "mixer/mixer.html")
