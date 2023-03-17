import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CriteriaPaginationComponent } from './criteria-pagination/criteria-pagination.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeedepartmentComponent } from './employeedepartment/employeedepartment.component';
import { ListofempbydeptComponent } from './listofempbydept/listofempbydept.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SortingComponent } from './sorting/sorting.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'',redirectTo:'app-logincomponent',pathMatch:'full'},
  {path:'employees', component:EmployeeListComponent},
  {path:'create-employee', component:CreateEmployeeComponent},
  
  // here we are created the path if you provide "http://localhost:4200/" this path then it will directly redirect to the employees path
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'employee-deatils/:id',component:EmployeeDetailsComponent},
  {path:'create-department',component:CreateDepartmentComponent},
  {path:'departments',component:DepartmentListComponent},
  {path:'empdep/:eid/:did',component:EmployeedepartmentComponent},
  {path:'sorting/:field',component:SortingComponent},
  // app-pagination
  {path:'app-pagination',component:PaginationComponent},
  // app-listofempbydept
  {path:'app-listofempbydept/:name',component:ListofempbydeptComponent},
  // 'app-criteria-pagination'
  {path:'app-criteria-pagination',component:CriteriaPaginationComponent},
  {path:'app-logincomponent',component:LogincomponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
