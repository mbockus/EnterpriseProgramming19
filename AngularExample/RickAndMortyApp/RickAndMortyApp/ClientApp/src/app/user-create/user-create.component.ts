import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  createUser() {
    this.userService.createUser(this.userName, this.password)
      .subscribe(() => console.log('yay') );
  }

}
