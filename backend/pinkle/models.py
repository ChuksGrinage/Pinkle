from django.db import models
from django.utils.translation import gettext_lazy as _
import uuid

# Create your models here.


class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(verbose_name=_("Post title"), help_text=_("Required"), max_length=225)
    description = models.CharField(verbose_name=_("Post description"), help_text=_("Required"), max_length=50)
    # body = models.TextField(verbose_name=_("Post body"), help_text=_("Required"), max_length=50)
    # grade = models.CharField(
    #     verbose_name=_("Grade focus of post"),
    #     help_text=_("Required, 2 to 3 letter grade"),
    #     max_length=3,
    # )
    # city =  models.CharField(verbose_name=_("City of Post"), help_text=_("Required"), max_length=50)
    # state = models.CharField(verbose_name=_("State of Post"), help_text=_("Required, 2 letter US state code"), max_length=2)
   
    # zip_code =  models.TextField(verbose_name=_("Zipcode of Post"), help_text=_("Required"), max_length=8)

    # created_at = models.DateTimeField(_("Created at"), auto_now_add=True, editable=False)
    # updated_at = models.DateTimeField(_("Updated at"), auto_now=True)

    # ups = models.IntegerField(_("Up votes"), default=0)
    # downs = models.IntegerField(_("Down votes"), default=0)
    # score = models.IntegerField(_("Vote score"), default=0)

