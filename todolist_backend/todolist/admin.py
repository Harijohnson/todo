from django.contrib import admin
from .models import todo
# Register your models here.


class todo_admin(admin.ModelAdmin):
    fields = [ 'user','todo']

admin.site.register(todo,todo_admin)