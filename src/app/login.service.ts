import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

// get current user which is logged in
public getcurrentemployee(){
  return this.http.get<any>(`${"http://localhost:8088/curr"}`)
}


  // generate token
  public generatetoken(auth:any):Observable<any>{
    return this.http.post<any>(`${"http://localhost:8088/jwtlogin"}`,auth);
  }

  //set token in localstorage

  public loginEmployee(token: string){
   localStorage.setItem("token",token)
    return true;
  }

  // login or not
  public isloginedIn(){
    let tokenStr=localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr=="" || tokenStr==null){
        return false;
      }else{
        return true;
      }
  }

  // log out reomove token from local storage
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //get token 
public getToken(){
  return localStorage.getItem("token");
}

// to set user details
public setUserDetails(auth){
localStorage.setItem("user",JSON.stringify(auth));
}

// get user

public getUser(){
  let UserStr= localStorage.getItem("user");
  if(UserStr!=null){
    return JSON.parse(UserStr);
  }else{
    this.logout();
    return null;
  }

}

// get role for one role

public getuserrole(){
  let user= this.getUser();
  return user.authorities[0].authority;
}

}
