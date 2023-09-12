import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoModel } from '../../models/todo.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
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
}