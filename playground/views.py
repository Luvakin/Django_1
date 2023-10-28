from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class HomePageView(TemplateView):
    template_name = "index.html"
class LoginPageView(TemplateView):
    template_name = "login.html"
class contact(TemplateView):
    template_name = "contact.html"
class QuizPageView(TemplateView):
    template_name = "quiz.html"   
class ResumePageview(TemplateView):
    template_name = "resume.html"  
class TestPageview(TemplateView):
    template_name = "test.html"
class EndPageview(TemplateView):
    template_name = "end.html" 
class CvPageview(TemplateView):
    template_name = "cv.html"
class ContactPageview(TemplateView):
    template_name = "Contact.html"      
class AdminPageview(TemplateView):
    template_name = "admin.html"                    