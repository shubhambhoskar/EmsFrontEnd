import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Mappingobject } from '../mappingobject';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
 
})
export class PaginationComponent implements OnInit{
 
  pnumber:number=0;
  Empperpage:number=5;

   mappingObject:Mappingobject[]=[]

  constructor(private employeeService:EmployeeServiceService){}

  ngOnInit(): void {
  this.onSubmit();
 
  }

  paginationEmployee(pnumber:number,Empperpage:number){
    this.employeeService.pagination(pnumber,Empperpage).subscribe(res=>{
      console.log(res);
      this.mappingObject=res;
      
    })
  }


  onSubmit(){
    console.log(this.pnumber +"-------------------"+this.Empperpage);
    this.paginationEmployee(this.pnumber,this.Empperpage);
   
  }

  key ='id';
  reverse: boolean=false;
  sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }

  previouspage(){
    if(this.pnumber<=0){
      this.pnumber=0;
      this.paginationEmployee(this.pnumber,this.Empperpage);
    }else {
      this.pnumber--;
      this.paginationEmployee(this.pnumber,this.Empperpage);
    }
    // this.pnumber = this.pnumber - this.Empperpage;
  }

  ForwardPage(){
    if(this.mappingObject.length-1>=0){
      let last: number=0;
      last=this.mappingObject.length-1/this.Empperpage;
      if(last>=0){
        this.pnumber++;
      this.paginationEmployee(this.pnumber,this.Empperpage);
      last--;
      }
      
    }else {
      alert("End of the data");
    }
    // this.pnumber = this.pnumber - this.Empperpage;

  }


  // lastpage(){
  //   let ans:number;
  //   ans=this.mappingObject.length-1;
  //   console.log(ans);
  // }

//   isLastPage(): boolean{
//     return this.mappingObject ? this.pnumber === (this.mappingObject.length - this.Empperpage): true;
    
//   }

//   isFirstPage(): boolean {
//     return this.mappingObject ? this.pnumber === (this.mappingObject.length - this.Empperpage ): true;
// }
}
