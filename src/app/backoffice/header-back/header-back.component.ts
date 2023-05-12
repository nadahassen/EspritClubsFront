import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.css']
})
export class HeaderBackComponent implements OnInit {

  username:any;
  user:any;
  admin:any;
  isAdmin:any;
  image:any;


  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {// this.dialogRef.closeAll();
    this.userService.getConnectedUser().subscribe(data => this.user = data)
  this.username=null;
this.getRole();
/* this.image=null;
this.isAdmin=false; */

  
}
getCurrentUserName(){
  this.userService.getCurrentUserName().subscribe((data)=>{
  this.username=data;
  
  })
}


logout(){
  this.userService.logout();
  this.router.navigateByUrl('/login');
}

getRole(){
 this.userService.getrole().subscribe(data=>{
   this.admin=data;
   console.log(data.toString())
 })
}
isAdminMethod(){
if(this.admin==="Admin"){
this.isAdmin=true;
}}

 
}
