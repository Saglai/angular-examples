import { NgModule } from "@angular/core";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.components";
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodosPagesComponent } from './pages/todos-pages/todos-pages.component';

@NgModule({
    declarations: [
        TodoListComponent,
        TodoItemComponent,
        TodosPagesComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    exports: [TodoListComponent,]
})
export class TodoListModule {}