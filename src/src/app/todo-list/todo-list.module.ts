import { NgModule } from "@angular/core";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.components";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { TodosPagesComponent } from './pages/todos-pages/todos-pages.component';
import { TodoFormComponent } from './components/todo-form/todo-form/todo-form.component';

@NgModule({
    declarations: [
        TodoListComponent,
        TodoItemComponent,
        TodosPagesComponent,
        TodoFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    exports: [TodosPagesComponent]
})
export class TodoListModule {}