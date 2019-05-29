/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import { ToDo } from './Todo';

export class ToDoList extends Component {
  render() {
    return (
      <div className="toDoList">
        {this.props.todos.map(todo => (
          <ToDo key={todo.id} />
        ))}
				;
      </div>
    );
  }
}
