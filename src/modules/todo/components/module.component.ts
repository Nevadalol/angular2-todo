import { Component } from 'angular2/core';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../services/todo.service';
import { Todo } from '../domain/Todo';

@Component({
  selector: 'my-todo-module',
  templateUrl: 'src/modules/todo/templates/module.template.html',
  directives: [TodoListComponent],
  providers: [TodoService]
})
export class TodoModuleComponent {}
