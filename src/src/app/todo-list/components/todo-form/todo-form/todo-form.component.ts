import { Component, EventEmitter, Output } from '@angular/core';
import { TodoModel } from 'src/app/todo-list/models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  title = 'Title';

  @Output() addTodoEvent = new EventEmitter<TodoModel>();
  @Output() cancelFormEvent = new EventEmitter<boolean>();

  addTodo() {
    const newTodo = new TodoModel();
    newTodo.id = Date.now();
    newTodo.title = this.title;

    this.addTodoEvent.emit(newTodo);
  }

  cancelForm() {
    this.cancelFormEvent.emit(false);
    this.title = 'Title';
  }
}
