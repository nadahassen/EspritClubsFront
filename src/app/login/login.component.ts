import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/model/LoginRequest';
import { UserService } from 'src/app/service/user.service';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuardGuard } from 'src/app/service/auth-guard.guard';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRequest:LoginRequest = new LoginRequest;
  isLoading:any=false;
  emailNotExists: boolean =false;
  forgetPasswordEmailsent : boolean=false;
  recoverEmail:string='';
  //emailSent: boolean;
  constructor(private userService:UserService,private router: Router, public snackbar: MatSnackBar,private http: HttpClient, private authGuard: AuthGuardGuard) { }

  ngOnInit(): void {
    this.loginRequest = {
      username: null,
      password: null
    
  }

  }

  signin(loginRequest:LoginRequest){
    console.log("*****************login***************")
    console.log("ddd---->",loginRequest)
    this.isLoading=true;
    this.userService.signin(loginRequest).subscribe(
      (res: any) => {
        
        
        console.log(res);
  
        this.userService.setSession(res);
        console.log(res.status);
        this.isLoading=false;
        this.router.navigateByUrl('/back'); 
    
    }
    
    );
  }
}
