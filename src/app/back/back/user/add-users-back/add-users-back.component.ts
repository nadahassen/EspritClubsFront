import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SignupRequest } from 'src/app/model/SignupRequest';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-add-users-back',
  templateUrl: './add-users-back.component.html',
  styleUrls: ['./add-users-back.component.css']
})
export class AddUsersBackComponent implements OnInit {
  signupRequest:SignupRequest= new SignupRequest();;
  roles:any;
  role:any;

  constructor(private router:Router,public userService:UserService,private fb: FormBuilder) { }

  registerForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    lastName : new FormControl('', [Validators.required] ),
   firstName : new FormControl('', [Validators.required]),
   roleU : new FormControl('', [Validators.required]),

   birthdate : new FormControl('', [Validators.required]),

    email: new FormControl('', [Validators.required, Validators.email]),
   // passwords:this.fb.group({
      password1:new FormControl('',[Validators.required]),
      password2:new FormControl('',[Validators.required]),
      file:new FormControl('',[Validators.required]),//})
    
  });
  dateValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      const birthdate:Date = control.value;
      const today :Date=new Date();
      if ((birthdate.getTime<today.getTime)) {
        console.log('valid birthdate');
        return { 'invalidDate': true }
      
      }
    }
    return { 'validDate':false  };
  }

  ngOnInit(): void {
    this.signupRequest={
      firstName:null,
      lastName:null,
      userName:null,
      email:null,
      password:null,
      birthDate:null,
      image:null,
      roleU:null,

  };
  this.roles = ['ROLE_ETUDIANT','ROLE_ADMIN','ROLE_MEMBER', 'ROLE_RESPONSIBLE'];

  }

  getRole(event: any) {
    if (event.target.value != 0) {
     console.log("role",event.target.value);
      this.role = event.target.value;
    } 
  }

  uploadFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerForm.get('file')?.setValue(file);
    }
  }

  signup(signupRequest:any){
    const formData = new FormData();
    signupRequest.roleU = this.role;
    formData.append('file', this.registerForm.get('file')?.value);
    formData.append('user', JSON.stringify(signupRequest));
    this.userService.signup(formData).subscribe(()=>{
      this.router.navigate(['dashboard/UsersList']);
    });
    
    //this.router.navigateByUrl('/login');
   console.log("buton work!!")
  }
 /* convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd');
  }*/


}
