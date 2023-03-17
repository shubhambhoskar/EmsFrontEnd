import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Criteriapage } from './criteriapage';
import { Employee } from './employee';
import { Mappingobject } from './mappingobject';

@Injectable({
  providedIn: 'root'
})



export class EmployeeServiceService {




  requestHeader=new HttpHeaders(
    {"No-Auth": "true"}
  );

  constructor(private httpClient:HttpClient) { }
  
  private baseURl="http://localhost:8088/Employees";
  

  getEmployeeList():Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer ${token}')
    .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<any>(`${this.baseURl}`,{'headers':headers}).pipe(catchError(this.handleError));
  }
  
  private baseURl1="http://localhost:8088/Employee";
  
  createEmployee(employee:Employee):Observable<any>{
    return this.httpClient.post<any>(`${this.baseURl1}`,employee).pipe(catchError(this.handleError))
  }

  handleError(error: { message: any; }){
    return throwError(error.message);
  }

  private baseURl2="http://localhost:8088/id"
  // in update method to get the employee object to display in update screen an also required the id
  getEmployeebyId(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${"http://localhost:8088/id"}/${id}`);
  }

  updateEmployee(id:number,employee:Employee):Observable<any>{
    return this.httpClient.put(`${"http://localhost:8088"}/${id}`,employee,{responseType:'text'}).pipe(catchError(this.handleError))

  }

  deleteEmpoloyee(id:number):Observable<any>{
    return this.httpClient.delete(`${"http://localhost:8088/delete"}/${id}`,{responseType:'text'});
 
  }

  sortingemployee(field:any):Observable<Mappingobject[]>{
    return this.httpClient.get<Mappingobject[]>(`${"http://localhost:8088/sortEmployees"}/${field}`)
  }

  pagination(pnumber:number,Empperpage:number):Observable<Mappingobject[]>{
    return this.httpClient.get<Mappingobject[]>(`${"http://localhost:8088/paginationEmployees"}/${pnumber}/${Empperpage}`)
  }

    // croteria pagination
    getresultbysearichingwithpagination(offset,empperpage,searchfield,sorting,direction):Observable<Criteriapage>{
      return this.httpClient.get<Criteriapage>(`${"http://localhost:8088/pagination"}/${offset}/${empperpage}/${searchfield}/${sorting}/${direction}`)
      // return this.httpClient.get<Criteriapage>(`${"http://localhost:8088/pagination/0/5/string/employeeFirstName/true"}`)
    }


}
