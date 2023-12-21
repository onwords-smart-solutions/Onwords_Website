"""onwords URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.contrib.sitemaps.views import sitemap
from onwordsapp.sitemaps import ItemSitemap
from django.shortcuts import redirect

sitemaps={
 'items':ItemSitemap
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('onwordsapp.urls')),
        path('sitemap.xml',sitemap,{'sitemaps':sitemaps}),

     path('https://www.onwords.in/', lambda request: redirect('http://3.110.161.248/', permanent=True)),
     path('https://www.onwords.in/about-us', lambda request: redirect('http://3.110.161.248/aboutus', permanent=True)),
     path('https://www.onwords.in/our-service', lambda request: redirect('http://3.110.161.248/ourservices', permanent=True)),
     path('https://www.onwords.in/ajax', lambda request: redirect('http://3.110.161.248/securitySystem', permanent=True)),
     path('https://www.onwords.in/our-app', lambda request: redirect('http://3.110.161.248/ourApp', permanent=True)),
     path('https://www.onwords.in/contact-9', lambda request: redirect('http://3.110.161.248/contact-9', permanent=True)),
     path('https://www.onwords.in/gallery', lambda request: redirect('http://3.110.161.248/gallery', permanent=True)),
     path('https://www.onwords.in/smartlock', lambda request: redirect('http://3.110.161.248/smartlock', permanent=True)),
]