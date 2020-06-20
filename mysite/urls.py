from django.urls import path
from .views import *

urlpatterns = [
    path('', home),
    path('booking/', home),
    path('contact/', contact_us),
    path('book_appointment/', book_appointment),
    path('check_appointment/', verify_appointment),
]