import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './department';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService implements OnInit{

  department:Department;
  employee:Employee[];

  constructor(private httpclient:HttpClient) { }
 
  ngOnInit(): void {

  }

  createDepartment(department:Department):Observable<Object>{
    return this.httpclient.post(`${"http://localhost:8088/department/register"}`,department,{responseType:'text'})
  }

  getDepartmentList():Observable<Department[]>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization','Bearer ${token}')
    .set('Access-Control-Allow-Origin', '*');
    return this.httpclient.get<Department[]>(`http://localhost:8088/department/departments`,{'headers':headers});
  }

  deleteDepartment(id:number):Observable<any>{
    return this.httpclient.delete(`${"http://localhost:8088/department/delete"}/${id}`,{responseType:'text'});
  }

  registeremptodep(eid:number,did:number):Observable<any>{
    return this.httpclient.post(`${"http://localhost:8088/department/register/DTE"}/${eid}/${did}`,null,{responseType:'text'})
  }


  getListofEmployeesbydepartment(deptname:string):Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${"http://localhost:8088/department/empd"}/${deptname}`)
  }



}
