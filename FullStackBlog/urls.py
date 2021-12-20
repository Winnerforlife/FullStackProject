from django.contrib import admin
from django.urls import path, re_path, include
from users.forms import UserForm
from django_registration.backends.one_step.views import RegistrationView
from main.views import Index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/register/', RegistrationView.as_view(
        form_class = UserForm, 
        success_url = '/'
    ), name = 'register'), 
    path('accounts/', include('django.contrib.auth.urls')),
    path('api/', include('users.urls')),
    path('api/', include('articles.urls')),
    path('auth/', include('rest_framework.urls')),
    path('rest-auth/', include('dj_rest_auth.urls')),
    path('rest-auth/registration/', include('dj_rest_auth.registration.urls')),

    re_path(r'^.*$', Index.as_view(), name='index'),
]
