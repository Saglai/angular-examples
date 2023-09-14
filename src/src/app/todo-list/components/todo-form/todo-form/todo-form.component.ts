import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormModel } from 'src/app/todo-list/models/form.model';
import { TodoModel } from 'src/app/todo-list/models/todo.model';
import { TodoService } from 'src/app/todo-list/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  title = 'Title';
  currentFormData!: FormModel;
  editTodo!: TodoModel

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.formData.subscribe(formData => {
      this.currentFormData = formData;

      if (this.currentFormData.name.startsWith('Edit')) {
        this.editTodo = this.todoService.getSelectedTodo();
        this.title = this.editTodo.title;
      } else {
        this.title = 'Title';
      }
    });
  }

  @Output() addNewTodoEvent = new EventEmitter<TodoModel>();
  @Output() cancelFormEvent = new EventEmitter<boolean>();

  changeTodo() {
    if (this.currentFormData.name.startsWith('Add')) {
      const newTodo = new TodoModel();
      newTodo.id = Date.now();
      newTodo.title = this.title;

      this.addNewTodoEvent.emit(newTodo);
      this.title = '';
      return;
    }

    if (this.currentFormData.name.startsWith('Edit')) {
      this.editTodo.title = this.title;
      this.cancelForm();
      return
    }
  }

  cancelForm() {
    this.cancelFormEvent.emit(false);
    this.title = 'Title';
    this.editTodo!;
  }
}
