# Generated by Django 2.0.5 on 2018-05-08 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20180508_0717'),
    ]

    operations = [
        migrations.AlterField(
            model_name='choices',
            name='color',
            field=models.CharField(max_length=10),
        ),
    ]
