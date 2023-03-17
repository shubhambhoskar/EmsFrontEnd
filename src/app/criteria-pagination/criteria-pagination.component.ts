import { Component, OnInit } from '@angular/core';
import { Criteriapage } from '../criteriapage';
import { EmployeeServiceService } from '../employee-service.service';
import { Mappingobject } from '../mappingobject';

@Component({
  selector: 'app-criteria-pagination',
  templateUrl: './criteria-pagination.component.html',
  styleUrls: ['./criteria-pagination.component.css']
})
export class CriteriaPaginationComponent implements OnInit{
  
  constructor(private employeeService:EmployeeServiceService){}
 
  criteriaPage:Criteriapage;
  mappingObject:Mappingobject[];

  ngOnInit(): void {
    
    // this.employeeService.getresultbysearichingwithpagination().subscribe(res=>{
    //   console.log(res);
    //   this.mappingObject=res.content
    //  })
    this.onSubmit();
  }

   // For pagination
  offset:number=0;
  empperpage:number=5;
  searchfield:String="string";
  sortby:string="employeeFirstName";
  direction:boolean=true;
  total:number;
  
 onSubmit(){
  this.getResult(this.offset,this.empperpage,this.searchfield,this.sortby,this.direction);
 }

 getResult(offset:number, empperpage:number, searchfield:String,sortby:string,direction:boolean){
  this.employeeService.getresultbysearichingwithpagination(this.offset,this.empperpage,this.searchfield,this.sortby,this.direction).subscribe(res=>{
    console.log(res);
     this.mappingObject=res.content;
     this.total=res.totalPages
  })
 }

 currentPage=1;
 next() {
  this.offset = this.offset + 1;
  this.getResult(this.offset,this.empperpage,this.searchfield,this.sortby,this.direction);

  if(this.currentPage<this.total-1) this.currentPage++;
}

prev() {
  this.offset = this.offset - 1;
  this.getResult(this.offset,this.empperpage,this.searchfield,this.sortby,this.direction);

  if(this.currentPage>1) this.currentPage--;
}

isLastPage(): boolean {
  //return this.total ? this.offset === (this.total - this.empperpage): true;
  // if(this.offset === (this.total - this.empperpage) && this.offset>=1) return true;
  // else return false;

  // if(this.offset==this.total) return false;
  // else return true;
  
  // if(this.empperpage>4) return false ;
  // else return true;

  return this.currentPage === this.total
}

isFirstPage(): boolean {
  // return this.mappingObject ? this.offset === 0 : true;

  return this.currentPage===1;
}


}
