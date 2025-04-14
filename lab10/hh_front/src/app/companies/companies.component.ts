import { Component } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../module';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  companies: Company[] = [];

  newCompanyName: String = "";
  newCompanyDesc: String = "";
  newCompanyCity: String = "";
  newCompanyAddress: String = "";
  
  constructor(private companyService: CompanyService) {}

  ngOnInit() : void {
    this.companyService.getCompanies().subscribe((data: Company[])=>{
      this.companies = data
    })
  }

  addCompany() {
    this.companyService.createCompany(
      this.newCompanyName, this.newCompanyDesc, this.newCompanyCity, this.newCompanyAddress
      ).subscribe((data) => {
        this.companies.push(data)
        this.newCompanyName = "";
        this.newCompanyDesc = "";
        this.newCompanyCity = "";
        this.newCompanyAddress = "";
    });
  }

  getCompanyId(company_id: number) {
    this.companyService.getCompany_id(company_id)
  }

  deleteCompany(companyId: number) {
    this.companyService.deleteCompany(companyId).subscribe((data) => {
      this.companies = this.companies.filter((company) => company.id !== companyId);
    });
  }
}
