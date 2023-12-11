from django.urls import path
from .import views

urlpatterns=[
    path('',views.home,name='home'),
    path('ourservices',views.ourservices, name='ourservices'),
    path('gateautomation',views.gateautomation, name='gateautomation'),
    path('seedemo',views.seedemo,name='seedemo'),
    path('curtain',views.curtain,name='curtain'),
    path('securitySystem',views.securitySystem,name='securitySystem'),
    path('ourApp',views.ourApp,name='ourApp'),
    path('construction',views.construction,name='construction'),
    path('gallery',views.gallery,name='gallery'),
    path('privacyPolicy',views.privacyPolicy,name='privacyPolicy'),
    path('disclaimer',views.disclaimer,name='disclaimer'),
    path('faq',views.faq,name='faq'),
    path('contact-9',views.contact,name='contact-9'),
    path('aboutus',views.aboutus,name='aboutus'),
    path('careers',views.careers,name='careers'),
    path('team',views.team,name='team'),
    path('downloads',views.downloads,name='downloads'),
    path('refund',views.refund,name='refund'),
    path('onwords-smart-things-app',views.onwordsSmartThingsApp,name='onwordsSmartThingsApp'),
    path('3chretro',views.chretro,name='chretro'),
    path('robots.txt',views.RobotsTxtViews.as_view()),
    path('sitemap.xml',views.SitemapXmlViews.as_view()),
]