from django.views import generic
from django.shortcuts import redirect

class ReturnToHomeView(generic.View):
    def get(self, request):
        return redirect('home:index')
