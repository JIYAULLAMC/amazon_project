from distutils.text_file import TextFile
from django.db import models

# Create your models here.


class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    genders = [['male', 'male'], ['female','female']]
    gender = models.CharField(choices=genders, max_length=10)
    date_of_birth = models.DateField()
    sslc_per = models.IntegerField()
    puc_per = models.IntegerField()
    email_id = models.CharField(max_length=50)
    phone_no = models.BigIntegerField()
    address = models.TextField()
