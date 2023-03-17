import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentServiceService } from '../department-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-listofempbydept',
  templateUrl: './listofempbydept.component.html',
  styleUrls: ['./listofempbydept.component.css']
})
export class ListofempbydeptComponent implements OnInit{
  
  constructor(private departmentService:DepartmentServiceService,private route:ActivatedRoute){}
  departmentname:string;
  department:Department ;
  emps:Employee[];
  e:Employee;
  ngOnInit(): void {
    this.departmentname=this.route.snapshot.params['name'];
    this.department=new Department();
    this.departmentService.getListofEmployeesbydepartment(this.departmentname).subscribe(res=>{
      console.log(res);
     this.emps=res
    })
  } 

}
