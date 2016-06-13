import { Component, Input } from 'angular2/core';
import { Todo } from '../domain/Todo';

@Component({
  selector: 'my-todo-item',
  templateUrl: 'src/modules/todo/templates/todo-item.template.html',
  styleUrls: ['src/modules/todo/styles/todo-item.css']
})
export class TodoItemComponent {
  @Input()
  public todo: Todo;

  onTodoStateChange (event: Event) {
    event.stopPropagation();
  }
}