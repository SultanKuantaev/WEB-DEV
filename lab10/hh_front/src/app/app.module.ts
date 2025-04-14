import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VacancyByCompanyComponent } from './vacancy-by-company/vacancy-by-company.component';
import { RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';

@NgModule({
  declarations: [
    
    AppComponent,
    VacancyByCompanyComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: CompaniesComponent},
      { path: "vacancy", component: VacancyByCompanyComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
