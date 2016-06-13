import { Pipe, PipeTransform } from 'angular2/core';
import { Todo } from '../domain/todo';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {
  transform (todos: Todo[], filter: string) {
    return todos.filter(this[filter]);
  }

  private all () {
    return true;
  }

  private active (todo: Todo) {
    return !todo.isDone;
  }

  private completed (todo: Todo) {
    return todo.isDone;
  }
}