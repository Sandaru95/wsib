from django.db import models
import operator

class Nation(models.Model):
    title = models.CharField(max_length=300)
    pro_name = models.CharField(max_length=300)
    flag_emoji = models.CharField(max_length=20)

    def __str__(self):
        return str(self.title)

class Video(models.Model):
    title = models.CharField(max_length=500)
    youtube_embed_text = models.TextField(max_length=2000)
    no_youtube_views = models.IntegerField(default=0)
    no_votes = models.IntegerField(default=0)
    video_source = models.FileField(blank=True, null=True)
    thumbnail = models.ImageField(blank=True, null=True)
    nations = models.ManyToManyField(Nation)
    vote_statement = models.CharField(max_length=1000, null=True)
    winning_nation = models.ForeignKey(Nation, on_delete=models.CASCADE, related_name='winning_nations', blank=True, null=True)

    def __str__(self):
        return str(self.title)

    def make_vote_statement(self):
        vote_statement_temp = "{"
        for nation in (self.nations).all():
            vote_statement_temp += f"'{nation.pro_name}':0 ,"

        vote_statement_temp += "}"
        self.vote_statement = vote_statement_temp

    def calculate_winning_nation(self):
        vote_statement_temp = eval(str(self.vote_statement))
        sorted_x = sorted(vote_statement_temp.items(), key=operator.itemgetter(1))
        filtered_winning_nation = sorted_x[-1]
        self.winning_nation = Nation.objects.get(pro_name=filtered_winning_nation[0])



