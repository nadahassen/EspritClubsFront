import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-list-users-back',
  templateUrl: './list-users-back.component.html',
  styleUrls: ['./list-users-back.component.css']
  
})
export class ListUsersBackComponent implements OnInit {
  UsersList: any;
  user :  User = new User;
  birthDate:any;
  form: boolean=false;
  date: any;
  role:any;
  apiUrl = 'http://127.0.0.1:8089/SpringMVC/User/deleteUser/{id}';
  
  constructor(private http: HttpClient,public userService:UserService,private router: Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.userService.getConnectedUser().subscribe(data => {this.user = data
     console.log(this.user.roleU);
    });
   
    this.getUndeletedUsers(); 
    
  }

  getUndeletedUsers(){
    this.userService.getUndeletedUsers().subscribe((res: any)=> { this.UsersList=res; console.log(res);})
  } 
 
  convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm');
   }
 
   deleteUser(id: any) 
   {
    console.log(`Deleting user with ID ${id}`);
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      () => 
      {
        console.log(`User ${id} deleted successfully`);
        // Refresh the user list
        this.getUndeletedUsers();
      },
      (error) =>
      {
        console.error(`Failed to delete user ${id}: ${error}`);
      }
    );
  }
  
  
  
  
  
  
}
  
  
  
  
  
  


