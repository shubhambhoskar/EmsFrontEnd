import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { ErrorDto } from '../error-dto';
import { ResponseDTO } from '../response-dto';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{
 
  employee:Employee= new Employee();
  
  responceDto:ResponseDTO;
  errotDto:ErrorDto;
  constructor(private employeeService:EmployeeServiceService, private router:Router){}
  
  ngOnInit(): void {
    
  }
  
  SaveEmployee(){
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee).subscribe(res=>{

      this.gotoEmployeeList();

      //console.log(res);
      this.responceDto=res;
      console.log(this.responceDto);
      alert(this.responceDto.data)
    },error=>{
      console.log(error);
      // this.errotDto=error
      // console.log(this.errotDto.message);
      // alert(this.errotDto.message);
    })
    
  }

  //router to go employee list
  gotoEmployeeList(){
    this.router.navigate(['employees']);
    
  }

  onSubmit(){
    console.log(this.employee);
    this.SaveEmployee();
   
  }

}
