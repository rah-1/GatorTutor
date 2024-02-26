from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Tutor

class TutorAdmin(admin.ModelAdmin):
    list_display = ('name', 'ufid')

# Register your models here.

admin.site.register(Tutor, TutorAdmin)