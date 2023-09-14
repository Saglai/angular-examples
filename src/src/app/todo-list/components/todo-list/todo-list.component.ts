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
    @Output() showEditFormEvent = new EventEmitter();

    passOutput(value: any) {

        if (value) {
            this.deleteTodoEvent.emit(value);
            return
        }

        this.showEditFormEvent.emit();
    }
}