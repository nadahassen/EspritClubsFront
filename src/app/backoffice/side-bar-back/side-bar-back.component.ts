import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-side-bar-back',
  templateUrl: './side-bar-back.component.html',
  styleUrls: ['./side-bar-back.component.css']
})
export class SideBarBackComponent implements OnInit {

  user:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
      this.userService.getConnectedUser().subscribe(data => this.user = data)
  }

}
