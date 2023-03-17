import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeedepartmentComponent } from './employeedepartment/employeedepartment.component';
import { SortingComponent } from './sorting/sorting.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ListofempbydeptComponent } from './listofempbydept/listofempbydept.component';
import { CriteriaPaginationComponent } from './criteria-pagination/criteria-pagination.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { authInterceptorProvider } from './auth.Interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    CreateDepartmentComponent,
    DepartmentListComponent,
    EmployeedepartmentComponent,
    SortingComponent,
    PaginationComponent,
    ListofempbydeptComponent,
    CriteriaPaginationComponent,
    LogincomponentComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
