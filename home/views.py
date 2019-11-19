from django.shortcuts import render
from django.views import generic

from .models import Video

class IndexView(generic.TemplateView):
    template_name = 'home/index.html'
    
    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['video_list'] = Video.objects.all()
        return context