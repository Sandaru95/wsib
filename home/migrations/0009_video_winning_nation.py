# Generated by Django 2.2.7 on 2019-11-19 13:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_auto_20191119_0425'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='winning_nation',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='winning_nations', to='home.Nation'),
        ),
    ]
