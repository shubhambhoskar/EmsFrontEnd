import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { Criteriapage } from '../criteriapage';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Mappingobject } from '../mappingobject';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
 
  employees$:Employee[];

  constructor(private employeeService:EmployeeServiceService, private router:Router,routeReuseStrategy: RouteReuseStrategy){ }
  
  ngOnInit(): void {
    

  
    this.getemployees();
  
  
    // for testing
    // this.employees=[{
    //   "employeeFirstName":"sb",
    //   "employeeLastName":"dgfds",
    //   "emailId":"a@gmail.com",
    //   "phoneNumber":"7896541230"
    // },
    // {
    //   "employeeFirstName":"sb",
    //   "employeeLastName":"dgfds",
    //   "emailId":"a@gmail.com",
    //   "phoneNumber":"7896541230"
    // }]

  }

  private getemployees(){
    this.employeeService.getEmployeeList().subscribe(res=>{
      this.employees$=res;
     
    });
  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee',id])
    this.getemployees();
    
  }


  deleteEmployee(id:number){
    this.employeeService.deleteEmpoloyee(id).subscribe(Response=>{
      console.log(Response);
    });
    console.log("Hiiiiii");
     this.getemployees();
    this.gotoEmployeeList();
  }


  employeedetails(id:number){
    this.router.navigate(['employee-deatils',id])
  }

  gotoEmployeeList(){
    this.router.navigate(['/employees'])
    
  }
  

 
}
