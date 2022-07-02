import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {Todo} from '../../todo';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  private todos: Object;
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(){
      this._todoService.getTodo().subscribe(
        data => {
          this.todos = data;
          console.log(this.todos);
        },
        error => {
          console.log(error);
        }
      )
  }

}
