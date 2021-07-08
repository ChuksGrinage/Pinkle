from .yearinschool import YEAR_IN_SCHOOL
from django.db import models
from django.contrib.auth.models import User
from posts.statechoices import STATE_CHOICES

# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    dob = models.DateField()
    city = models.CharField(max_length=50)
    state = models.CharField(
        max_length=2,
        choices=STATE_CHOICES
    )
    zip_code = models.TextField()


class Student(models.Model):
    teacher = models.ForeignKey(
        User, on_delete=models.CASCADE)
    dob = models.DateField()
    grade = models.CharField(
        max_length=3,
        choices=YEAR_IN_SCHOOL
    )
