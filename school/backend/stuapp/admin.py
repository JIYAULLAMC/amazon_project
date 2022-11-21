from django.contrib import admin
from stuapp.models import Student
# Register your models here.


class StudentAdmin(admin.ModelAdmin):
    list_display = ['id','first_name','last_name','gender','date_of_birth','sslc_per','puc_per','email_id','phone_no','address']


admin.site.register(Student, StudentAdmin)