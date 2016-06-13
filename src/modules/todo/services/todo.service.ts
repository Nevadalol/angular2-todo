import { Todo } from '../domain/Todo';
import { todos } from './todos.mock';

export class TodoService {
  public todos: Todo[];

  fetch () {
    return new Promise<Todo[]>((resolve) => {
      setTimeout(() => {
        this.todos = todos;
        resolve(todos);
      }, 100);
    });
  }

  getTodos () {
    return this.todos;
  }

  getTodo (id: number) {
    return this.fetch().then((todos) => {
      return todos.filter((todo) => todo.id === id).shift();
    });
  }
}