import { RouteConfig, RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { Component } from 'angular2/core';

import { TodoDetailComponent } from './todo-detail.component';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'my-todo-module',
  templateUrl: 'src/modules/todo/templates/module.template.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [TodoService]
})
@RouteConfig([{
  path: '/',
  name: 'TodoList',
  component: TodoListComponent,
  useAsDefault: true
}, {
  path: '/detail/:id',
  name: 'TodoDetail',
  component: TodoDetailComponent
}])
export class TodoModuleComponent {}