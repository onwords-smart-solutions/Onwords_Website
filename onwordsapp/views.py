from django.shortcuts import render
from django.views.generic import TemplateView
import json,pyrebase

Config = {
    "apiKey": "AIzaSyCCTeiCYTB_npcWKKxl-Oj0StQLTmaFOaE",
    "authDomain": "marketing-data-d141d.firebaseapp.com",
    "databaseURL": "https://marketing-data-d141d-default-rtdb.firebaseio.com/",
    "storageBucket": "marketing-data-d141d.appspot.com",
}

firebase = pyrebase.initialize_app(Config)
db = firebase.database()
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
    name=[]
    email=[]
    department=[]
    profile=[]
    webname=[]
    webemail=[]
    webdepartment=[]
    webprofile=[]
    appname=[]
    appemail=[]
    appdepartment=[]
    appprofile=[]
    medianame=[]
    mediaemail=[]
    mediadepartment=[]
    mediaprofile=[]
    rndname=[]
    rndemail=[]
    rnddepartment=[]
    rndprofile=[]
    prname=[]
    premail=[]
    prdepartment=[]
    prprofile=[]
    adminname=[]
    adminemail=[]
    admindepartment=[]
    adminprofile=[]
    staff=db.child("staff").get().val()
    for uid in staff:
        name.append(staff[uid]["name"])
        email.append(staff[uid]["email"])
        department.append(staff[uid]["department"])
        try:
            profile.append(staff[uid]["profileImage"])
        except:
            profile.append("False")

    for uid in staff:
        if staff[uid]["department"] == "WEB":
            webname.append(staff[uid]["name"])
            webemail.append(staff[uid]["email"])
            webdepartment.append(staff[uid]["department"])
            try:
                webprofile.append(staff[uid]["profileImage"])
            except:
                webprofile.append("False")
    for uid in staff:
        if staff[uid]["department"] == "APP":
            appname.append(staff[uid]["name"])
            appemail.append(staff[uid]["email"])
            appdepartment.append(staff[uid]["department"])
            try:
                appprofile.append(staff[uid]["profileImage"])
            except:
                appprofile.append("False")
    for uid in staff:
        if staff[uid]["department"] == "MEDIA":
            medianame.append(staff[uid]["name"])
            mediaemail.append(staff[uid]["email"])
            mediadepartment.append(staff[uid]["department"])
            try:
                mediaprofile.append(staff[uid]["profileImage"])
            except:
                mediaprofile.append("False")
    for uid in staff:
        if staff[uid]["department"] == "RND":
            rndname.append(staff[uid]["name"])
            rndemail.append(staff[uid]["email"])
            rnddepartment.append(staff[uid]["department"])
            try:
                rndprofile.append(staff[uid]["profileImage"])
            except:
                rndprofile.append("False")
    for uid in staff:
        if staff[uid]["department"] == "PR":
            prname.append(staff[uid]["name"])
            premail.append(staff[uid]["email"])
            prdepartment.append(staff[uid]["department"])
            try:
                prprofile.append(staff[uid]["profileImage"])
            except:
                prprofile.append("False")
    for uid in staff:
        if staff[uid]["department"] == "ADMIN":
            adminname.append(staff[uid]["name"])
            adminemail.append(staff[uid]["email"])
            admindepartment.append(staff[uid]["department"])
            try:
                adminprofile.append(staff[uid]["profileImage"])
            except:
                adminprofile.append("False")
                
    allteamsdetails=zip(name,email,department,profile)
    webteam=zip(webname,webemail,webdepartment,webprofile)
    appteam=zip(appname,appemail,appdepartment,appprofile)
    mediateam=zip(medianame,mediaemail,mediadepartment,mediaprofile)
    rndteam=zip(rndname,rndemail,rnddepartment,rndprofile)
    prteam=zip(prname,premail,prdepartment,prprofile)
    adminteam=zip(adminname,adminemail,admindepartment,adminprofile)

    context={
       "allteamsdetails":allteamsdetails,
       "webteam":webteam,
       "appteam":appteam,
       "mediateam":mediateam,
       "rndteam":rndteam,
       "prteam":prteam,
       "adminteam":adminteam 
    }
    return render(request,'team.html',context)    
def downloads(request):
    return render(request,'downloads.html')    
 

class RobotsTxtViews(TemplateView):
    template_name ='robots.txt'
    content_type ='text/plain'
class SitemapXmlViews(TemplateView):
    template_name ='sitemapXml.html'
    content_type ='application/xml'
