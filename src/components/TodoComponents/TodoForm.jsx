import React from 'react';

const ToDoForm = ({
  toDoName, changeHandler, keyPressHandler, addToDo,
}) => (
  <div className="toDoForm">
    <input value={toDoName} onChange={changeHandler} onKeyPress={keyPressHandler} type="text" />
    <button type="submit" className="addToDo" onClick={addToDo}>
			Add ToDo
    </button>
    <button type="button" className="clearComplete">
			Clear Completed
    </button>
  </div>
);

export default ToDoForm;
