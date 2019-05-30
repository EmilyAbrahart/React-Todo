/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

const ToDoList = ({ toDoList, markComplete }) => (
  <div>
    {toDoList.map(todo => (
      <ToDo
        key={todo.id}
        task={todo.task}
        id={todo.id}
        completed={todo.completed}
        markComplete={markComplete}
      />
    ))}
  </div>
);

export default ToDoList;
