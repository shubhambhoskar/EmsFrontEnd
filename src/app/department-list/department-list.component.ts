import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentServiceService } from '../department-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit{
  
  departments:Department[] ;
  emps:Employee[];
  constructor(private departmentService:DepartmentServiceService,private router:Router){}

  ngOnInit(): void {

  //   this.departments=[{
  //     "departmentID":1,
  //     "departmentName":"java"
  //   },
  //   {
  //     "departmentID":1,
  //     "departmentName":"java"
  //   },
  //   {
  //     "departmentID":1,
  //     "departmentName":"java"
  //   },
  //   {
  //     "departmentID":1,
  //     "departmentName":"java"
  //   }
  // ]

  this.getDepartment();

  }
  
 private getDepartment(){
  this.departmentService.getDepartmentList().subscribe(res=>{
    this.departments=res;
   
  })
  this.gotoDepartmentList();
 }

 deleteDepartment(id:number){
  this.departmentService.deleteDepartment(id).subscribe(Response=>{
    console.log(Response);
    window.location.reload();
  });
  this.gotoDepartmentList();
 }
 

gotoDepartmentList(){
  this.router.navigate(['departments']);
  
}

getlistofemployyebydept(departmentName:string){
  console.log(departmentName);
  this.departmentService.getListofEmployeesbydepartment(departmentName).subscribe(res=>{
    console.log(res);
    this.emps=res
    if(this.emps && this.emps.length>0)this.router.navigate(['app-listofempbydept',departmentName])
    else alert("No employee Added")
  })
 
}


}

