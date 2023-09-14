import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoModel } from '../../models/todo.model';
import { FormModel } from '../../models/form.model';

@Component({
  selector: 'app-todos-pages',
  templateUrl: './todos-pages.component.html',
  styleUrls: ['./todos-pages.component.css']
})
export class TodosPagesComponent implements OnInit {
  shouldShowForm = false;
  todoList: TodoModel[] = [];
  formData = new FormModel();
  addFormData: FormModel = {name: 'Add a new todo', leftButtonName: 'Add'}
  editFormData: FormModel = {name: 'Edit the todo', leftButtonName: 'Edit'}

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.todoList = this.todoService.getTodos();
  }

  deleteTodo(todo: TodoModel) {
    this.todoList = this.todoList.filter(todoInArray => todoInArray != todo);
  }

  addTodo(todo: TodoModel) {
    this.todoList.push(todo);
  }

  sendAddFormData() {
    this.shouldShowForm = true;
    this.todoService.updateFormData(this.addFormData);
  }

  sendEditFormData() {
    this.shouldShowForm = true;
    this.todoService.updateFormData(this.editFormData);
  }
}
