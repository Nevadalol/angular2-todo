import { Todo } from '../domain/Todo';
import { todos } from './todos.mock';

export class TodoService {
  fetch () {
    return new Promise<Todo[]>((resolve) => {
      setTimeout(() => {
        resolve(todos);
      }, 500);
    });
  }
}