import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'mobx-react';
import { TodoStore } from './store/todo.store';
import { TodoAdd } from './todo.add';
import { TodoList } from './todo.list'

export class App extends Component {
  private todoStore: TodoStore

  render() {
    return (
      <Provider todoStore={this.todoStore}>
        <div>
          <TodoAdd />
          <TodoList />
        </div>
      </Provider>
    )
  }
}
