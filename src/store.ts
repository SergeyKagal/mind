import { makeObservable, observable, action, toJS, computed } from 'mobx';
import { IListMode, ITodoItem } from './types';

class store {
  todos: ITodoItem[] = [];

  listModeArray: IListMode[] = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
  ];

  controlButtonAlignment: string = 'All';

  clearTodos() {
    this.todos = this.todos.filter((item) => !item.isDone);
  }

  setAlignment(event: React.MouseEvent<HTMLElement>, newAlignment: string) {
    this.controlButtonAlignment = newAlignment;
  }

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

  get showTodos() {
    if (this.controlButtonAlignment === 'Active') {
      return this.todos.filter((item) => !item.isDone);
    }
    if (this.controlButtonAlignment === 'Completed') {
      return this.todos.filter((item) => item.isDone);
    }
    return this.todos;
  }

  get itemsLeftCounter() {
    let count = 0;
    toJS(this.todos).forEach((item) => {
      if (!item.isDone) {
        count++;
      }
    });
    if (!count && !toJS(this.todos).length) {
      return 'Todo list is empty';
    }
    if (!count && toJS(this.todos).length) {
      return 'All items is done';
    }
    return count > 1 ? `${count} items left` : `${count} item left`;
  }

  constructor() {
    makeObservable(this, {
      todos: observable,
      listModeArray: observable,
      controlButtonAlignment: observable,
      setAlignment: action,
      addTodo: action,
      toggleTodoItem: action,
      clearTodos: action,
      itemsLeftCounter: computed,
      showTodos: computed,
    });
  }
}

export default new store();
