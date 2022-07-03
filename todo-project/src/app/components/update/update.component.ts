import { Component, OnInit } from '@angular/core';
import {Todo} from "../../todo";
import {TodoService} from "../../service/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  private todo: Todo;
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.todo = new Todo();
    this.todo = this.todoService.getter();
  }

  updateTodo(){
    this.todoService.updateTodo(this.todo, this.todo.id).subscribe(
      data => {console.log(data)},
      error => {console.log(error)}
    );
    this.router.navigate(['/']);
  }

}
