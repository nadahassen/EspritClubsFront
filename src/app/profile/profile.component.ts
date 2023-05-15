import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from 'src/app/service/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:any;
  user:any;
  admin:any;
  isAdmin:any;
  image:any;
  UserToEdit: User | null = null; // initialize to null

hide=false;


  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getConnectedUser().subscribe(data => this.user = data)
    this.username=null;
  this.getRole();
  }
  getCurrentUserName(){
    this.userService.getCurrentUserName().subscribe((data)=>{
    this.username=data;
    
    })
  }
  getRole(){
    this.userService.getrole().subscribe(data=>{
      this.admin=data;
      console.log(data.toString())
    })
   }
   editUser(){
    console.log("Before edit",this.UserToEdit);   
    this.userService.updateUser(this.UserToEdit).subscribe(
     data => {
        console.log("after edit 2",data);
        this.UserToEdit = new User();
        this.hide = true;
      }
    );
  }
  openEditForm(user:User) {
    this.UserToEdit = user;
    console.log("new edit vallue : ",this.UserToEdit);
  }
 
  Cancel() {
    this.UserToEdit = null;
    this.hide = true;
  }
}
