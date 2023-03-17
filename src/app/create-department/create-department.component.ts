import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentServiceService } from '../department-service.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit{
 
  department:Department= new Department();;

  constructor(private departmentService:DepartmentServiceService, private router: Router){}

  ngOnInit(): void {
  }
  

  SaveDepartment(){
    this.departmentService.createDepartment(this.department).subscribe(data=>{
      console.log(data);
    },error=> console.log(error));
    this.gotoDepartmentList();
    
  }


  onSubmit(){
    console.log(this.department)
    this.SaveDepartment();
    alert("Department is added")
  }

  gotoDepartmentList(){
    this.router.navigate(['/departments']);
    
  }
 
}
