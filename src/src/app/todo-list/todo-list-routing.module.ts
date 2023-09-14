import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TodosPagesComponent } from "./pages/todos-pages/todos-pages.component";

const routes: Routes = [
    {
        path: 'todo-list',
        component: TodosPagesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodoListRoutingModule {}