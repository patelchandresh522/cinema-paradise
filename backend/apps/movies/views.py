from rest_framework import generics,filters
from .serializers import MovieSerailizer
from .models import Movie
from django_filters.rest_framework import DjangoFilterBackend



class MovieList(generics.ListAPIView):
    queryset = Movie.objects.order_by("-created_at").all()
    serializer_class = MovieSerailizer
    filter_backends = [DjangoFilterBackend,filters.SearchFilter]
    filterset_fields = ['category_id','release_type']
    search_feilds = ['name','description'] 

    