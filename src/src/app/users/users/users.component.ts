import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ResultModel, UserModel } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: UserModel[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(users => 
      {
        this.users = users.results
        console.log(users as ResultModel, this.users);
      })
  }
}
