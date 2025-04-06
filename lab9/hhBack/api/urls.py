from django.urls import path
from api import views

urlpatterns = [
    # Companies
    path('companies/', views.company_list),
    path('companies/<int:company_id>/', views.company_detail),
    path('companies/<int:company_id>/vacancies/', views.company_by_vacancy),

    # Vacancies
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vacancy_id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top10_vacancies)

]