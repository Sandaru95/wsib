from django.urls import path
from . import views

app_name = 'detail'

urlpatterns = [
    path('<int:pk>/', views.IndexView.as_view(), name='index'),
    path('<int:pk>/vote/', views.VoteView.as_view(), name='vote')
]