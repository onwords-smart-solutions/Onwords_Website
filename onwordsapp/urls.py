from django.urls import path
from .import views

urlpatterns=[
    path('',views.home,name='home'),
    path('ourservices',views.ourservices, name='ourservices'),
    path('gateautomation',views.gateautomation, name='gateautomation'),
    path('agriautomation',views.agriautomation, name='agriautomation'),
    path('seedemo',views.seedemo,name='seedemo'),
    path('curtain',views.curtain,name='curtain'),
    path('securitySystem',views.securitySystem,name='securitySystem')
]