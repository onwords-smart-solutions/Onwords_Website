import pyrebase, requests
from flask import Flask, jsonify, render_template, request, redirect, url_for, flash, Response
from flask_mail import Mail, Message
from werkzeug.utils import secure_filename
import datetime
import json

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

@app.route('/sound_system')
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

        solar_query = {"name": name, "email": email, "phone": phone, "message": message}
        db.child("solar").child(current_day).push(solar_query)
        return jsonify({'success': True, 'message': 'Submitted successfully, we wil get back to you shortly'})
    else:
        return 'Method Not Allowed'



def calculate_units_from_bill_amount(type, bill_amount): 
    unit = ""
    if type == 1:
        print("Unit calculation is not available for Industries.")

    elif type == 2:
        if bill_amount <= 0:
            units=0
            return

        if bill_amount <= 100 * 0:
            units = bill_amount / 0
        elif bill_amount <= (100 * 0) + (200 - 100) * 2.25:
            units = 100 + (bill_amount - (100 * 0)) / 2.25
        elif bill_amount <= (100 * 0) + (200 - 100) * 2.25 + (400 - 200) * 4.5:
            units = 200 + (bill_amount - ((100 * 0) + (200 - 100) * 2.25)) / 4.5
        elif bill_amount <= (100 * 0) + (200 - 100) * 2.25 + (400 - 200) * 4.5 + (500 - 400) * 6:
            units = 400 + (bill_amount - ((100 * 0) + (200 - 100) * 2.25 + (400 - 200) * 4.5)) / 6
        elif bill_amount <= (100 * 0) + (200 - 100) * 2.25 + (400 - 200) * 4.5 + (500 - 400) * 6 + (600 - 500) * 8:
            units = 500 + (bill_amount - ((100 * 0) + (200 - 100) * 2.25 + (400 - 200) * 4.5 + (500 - 400) * 6)) / 8
        elif bill_amount <= (100 * 0) + (200 - 100) * 2.25 + (400 - 200) * 4.5 + (500 - 400) * 6 + (600 - 500) * 8 + (800 - 600) * 9:
            units = 600 + (bill_amount - ((100 * 0) + (200 - 100) * 2.25 + (400 - 200) * 4.5 + (500 - 400) * 6 + (600 - 500) * 8)) / 9
        elif bill_amount <= (100 * 0) + (200 - 100) * 2.25 + (400 - 200) * 4.5 + (500 - 400) * 6 + (600 - 500) * 8 + (800 - 600) * 9 + (1000 - 800) * 10:
            units = 800 + (bill_amount - ((100 * 0) + (200 - 100) * 2.25 + (400 - 200) * 4.5 + (500 - 400) * 6 + (600 - 500) * 8 + (800 - 600) * 9)) / 10
        else:
            units = 1000 + (bill_amount - ((100 * 0) + (200 - 100) * 2.25 + (400 - 200) * 4.5 + (500 - 400) * 6 + (600 - 500) * 8 + (800 - 600) * 9 + (1000 - 800) * 10)) / 11
        unit = "kWh"
    return units, unit

def estimate_solar_panels(monthly_consumption_kwh, conversion_factor, desired_coverage, peak_sun_hours, panel_efficiency, derating_factor):
    # Convert monthly consumption to daily consumption (assuming 30 days in a month)
    daily_consumption_in_kwh = monthly_consumption_kwh * conversion_factor / 30
    
    # Calculate desired daily generation
    desired_generation = daily_consumption_in_kwh * desired_coverage / 100
    
    # Estimate required system capacity
    required_capacity = desired_generation * derating_factor / peak_sun_hours
    if required_capacity < 1:
        required_capacity = 1
    else: 
        required_capacity = desired_generation * derating_factor / peak_sun_hours
    # Estimate number of panels
    number_of_panels = required_capacity / panel_efficiency
    
    # Calculate required square feet
    required_square_feet = required_capacity * 100  # 1 kW needs 100 square feet
    
    # Print daily consumption, required capacity, and required square feet
   
    
    return daily_consumption_in_kwh, required_capacity, required_square_feet, number_of_panels

# Inside your Flask view function
@app.route('/calculate_bill_amount', methods=['POST'])
def handle_calculate_bill_amount():
    type = int(request.form.get('category'))  
    bill_amount = int(request.form.get('units')) 
    
    monthly_consumption_kwh, unit = calculate_units_from_bill_amount(type, bill_amount)
    
    # Define constants for solar panel estimation
    conversion_factor = 1  # Conversion factor (already in kWh)
    desired_coverage = 90  # Desired coverage as a percentage (100%)
    peak_sun_hours = 5  # Average peak sun hours per day
    panel_efficiency = 0.2  # Efficiency of the solar panel (20%)
    derating_factor = 0.9  # Derating factor considering real-world conditions (90%)

    # Estimate solar panels
    daily_consumption, required_capacity, required_square_feet, number_of_panels = estimate_solar_panels(monthly_consumption_kwh, conversion_factor, desired_coverage, peak_sun_hours, panel_efficiency, derating_factor)

    # Calculate units consumed in the same format as the print statement
    units_consumed = round(monthly_consumption_kwh + 100, 2)

    panel_capacity_watts = 545  # Capacity of each panel in watts
    average_peak_sun_hours_per_day = 5  # Average peak sun hours per day
    days_in_month = 30  # Number of days in a month (assuming 30 days)
    system_efficiency = 0.90  # System efficiency

    # Calculate daily energy generation per panel
    daily_energy_generation_per_panel = panel_capacity_watts * average_peak_sun_hours_per_day / 1000  # in kWh

    estimated_panels = number_of_panels
    # Multiply by the number of panels to get total daily energy generation
    total_daily_energy_generation = daily_energy_generation_per_panel * estimated_panels

    # Multiply by the number of days in a month to get monthly energy generation
    monthly_energy_generation = total_daily_energy_generation * days_in_month

    # Calculate estimated monthly energy generation and potential monthly savings
    estimated_monthly_generation_kwh = monthly_energy_generation
    potential_monthly_savings_kwh = (estimated_monthly_generation_kwh * system_efficiency) - monthly_consumption_kwh

    co2_emission_factor = 0.5  # Example value, replace with actual CO2 emission factor for your region

    # Calculate monthly CO2 emission reduction (in kWh)
    monthly_co2_reduction_kwh = (monthly_energy_generation - (monthly_consumption_kwh * conversion_factor)) * co2_emission_factor

    # Calculate yearly CO2 emission reduction (in kWh)
    yearly_co2_reduction_kwh = monthly_co2_reduction_kwh * 12

    # Convert yearly CO2 emission reduction to tons
    yearly_co2_reduction_tons = yearly_co2_reduction_kwh / 1000
    
    # Calculate trees added to the environment based on yearly CO2 emission reduction
    trees_added_yearly = yearly_co2_reduction_tons / 22.6

    # Prepare the response
    result = {
        "units_consumed": units_consumed,
        "unit": unit,
        "daily_consumption": round(daily_consumption, 2),
        "required_capacity": round(required_capacity),
        "required_square_feet": round(required_square_feet),
        "number_of_panels": round(number_of_panels, 2),
        "yearly_co2_reduction_kwh": round(trees_added_yearly*1000),
        "Potential_monthly_kwh":round(potential_monthly_savings_kwh),
        "Potential_monthly_savings":round(potential_monthly_savings_kwh*5.8),
        "yearly_co2_reduction_tons": round(yearly_co2_reduction_tons),

    }

    return json.dumps(result)

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=8080,debug=True)