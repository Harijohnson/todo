from django.db import models
from django.contrib.auth.models import User
# Create your models here.




# to do list table code
class todo(models.Model):
    user = models.ForeignKey(User, on_delete= models.SET_NULL ,null=True) 
    todo = models.CharField(max_length = 1000 ,default = 'Nothing', null = True)
    status = models.CharField(max_length = 100 ,default = 'Started', null = True)

    def __str__(self):
        return str(self.user)