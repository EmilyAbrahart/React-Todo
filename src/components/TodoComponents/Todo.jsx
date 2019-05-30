/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
import React, { Component } from 'React';

export class ToDo extends Component {
  constructor(props) {
    super(props);
    const { todo } = this.props.todo;
  }

  render() {
    return (
      <div className="todoItem" key={this.todo.id}>
        {todo.name}
      </div>
    );
  }
}
