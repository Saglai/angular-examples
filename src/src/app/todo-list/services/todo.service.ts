import { Injectable } from "@angular/core";
import { TodoModel } from "../models/todo.model";
import { BehaviorSubject } from "rxjs";
import { FormModel } from "../models/form.model";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    formData: BehaviorSubject<FormModel>
    todo!: TodoModel

    private todoList: TodoModel[] = [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        }
    ]

    constructor() {
      this.formData = new BehaviorSubject(new FormModel);
    }

    getTodos(): TodoModel[] {
        return this.todoList
    }

    updateFormData(data: FormModel) {
      this.formData.next(data);
    }

    setSelectedTodo(recievedTodo: TodoModel) {
      this.todo = recievedTodo;
    }

    getSelectedTodo() {
      return this.todo;
    }
}