from django.shortcuts import render
import json
from django.http.response import JsonResponse
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        company = Company.objects.all()
        company_json = [p.to_json() for p in company]
        return JsonResponse(company_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company = Company.objects.create(
            name = data.get('name', ''),
            description = data.get('description', ''),
            city = data.get('city', ''),
            address = data.get('address', '')
        )
        return JsonResponse(company.to_json())
    
@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)

    except Company.DoesNotExist as e:
        return JsonResponse({'Error': str(e)})
    
    if request.method == 'GET':
        return JsonResponse(company.to_json())
    

    if request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data.get('name', company.name)
        company.city = data.get('city', '')
        company.save()
        return JsonResponse(company.to_json())
    

    if request.method == 'DELETE':
        company.delete()
        return JsonResponse({"deleted": True})
    
def company_by_vacancy(request, company_id):
    vacancy = Vacancy.objects.filter(company_id=company_id)
    vacancy_json = [p.to_json() for p in vacancy]
    return JsonResponse(vacancy_json, safe=False)

def vacancy_list(request):
    vacancy = Vacancy.objects.all()
    vacancy_json = [p.to_json() for p in vacancy]
    return JsonResponse(vacancy_json, safe=False)


def vacancy_detail(request, vacancy_id):
    vacancy = Vacancy.objects.get(id=vacancy_id)
    return JsonResponse(vacancy.to_json())

def top10_vacancies(request):
    top10_vacancies = Vacancy.objects.all().order_by('-salary')
    top10_vacancies = top10_vacancies[:10]
    top10_vacancies_json = [p.to_json() for p in top10_vacancies]
    return JsonResponse(top10_vacancies_json, safe=False)