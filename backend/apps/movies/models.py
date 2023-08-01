from django.db import models 
from cloudinary.models import CloudinaryField
from apps.category.models import Category
# Create models here


class Movie(models.Model):
    My_CHOICE = (
        ('Newly Released', 'Newly released'),
        ('Coming Soon', 'Coming Soon')
    )

    class Meta(object):
        db_table = 'movie'
    name = models.CharField(
        'Name', blank=False, null=False, max_length=50, db_index=True
    ) 
    description = models.TextField(
        'description', blank=False, null=False, max_length=500
    )
    image_mobile = CloudinaryField(
       'image mobile', blank=True,null=True
    )
    movie_duration = models.IntegerField(
        'duration',blank=False, null=False, default=120
    )
    state = models.CharField(
        'state',blank=False,null=False, max_length =50,default='USA'
    )
    release_type = models.CharField(
        'release_type', blank =False, null=False,max_length=50, choices=My_CHOICE
    )
    category_id = models.ForeignKey(
        Category, on_delete=models.CASCADE
    )
    rating = models.IntegerField(
        'rating', blank=False,null=False
    )
    trailer_link = models.CharField(
        'Trailer Link',blank=False,null=False, max_length=500
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
    