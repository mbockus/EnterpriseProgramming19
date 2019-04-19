import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private userService: UserService) { }


  ngOnInit() {
  }

  authenticateUser() {
    this.userService.loginUser(this.userName, this.password).subscribe(() => console.log('yay'));
  }
}
