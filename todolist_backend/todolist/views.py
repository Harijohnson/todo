from django.shortcuts import render

# Create your views here.

def user(request):
    

    return render('<h1>Wlocome to user </h1>')

def todo(request):
    context={}
    return render('<h1>Wlocome to todo </h1>',context=context)