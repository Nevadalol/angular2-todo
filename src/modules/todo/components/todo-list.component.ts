import { Component, OnInit } from 'angular2/core';
import { TodoItemComponent } from './todo-item.component';
import { TodoService } from '../services/todo.service';
import { Todo } from '../domain/Todo';

@Component({
  selector: 'my-todo-list',
  templateUrl: 'src/modules/todo/templates/todo-list.template.html',
  directives: [TodoItemComponent]
})
export class TodoListComponent implements OnInit {
  public selectedTodo: Todo;
  public todos: Todo[];

  constructor (private todoService: TodoService) {}

  ngOnInit () {
    this.fetchTodos();
  }

  fetchTodos () {
    this.todoService.fetch().then((todos) => {
      this.todos = todos;
    });
  }

  onTodoSelect (todo: Todo) {
    this.selectedTodo = todo;
  }
}