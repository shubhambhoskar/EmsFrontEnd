import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Empdep } from '../empdep';
import { EmployeeServiceService } from '../employee-service.service';
import { Mappingobject } from '../mappingobject';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit{
  ngOnInit(): void {

  }
  field:any;
  mappingObject:Mappingobject[];
  
  savefield(value){
    this.field=value.target.value;
    console.log(this.field);
  }

  constructor(private employeeService:EmployeeServiceService){}

  sortingEmployee(field: any){
    this.employeeService.sortingemployee(field).subscribe(res=>{
      console.log(res);
      this.mappingObject=res;
    })
  }

  onSubmit(){
  this.sortingEmployee(this.field);
  }
}
