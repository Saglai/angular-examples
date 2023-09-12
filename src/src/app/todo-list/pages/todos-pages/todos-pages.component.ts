import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoModel } from '../../models/todo.model';

@Component({
  selector: 'app-todos-pages',
  templateUrl: './todos-pages.component.html',
  styleUrls: ['./todos-pages.component.css']
})
export class TodosPagesComponent implements OnInit {
  shouldAdd = false;
  todoList: TodoModel[] = [];

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
}
