from django.db import models

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

    def __str__(self):
        return str(self.title)

    def make_vote_statement(self):
        vote_statement_temp = "{"
        for nation in (self.nations).all():
            vote_statement_temp += f"'{nation.pro_name}':0 ,"

        vote_statement_temp += "}"
        self.vote_statement = vote_statement_temp
        

