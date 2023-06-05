from django.urls import path
from .import views

urlpatterns=[
    path('',views.home,name='home'),
    path('ourservices',views.ourservices, name='ourservices'),
    path('gateautomation',views.gateautomation, name='gateautomation'),
    path('agriautomation',views.agriautomation, name='agriautomation'),
    path('seedemo',views.seedemo,name='seedemo'),
    path('curtain',views.curtain,name='curtain'),
    path('securitySystem',views.securitySystem,name='securitySystem'),
    path('ourApp',views.ourApp,name='ourApp'),
    path('construction',views.construction,name='construction'),
    path('gallery',views.gallery,name='gallery'),
    path('privacyPolicy',views.privacyPolicy,name='privacyPolicy'),
    path('disclaimer',views.disclaimer,name='disclaimer'),
]