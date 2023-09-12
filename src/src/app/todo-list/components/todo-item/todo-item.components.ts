import { Component, Input } from "@angular/core";
import { TodoModel } from "../../models/todo.model";
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
}) 
export class TodoItemComponent {
    isChecked = false;

    @Input() todoItem!: TodoModel
    @Output() deleteTodoEvent = new EventEmitter<TodoModel>();

    onCheckChange($event: any) {
        const isChecked = $event.target.checked;

        if (isChecked) {
            this.isChecked = true;
            return;
        }

        this.isChecked = false;
    }

    deleteTodo(value: TodoModel) {
        this.deleteTodoEvent.emit(value);
    }
}