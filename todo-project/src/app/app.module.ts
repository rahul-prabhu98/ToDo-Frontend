import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { TodoBarComponent } from './components/todo-bar/todo-bar.component';
import {TodoService} from './service/todo.service';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { UpdateComponent } from './components/update/update.component';
import { PageRefreshComponent } from './components/page-refresh/page-refresh.component';

const appRoutes: Routes = [
  {path: '', component: ListTodoComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'refresh', component: PageRefreshComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    TodoBarComponent,
    UpdateComponent,
    PageRefreshComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
