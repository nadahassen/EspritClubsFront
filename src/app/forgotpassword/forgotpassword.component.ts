import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  emailNotExists: boolean =false;
  forgetPasswordEmailsent : boolean=false;
  recoverEmail:string='';
  emailSent: boolean=false;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }


  forgotPassword(){
    this.forgetPasswordEmailsent=false;
    this.emailNotExists=false;
    this.userService.retrievePassword(this.recoverEmail).subscribe(
      res=>{
        console.log(res);
        this.forgetPasswordEmailsent=true;

      },
      error=>{
        console.log(error.text());
        let errorMessage= error.text();
        if(errorMessage=="Email not found !") this.emailNotExists=true;

      }
    );
  }
}
