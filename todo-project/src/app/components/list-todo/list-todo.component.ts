import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {Todo} from '../../todo';
import {Router} from "@angular/router";
import {error} from "util";
import { fromEvent} from "rxjs";

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  private todos: Todo[];
  constructor(private _todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(){
      this._todoService.getTodo().subscribe(
        (data : Todo[]) => {
          this.todos = data;
          console.log(this.todos);
        },
        error => {
          console.log(error);
        }
      )
  }

  doDelete(todo: Todo){
      this._todoService.deleteTodo(todo.id).subscribe(
        data => {
          console.log(data);
          this.todos.splice(this.todos.indexOf(todo),1);
        },
        error => console.log(error)
      )
  }

  doUpdate(todo: Todo){
    this._todoService.setter(todo);
    this.router.navigate(['/update']);
  }

  checkTodo(todo: Todo){
    this._todoService.updateTodo(todo, todo.id).subscribe(
      data => {console.log(data)},
      error => {console.log(error)}
    );

  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  divFn($event){
    if ($event.target.id == "btnDiv") {
      let target = $event.target;

      target.classList.toggle("active");
      let nextContent = target.nextElementSibling;
      if (nextContent.style.display === "grid") {
        nextContent.style.display = "none";
      } else {
        nextContent.style.display = "grid";
      };
    };
  }

}
