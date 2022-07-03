import { Component, OnInit } from '@angular/core';
import {Todo} from '../../todo';
import {TodoService} from '../../service/todo.service';
import {NavigationEnd, Router} from "@angular/router";
import {ListTodoComponent} from "../list-todo/list-todo.component";

@Component({
  selector: 'app-todo-bar',
  templateUrl: './todo-bar.component.html',
  styleUrls: ['./todo-bar.component.scss']
})
export class TodoBarComponent implements OnInit {
  private todo:Todo = new Todo();
  private mySubscription:any;
  constructor(private todoService : TodoService, private router : Router, private listTodo: ListTodoComponent) { }

  ngOnInit() {
  }



  createTodo(){
    console.log(this.todo.dueDate);
    this.todoService.createTodo(this.todo).subscribe(
      (data : Todo) =>{
        console.log(data);
        this.listTodo.addTodo(data);

      },
      error => {
          console.log(error);
      }
    )
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }


}
