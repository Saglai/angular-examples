import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from '../../models/todo.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

    constructor() {}

    @Input() todoList!: TodoModel[];
    @Output() deleteTodoEvent = new EventEmitter<TodoModel>();

    passOutput(todo: TodoModel) {
        this.deleteTodoEvent.emit(todo);
    }
}