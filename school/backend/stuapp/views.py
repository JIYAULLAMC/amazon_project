from django.shortcuts import render
from stuapp.forms import StudentForm
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from stuapp.models import Student
from django.http import HttpResponseRedirect, HttpResponse, HttpRequest






# Create your views here.


def shome(request):
    return render(request, "shome.html")

class StuList(ListView):
    template_name = "shome.html"
    model = Student
    fields = "__all__"
    context_object_name = "stu_form"


class StuCreate(CreateView):
    template_name = "screate.html"
    model = Student
    queryset =Student.objects.all()
    fields = "__all__"
    context_object_name = "form"

    
class StuUpdate(UpdateView):
    template_name = "supdate.html"
    model = Student
    queryset =Student.objects.all()
    fields = "__all__"
    context_object_name = "form"
    success_url = ""   

class StuDelete(DeleteView):
    template_name = "sdelete.html"
    model = Student
    queryset =Student.objects.all()
    fields = "__all__"
    context_object_name = "form"

def stuUpdate(request):
    if request.method == "POST":
        pk = request.POST['pk']
        myurl = f"/stuapp/supdate/{pk}/"
        return HttpResponseRedirect(myurl)
    return render(request, "stuud.html")

    
def stuDelete(request):
    if request.method == "POST":
        pk = request.POST['pk']
        myurl = f"/stuapp/sdelete/{pk}/"
        return HttpResponseRedirect(myurl)
    return render(request, "studel.html")