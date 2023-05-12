import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { tap } from "rxjs/operators";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector,private router:Router, public snackbar: MatSnackBar) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let serviceUser = this.injector.get(UserService);
    if(serviceUser.getCurrentToken()){
      console.log(serviceUser.getCurrentToken());
      const tokenizedReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' +  serviceUser.getCurrentToken())
    }
    );
    console.log("tokenizedReq-------->"+tokenizedReq);
  return next.handle(tokenizedReq).pipe(
    tap(
        succ => { },
        err => {
            if (err.status === 0){
                console.log("test 500 ")
               
                //this.router.navigateByUrl('/login');
            }
            else if(err.status === 403){
               
                //this.router.navigateByUrl('/login');
            }
            else if(err.status === 401){
                
                console.log("bad credantial")
                this.router.navigateByUrl('/login');
            }
            
        }
    )
)
  }
  else{return next.handle(req).pipe(
    tap(
        succ => { },
        err => {
            if (err.status === 0){
                console.log("test 500 ")
                
                //this.router.navigateByUrl('/login');
            }
            else if(err.status === 403){
               
                //this.router.navigateByUrl('/login');
            }
            else if(err.status === 401){
               
                console.log("bad credantial")
                this.snackbar.open("Incorrect username or password.", "login");
                this.router.navigateByUrl('""');
            }
            
        }
    )
)
  }
  }
  

}
    


    
  

