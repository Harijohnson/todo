# Generated by Django 4.2.10 on 2024-02-28 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0002_alter_todo_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='status',
            field=models.CharField(default='Started', max_length=100, null=True),
        ),
    ]
