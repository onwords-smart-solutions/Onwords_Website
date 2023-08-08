from django.shortcuts import render
from django.views.generic import TemplateView
import json

## Create your views here.
def home(request):
    return render(request,'home.html')
def ourservices(request):
    return render(request,'ourservices.html')
def gateautomation(request):
    return render(request,'gateautomation.html')
def seedemo(request):
    return render(request,'seedemo.html')
def curtain(request):
    return render(request,'curtain.html')
def securitySystem(request):
    return render(request,'security-system.html')
def ourApp(request):
    return render(request,'ourApp.html')
def construction(request):
    return render(request,'construction.html')
def gallery(request):
    return render(request,'gallery.html')
def privacyPolicy(request):
    return render(request,'privacyPolicy.html')
def disclaimer(request):
    return render(request,'disclaimer.html')   
def contact(request):
    return render(request,'contact.html')     
def aboutus(request):
    return render(request,'aboutus.html')    
def carrier(request):
    return render(request,'carrier.html')    
def team(request):
    return render(request,'team.html')    
def downloads(request):
    return render(request,'downloads.html')    
 

class RobotsTxtViews(TemplateView):
    template_name ='robots.txt'
    content_type ='text/plain'
class SitemapXmlViews(TemplateView):
    template_name ='sitemapXml.html'
    content_type ='application/xml'
