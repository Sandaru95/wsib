# Generated by Django 2.2.6 on 2019-11-19 04:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_nation_pro_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='nation',
            name='pro_name',
            field=models.CharField(max_length=300),
        ),
    ]
