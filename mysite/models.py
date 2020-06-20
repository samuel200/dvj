from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    date = models.DateField()
    description = models.TextField()
    status = models.BooleanField(default=False)
    booking_id = models.CharField(max_length=10) 

    def __str__(self):
        return self.name