import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUri: string = "http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private todo:Todo;

  constructor(private http: HttpClient) { }

  createTodo(todo: Todo){
    return this.http.post(this.baseUri + '/todo/',todo,{headers: this.headers});
  }

  getTodo(){
    return this.http.get(this.baseUri + '/todo/', {headers: this.headers});
  }

  updateTodo(todo: Todo, id: string){
    return this.http.put(this.baseUri + '/todo/' + id,todo,{headers: this.headers});

  }

  deleteTodo(id: string){
    return this.http.delete(this.baseUri + '/todo/' +  id ,{headers: this.headers});
  }

  setter(todo:Todo){
    this.todo = todo;
  }

  getter(){
    return this.todo;
  }

}
