import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { TodoItemComponent } from './todo-item.component';
import { TodoService } from '../services/todo.service';
import { Todo } from '../domain/Todo';
import { TodoFilterPipe } from '../utils/todo-filter.pipe';

@Component({
  selector: 'my-todo-list',
  templateUrl: 'src/modules/todo/templates/todo-list.template.html',
  directives: [TodoItemComponent],
  pipes: [TodoFilterPipe]
})
export class TodoListComponent implements OnInit {
  public todos: Todo[];
  public filter: string = 'completed';

  constructor (
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit () {
    this.todoService.fetch().then(todos => this.todos = todos);
  }

  onTodoSelect (todo: Todo) {
    this.router.navigate(['TodoDetail', {id: todo.id}]);
  }
}