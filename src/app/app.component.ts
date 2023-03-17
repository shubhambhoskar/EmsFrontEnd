import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMS frontend';


constructor(private loginService:LoginService,private router:Router){}
  
logout(){
    this.loginService.logout();
    alert("Employee logged out")
    this.router.navigateByUrl('app-logincomponent');
  }

}
