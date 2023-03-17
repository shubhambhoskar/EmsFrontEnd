import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  id:number;
  employee:Employee= new Employee();

  
  constructor(private employeeService:EmployeeServiceService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
  
    this.id=this.route.snapshot.params['id'];

    this.employeeService.getEmployeebyId(this.id).subscribe(data=>{
      this.employee=data;
    },error =>console.log(error))
  }


  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
     console.log(data)
    },error =>console.log(error))
    alert("Employee is updated")
    this.gotoEmployeeList();
  }

   //router to go employee list
    gotoEmployeeList() {
   // this.router.navigate(['/employees']);
    this.router.navigateByUrl('/app-update-employee', { skipLocationChange: true });
    this.router.navigate(['/employees']);
  }
  


}

