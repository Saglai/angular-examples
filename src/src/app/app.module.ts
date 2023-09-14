import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users-list/users.component';
import { UsersService } from './users/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './users/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TodoListModule
  ],
  exports: [],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
