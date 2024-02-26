from django.db import models

# Create your models here.

from django.db import models
class Tutor(models.Model):
    name = models.CharField(max_length=80)
    ufid = models.IntegerField()

    def _str_(self):
        return self.name
