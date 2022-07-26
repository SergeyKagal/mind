import { makeObservable, observable, action, toJS } from 'mobx';
import { ITodoItem } from './types';

class store {
  todos: ITodoItem[] = [];
  addTodo(text: string) {
    this.todos.push({
      id: new Date().toLocaleString(),
      text: text.trim(),
      isDone: false,
    });
  }
  toggleTodoItem(id: string) {
    this.todos = this.todos.map((item) => {
      if (id === item.id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
  }
  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      toggleTodoItem: action,
    });
  }
}

export default new store();
