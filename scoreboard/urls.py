from django.urls import path
from .views import *
urlpatterns = [
    path('getinstructions/', GetInstructionView.as_view(), name='获取指令列表'),
    path('getcycle/', GetCycleView.as_view(), name='获取周期'),
]