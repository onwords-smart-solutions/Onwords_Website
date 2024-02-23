import pyrebase, requests
from flask import Flask, jsonify, render_template, request, redirect, url_for, flash, Response
from flask_mail import Mail, Message
from werkzeug.utils import secure_filename
import datetime

app = Flask(__name__)
app.secret_key = 'oizg ntdk nzsi csgo'

Config = {"apiKey": "AIzaSyCCTeiCYTB_npcWKKxl-Oj0StQLTmaFOaE","authDomain": "marketing-data-d141d.firebaseapp.com","databaseURL": "https://marketing-data-d141d-default-rtdb.firebaseio.com/","storageBucket": "marketing-data-d141d.appspot.com",}
firebase = pyrebase.initialize_app(Config)
db = firebase.database()

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'navin.onwords@gmail.com'
app.config['MAIL_PASSWORD'] = 'oizg ntdk nzsi csgo'
mail = Mail(app)

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

@app.route('/refund')
def refund():
    return render_template('refund.html')

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

@app.route('/downloads')
def downloads():
    return render_template('downloads.html')

@app.route('/onwords-smart-things-app')
def onwordsSmartThingsApp():
    return render_template('onwordsSmartThingsApp.html')

@app.route('/chretro')
def chretro():
    return render_template('chretro.html')

@app.route('/smartlock')
def smartlock():
    return render_template('smartlock.html')

@app.route('/robots.txt')
def robots():
    return render_template('robots.txt')

@app.route('/sitemap.xml')
def sitemap():
    return render_template('sitemap.xml')

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

@app.route('/fields')
def fields():
    return render_template("fields.html")

@app.route('/smart_home')
def smart_home():
    return render_template("smart_home.html")

@app.route('/gate_automation')
def gate_automation():
    return render_template("gate_automation.html")

@app.route('/security_system')
def security_system():
    return render_template("security_system.html")

@app.route('/techease_essential')
def techease_essential():
    return render_template("Smart_home/techease_essential.html")

@app.route('/ecosmart_adapt')
def ecosmart_adapt():
    return render_template("Smart_home/ecosmart_adapt.html")

@app.route('/home_hormony')
def home_hormony():
    return render_template("Smart_home/home_hormony.html")

@app.route('/intellihome_ultimate')
def intellihome_ultimate():
    return render_template("Smart_home/intellihome_ultimate.html")

@app.route('/livingtech_premium')
def livingtech_premium():
    return render_template("Smart_home/livingtech_premium.html")

@app.route('/pinnacle_ecosystem')
def pinnacle_ecosystem():
    return render_template("Smart_home/pinnacle_ecosystem.html")

@app.route('/swinggate_armmotor')
def swinggate_armmotor():
    return render_template("Gate_automation/swinggate_armmotor.html")

@app.route('/swinggate_rollermotor')
def swinggate_rollermotor():
    return render_template("Gate_automation/swinggate_rollermotor.html")

@app.route('/sliding_gate')
def sliding_gate():
    return render_template("Gate_automation/sliding_gate.html")

@app.route('/invoice')
def invoice():
    return render_template("invoice.html")

@app.route('/solar')
def Solar():
    return render_template("solar.html")

@app.route('/Audios')
def Sound_System():
    return render_template('sound_system.html')

@app.route('/team')
def team():
    staff = db.child("staff").get().val()

    departments = {
        "WEB": [],
        "APP": [],
        "MEDIA": [],
        "RND": [],
        "PR": [],
        "ADMIN": [],
        "HR":[],
        "INSTALLATION": [],
        "ALL": []
    }

    for uid, details in staff.items():
        department = details["department"]
        profile = details.get("profileImage", "default-profile.jpg")
        member_info = {
            "name": details["name"],
            "email": details["email"],
            "department": department,
            "profile": profile
        }

        if department not in departments:
            departments[department] = []

        departments[department].append(member_info)
        departments["ALL"].append(member_info)

    return render_template('team.html', departments=departments)

@app.route('/submit_resume', methods=['POST'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        sender_email = request.form['email']
        phone = request.form['number']
        designation = request.form['designation']
        resume = request.files['resume']
        filename = secure_filename(resume.filename)

        msg = Message('New Resume Received from onwords.in/careers',
                      sender=sender_email,
                      recipients=['careers@onwords.in'])
        msg.body = f"Name: {name}\nEmail: {sender_email}\nPhone: {phone}\nDesignation: {designation}"
        msg.attach(filename, 'application/pdf', resume.read())
        mail.send(msg)
        flash('Form submitted successfully!')
        return redirect('/careers')

@app.route('/solar_query', methods=['POST'])
def solar_query():
    current_day = datetime.datetime.now().strftime("%d-%m-%Y")
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('mobile')
        message = request.form.get('message')
        bill = request.form.get('bill')
        service_no = request.form.get('service_no')

        solar_query = {"name": name, "email": email, "phone": phone, "message": message, "service_no":service_no, "bill":bill}
        db.child("solar").child(current_day).push(solar_query)
        return jsonify({'success': True, 'message': 'submitted successfully, we wil get back to you shortly'})
    else:
        return 'Method Not Allowed'

@app.route('/free_demo', methods=['POST'])
def demo_bookings():
    current_day = datetime.datetime.now().strftime("%d-%m-%Y")
    if request.method == 'POST':
        name = request.form.get('name')
        location = request.form.get('location')
        phone = request.form.get('mobile')
        message = request.form.get('message')

        demo_bookings = {"name": name, "location": location, "phone": phone, "message": message }
        db.child("Demo_Bookings").child(current_day).push(demo_bookings)
        return jsonify({'success': True, 'message': 'submitted successfully, we wil get back to you shortly'})
    else:
        return 'Method Not Allowed'

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=8080,debug=True)