import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TodoModel } from "../models/todo.model";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
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


    constructor(private http: HttpClient) {}

    getTodos(): TodoModel[] {
        return this.todoList
    }
}