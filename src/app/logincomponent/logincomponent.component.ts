import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authrequest } from '../authrequest';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit{
 
  ngOnInit(): void {
  
    
  }

  constructor(private loginService:LoginService, private router:Router){}

  auth:Authrequest= new Authrequest();

  onSubmit(){
    console.log(this.auth);

    // token generation
    this.loginService.generatetoken(this.auth).subscribe(res=>{
      console.log(res);
      console.log(res.token);

      localStorage.setItem("token",res.token)
      
      this.gotoEmployeeList();

      //login
      
      
      //  this.loginService.loginEmployee(res.token)
      
      // this.loginService.getcurrentemployee().subscribe(
      //   (user:any)=>{
      //     this.loginService.setUserDetails(user);
      //     console.log(user);

      //     //redirect to admin role to dashboard
      //   }
      // )


    }, (error)=>console.log(error));

  }
  gotoEmployeeList(){
    this.router.navigate(['employees']);
  }
}
