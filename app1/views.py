from django.shortcuts import render

# Create your views here.
def base(request):
    return render(request,'base.html')

def home(request):
    return render(request,'home.html')

def Bootcamp(request):
    return render(request,'Bootcamp.html')

def Courses(request):
    return render(request,'Courses.html')

def RequestCallback(request):
    return render(request,'RequestCallback.html')

def Signin(request):
    return render(request,'Signin.html')
