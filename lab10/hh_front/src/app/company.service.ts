import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Vacancy } from './module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://127.0.0.1:8000';
  company_id: number | undefined
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }


  createCompany(companyName: String, companyDesc: String, companyCity: String, CompanyAddress: String): Observable<Company> {
    return this.client.post<Company>(
        `${this.BASE_URL}/api/companies/`,
        {
          name: companyName, description: companyDesc,
          city: companyCity, address: CompanyAddress
        }
      );
  }

  getCompany_id(company_id: number) {
    this.company_id = company_id
  }


  deleteCompany(companyId: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/companies/${companyId}/`
    )
  }

  vacanciesByCompany(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${this.company_id}/vacancies`)
  }
}
