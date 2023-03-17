import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";



@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    
    constructor(private loginService:LoginService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add the jwt token
    console.log("Inside inter")
        let authreq=req;
        const token=this.loginService.getToken();
        //console.log("Herer is token->" +token)
        if(token!=null){
            console.log("Herer is token->...." +token)

            authreq=authreq.clone({
                
                headers:req.headers.set('Authorization',`Bearer ${token}`)
                // .set('Content-Type', 'application/json')
                // .set('Access-Control-Allow-Origin', '*')
                // .set('mode','no-cors')
                // .set("Cache-Control", "no-cache")
                // .set("Cache-Control", "no-store")
                // .set('Connection',"keep-alive")
                .set("Accept","*/*")
                
            });
            console.log(this.loginService.isloginedIn())
            // authreq=authreq.clone({
            //     withCredentials:true,
            //     headers:req.headers.set('Authorization',`Bearer ${token}`).set('Access-Control-Allow-Origin', '*')

            // })

            return next.handle(authreq);
            //httpOptions.headers = httpOptions.headers.set('Access-Control-Allow-Origin', '*');
        }else{
            return next.handle(req);
        }
        
        

    }
    
}

export const authInterceptorProvider=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    }
];