import React from 'react';

const ToDoForm = ({
  toDoName, changeHandler, keyPressHandler, addToDo, clearCompleted
}) => (
  <div className="toDoForm">
    <input value={toDoName} onChange={changeHandler} onKeyPress={keyPressHandler} type="text" placeholder="Add a task..." />
    <button type="submit" className="addToDo" onClick={addToDo}>
			Add
    </button>
    <button type="button" className="clearComplete" onClick={clearCompleted}>
			Clear Completed
    </button>
  </div>
);

export default ToDoForm;
