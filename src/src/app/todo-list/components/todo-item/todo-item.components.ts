import { Component, Input } from "@angular/core";
import { TodoModel } from "../../models/todo.model";
import { Output, EventEmitter } from '@angular/core';
import { TodoService } from "../../services/todo.service";

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
}) 
export class TodoItemComponent {
    isChecked = false;

    constructor(private todoService: TodoService) {}

    @Input() todoItem!: TodoModel
    @Output() deleteTodoEvent = new EventEmitter<TodoModel>();
    @Output() showEditFormEvent = new EventEmitter();

    onCheckChange($event: any) {
        const isChecked = $event.target.checked;

        if (isChecked) {
            this.isChecked = true;
            return;
        }

        this.isChecked = false;
    }

    deleteTodo(todo: TodoModel) {
        this.deleteTodoEvent.emit(todo);
    }

    sendEditFormData(todo: TodoModel) {
        this.todoService.setSelectedTodo(todo);
        this.showEditFormEvent.emit();
    }
}