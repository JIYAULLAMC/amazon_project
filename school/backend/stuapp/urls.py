from django.urls import path
from stuapp import views
app_name = "stuapp"



urlpatterns = [
    path("shome/",views.shome, name="shome"),
    path("slist/",views.StuList.as_view(),name="slist"),
    path("screate/",views.StuCreate.as_view(),name="screate"),
    path("supdate/<int:pk>/",views.StuUpdate.as_view(),name="supdate"),
    path("sdelete/<int:pk>/",views.StuDelete.as_view(),name="sdelete"),

    path("supdate/",views.stuUpdate,name="supdate"),
    path("sdelete/",views.stuDelete,name="sdelete"),
]