<<<<<<< HEAD
from flask import Flask, render_template
import pyrebase

app = Flask(__name__)

Config = {
    "apiKey": "AIzaSyCCTeiCYTB_npcWKKxl-Oj0StQLTmaFOaE",
    "authDomain": "marketing-data-d141d.firebaseapp.com",
    "databaseURL": "https://marketing-data-d141d-default-rtdb.firebaseio.com/",
    "storageBucket": "marketing-data-d141d.appspot.com",
}

firebase = pyrebase.initialize_app(Config)
db = firebase.database()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ourservices')
def ourservices():
    return render_template('ourservices.html')

@app.route('/gateautomation')
def gateautomation():
    return render_template('gateautomation.html')

@app.route('/seedemo')
def seedemo():
    return render_template('seedemo.html')

@app.route('/curtain')
def curtain():
    return render_template('curtain.html')

@app.route('/securitySystem')
def securitySystem():
    return render_template('security-system.html')

@app.route('/ourApp')
def ourApp():
    return render_template('ourApp.html')

@app.route('/construction')
def construction():
    return render_template('construction.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/privacyPolicy')
def privacyPolicy():
    return render_template('privacyPolicy.html')

@app.route('/disclaimer')
def disclaimer():
    return render_template('disclaimer.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/contact-9')
def contact():
    return render_template('contact-9.html')

@app.route('/aboutus')
def aboutus():
    return render_template('aboutus.html')

@app.route('/careers')
def careers():
    return render_template('careers.html')

@app.route('/team')
def team():
    name = []
    email = []
    department = []
    profile = []
    webname = []
    webemail = []
    webdepartment = []
    webprofile = []
    appname = []
    appemail = []
    appdepartment = []
    appprofile = []
    medianame = []
    mediaemail = []
    mediadepartment = []
    mediaprofile = []
    rndname = []
    rndemail = []
    rnddepartment = []
    rndprofile = []
    prname = []
    premail = []
    prdepartment = []
    prprofile = []
    adminname = []
    adminemail = []
    admindepartment = []
    adminprofile = []

    staff = db.child("staff").get().val()

    for uid in staff:
        name.append(staff[uid]["name"])
        email.append(staff[uid]["email"])
        department.append(staff[uid]["department"])
        try:
            profile.append(staff[uid]["profileImage"])
        except KeyError:
            profile.append("False")

    for uid in staff:
        if staff[uid]["department"] == "WEB":
            webname.append(staff[uid]["name"])
            webemail.append(staff[uid]["email"])
            webdepartment.append(staff[uid]["department"])
            try:
                webprofile.append(staff[uid]["profileImage"])
            except KeyError:
                webprofile.append("False")

    for uid in staff:
        if staff[uid]["department"] == "APP":
            appname.append(staff[uid]["name"])
            appemail.append(staff[uid]["email"])
            appdepartment.append(staff[uid]["department"])
            try:
                appprofile.append(staff[uid]["profileImage"])
            except KeyError:
                appprofile.append("False")

    for uid in staff:
        if staff[uid]["department"] == "MEDIA":
            medianame.append(staff[uid]["name"])
            mediaemail.append(staff[uid]["email"])
            mediadepartment.append(staff[uid]["department"])
            try:
                mediaprofile.append(staff[uid]["profileImage"])
            except KeyError:
                mediaprofile.append("False")

    for uid in staff:
        if staff[uid]["department"] == "RND":
            rndname.append(staff[uid]["name"])
            rndemail.append(staff[uid]["email"])
            rnddepartment.append(staff[uid]["department"])
            try:
                rndprofile.append(staff[uid]["profileImage"])
            except KeyError:
                rndprofile.append("False")

    for uid in staff:
        if staff[uid]["department"] == "PR":
            prname.append(staff[uid]["name"])
            premail.append(staff[uid]["email"])
            prdepartment.append(staff[uid]["department"])
            try:
                prprofile.append(staff[uid]["profileImage"])
            except KeyError:
                prprofile.append("False")

    for uid in staff:
        if staff[uid]["department"] == "ADMIN":
            adminname.append(staff[uid]["name"])
            adminemail.append(staff[uid]["email"])
            admindepartment.append(staff[uid]["department"])
            try:
                adminprofile.append(staff[uid]["profileImage"])
            except KeyError:
                adminprofile.append("False")

    allteamsdetails = zip(name, email, department, profile)
    webteam = zip(webname, webemail, webdepartment, webprofile)
    appteam = zip(appname, appemail, appdepartment, appprofile)
    mediateam = zip(medianame, mediaemail, mediadepartment, mediaprofile)
    rndteam = zip(rndname, rndemail, rnddepartment, rndprofile)
    prteam = zip(prname, premail, prdepartment, prprofile)
    adminteam = zip(adminname, adminemail, admindepartment, adminprofile)

    context = {
        "allteamsdetails": allteamsdetails,
        "webteam": webteam,
        "appteam": appteam,
        "mediateam": mediateam,
        "rndteam": rndteam,
        "prteam": prteam,
        "adminteam": adminteam,
    }

    return render_template('team.html', context=context)

@app.route('/downloads')
def downloads():
    return render_template('downloads.html')

@app.route('/onwords-smart-things-app')
def onwordsSmartThingsApp():
    return render_template('onwordsSmartThingsApp.html')

@app.route('/chretro')
def chretro():
    return render_template('chretro.html')

@app.route('/robots')
def robots():
    return render_template('robots.txt')

@app.route('/sitemap')
def sitemap():
    return render_template('sitemap.xml')

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=80,debug=True)
=======

>>>>>>> 9324b0b1b2d9fd2155612bf939e59779ec71b33e
