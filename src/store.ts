import { makeObservable, observable, action, toJS } from 'mobx';
import { ITodoItem } from './types';

class store {
  todos: ITodoItem[] = [];
  itemsLeft: string = 'Todo list is empty';

  addTodo(text: string) {
    this.todos.push({
      id: new Date().toLocaleString(),
      text: text.trim(),
      isDone: false,
    });
    this.itemsLeftCounter();
  }

  toggleTodoItem(id: string) {
    this.todos = this.todos.map((item) => {
      if (id === item.id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    this.itemsLeftCounter();
  }

  itemsLeftCounter() {
    let count = 0;
    toJS(this.todos).forEach((item) => {
      if (!item.isDone) {
        count++;
      }
    });
    if (!count && !toJS(this.todos).length) {
      this.itemsLeft = 'Todo list is empty';
      return;
    }
    if (!count && toJS(this.todos).length) {
      this.itemsLeft = 'All items is done';
      return;
    }
    this.itemsLeft = count > 1 ? `${count} items left` : `${count} item left`;
  }
  constructor() {
    makeObservable(this, {
      todos: observable,
      itemsLeft: observable,
      addTodo: action,
      toggleTodoItem: action,
      itemsLeftCounter: action,
    });
  }
}

export default new store();
