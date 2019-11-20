from django.shortcuts import render, HttpResponse
from django.views import generic

from home.models import Video

class IndexView(generic.View):
    def get(self, request, pk):
        context = {
            'video_object': Video.objects.get(pk=pk)
        }
        return render(request, 'detail/index.html', context)

class VoteView(generic.View):
    def post(self, request, pk):
        video_object = Video.objects.get(pk=pk)
        the_vote_statement = eval(video_object.vote_statement)
        the_vote_statement[request.POST['nation_voted']] = (the_vote_statement[request.POST['nation_voted']] + 1)
        video_object.vote_statement = the_vote_statement
        video_object.no_votes = (video_object.no_votes + 1)
        video_object.calculate_winning_nation()
        video_object.save()
        return HttpResponse('Success!')