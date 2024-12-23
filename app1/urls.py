from django.urls import path
from .views import *
app_name='app1'

urlpatterns=[
    path('',base,name='base'),
    path('home/',home,name='home'),
    path('Courses/',Courses,name='Courses'),
    path('Bootcamp/',Bootcamp,name='Bootcamp'),
    path('RequestCallback/',RequestCallback,name='RequestCallback'),
    path('signin/',Signin,name='Signin'),
]