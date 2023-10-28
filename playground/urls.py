from django.urls import path
from . import views

urlpatterns = [
    path("", views.HomePageView.as_view(), name="home"),
    path("login",views.LoginPageView.as_view(), name="login"),
    path("quiz",views.LoginPageView.as_view(), name="quiz"),
    path("resume",views.ResumePageview.as_view(), name="resume"),
    path("test",views.TestPageview.as_view(), name= "test"),
    path("end",views.EndPageview.as_view(), name="end"),
    path("cv", views.CvPageview.as_view(), name="cv"),
    path("contact", views.ContactPageview.as_view(), name="contact"),
    path("admin",views.AdminPageview.as_view(), name="admin")
]