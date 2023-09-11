import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { UserModel } from '../user.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm = new FormGroup({
    name: new FormControl('', [])
  })

  constructor() {}

  submitForm() {
    const newUser: UserModel = this.userForm.value as UserModel;
    newUser.birth_year = '';
    this.addNewUser(newUser)
  }

  @Output() newUserEvent = new EventEmitter<UserModel>();
  
  addNewUser(value: UserModel) {
    this.newUserEvent.emit(value);
  }
}
