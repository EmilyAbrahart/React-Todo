import React from 'react';

const ToDoForm = ({
  toDoName, changeHandler, keyPressHandler, addToDo, clearCompleted
}) => (
  <div className="toDoForm">
    <input value={toDoName} onChange={changeHandler} onKeyPress={keyPressHandler} type="text" />
    <button type="submit" className="addToDo" onClick={addToDo}>
			Add ToDo
    </button>
    <button type="button" className="clearComplete" onClick={clearCompleted}>
			Clear Completed
    </button>
  </div>
);

export default ToDoForm;
