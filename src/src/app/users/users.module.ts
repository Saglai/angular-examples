import { NgModule } from "@angular/core";
import { UsersComponent } from "./users-list/users.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UsersRoutingModule } from "./users-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        UsersComponent,
        UserFormComponent
    ],
    imports: [
        UsersRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule
    ],
    exports: [],
    providers: []
})
export class UsersModule {
}