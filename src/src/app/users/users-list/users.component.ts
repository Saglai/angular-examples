import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: UserModel[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(users => this.users = users.results)
  }

  addUser(user: UserModel) {
    this.users.push(user);
  }
}
