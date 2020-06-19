from django.shortcuts import render
from django.http import HttpResponse
import os

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.template.loader import render_to_string

from django.utils.dateparse import parse_date
from django.core.mail import EmailMultiAlternatives
from .models import Booking
from .serializers import BookingSerializer
import random

def generate_id():
    characters = "abcdefghijklmnopqrstuvwxyz1234567890"
    output_id = ""
    for i in range(10):
        output_id += characters[random.randint(0, len(characters))]
    return output_id

def home(request):
    return HttpResponse("<h1>Hello World!</h1>")

@api_view(["POST"])
def contact_us(request):
    name = request.data['name']
    subject = request.data['subject']
    email = request.data['email']
    message = request.data['message']

    try:
        content = render_to_string("message.html", {'name': name, "subject": subject, "email": email, "message": message})
        text_content = render_to_string("message.txt", {'name': name, "subject": subject, "email": email, "message": message})

        msg = EmailMultiAlternatives(subject, text_content, "<support@dvjphotography.com>", ["samuelemeh200@gmail.com"])
        msg.attach_alternative(content, "text/html")
        msg.send()
    
    except Exception:
        return Response(status=401)

    return Response({"success_message": "Message Sent Successfully"})

@api_view(["POST"])
def book_appointment(request):
    name = request.data['name']
    phone_number = request.data['phone_number']
    date = request.data['date']
    description = request.data['description']
    booking_id = generate_id()
    
    try:
        booking = Booking(name=name, phone_number=phone_number, description=description, booking_id=booking_id, date=parse_date(date))
        booking.save()

        content = render_to_string("book_appointment.html", {'name': name, "date": date, "phone_number": phone_number, "description": description})
        text_content = render_to_string("book_appointment.txt", {'name': name, "date": date, "phone_number": phone_number, "description": description})

        msg = EmailMultiAlternatives("Booking Of Appointment", text_content, "<support@dvjphotography.com>", ["samuelemeh200@gmail.com"])
        msg.attach_alternative(content, "text/html")
        msg.send()

    except Exception:
        return Response(status=401)
        
    return Response({"success_message": "Message Sent Successfully", "booking_id": booking_id})

@api_view(['POST'])
def verify_appointment(request):
    booking_id = request.data["booking_id"]
    try:
        booking = Booking.objects.get(booking_id=booking_id)
        serializer = BookingSerializer(booking)
    
    except Booking.DoesNotExist:
        return Response(status=404)

    return Response(serializer.data)