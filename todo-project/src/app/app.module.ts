import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { TodoBarComponent } from './components/todo-bar/todo-bar.component';
import {TodoService} from './service/todo.service';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: '', component: ListTodoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    TodoBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
