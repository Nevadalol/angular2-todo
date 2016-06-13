import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { TodoService } from '../services/todo.service';
import { Todo } from '../domain/Todo';

@Component({
  selector: 'my-todo-detail',
  templateUrl: 'src/modules/todo/templates/todo-detail.template.html'
})
export class TodoDetailComponent implements OnInit {
  public todo: Todo;

  constructor (
    private routeParams: RouteParams,
    private todoService: TodoService
  ) {}

  ngOnInit () {
    let id = +this.routeParams.get('id');

    this.todoService.getTodo(id).then((todo) => {
      this.todo = todo;
    });
  }

  goBack () {
    window.history.back();
  }
}