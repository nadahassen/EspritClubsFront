import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-all-back',
  templateUrl: './all-back.component.html',
  styleUrls: ['./all-back.component.css']
})
export class AllBackComponent implements OnInit {
  user:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
      this.userService.getConnectedUser().subscribe(data => this.user = data)
  }

}
