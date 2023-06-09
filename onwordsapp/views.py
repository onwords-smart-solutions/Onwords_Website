from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'home.html')
def ourservices(request):
    return render(request,'ourservices.html')
def gateautomation(request):
    return render(request,'gateautomation.html')
def agriautomation(request):
    return render(request,'agriautomation.html')
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