import { Component, OnInit } from '@angular/core';
import { DepartmentServiceService } from '../department-service.service';
import { Empdep } from '../empdep';

@Component({
  selector: 'app-employeedepartment',
  templateUrl: './employeedepartment.component.html',
  styleUrls: ['./employeedepartment.component.css']
})
export class EmployeedepartmentComponent implements OnInit{
  
  constructor(private departmentService:DepartmentServiceService){}
  ngOnInit(): void {
  }

eid:number;
did:number;
  emdep:Empdep=new Empdep();

saveemptodep(){
  console.log(this.eid)
  console.log(this.did)
  // this.departmentService.registeremptodep(this.emdep)
  
  this.departmentService.registeremptodep(this.eid,this.did).subscribe(res=>{
    console.log(res);
   
  })
  
}

  onSubmit(){
    this.saveemptodep();
    alert("Employee is successfully added to department")
  }
}
