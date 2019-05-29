import React from 'react';

const ToDoForm = props => (
  <div className="toDoForm">
    <input
      value={props.toDoName}
      onChange={props.changeHandler}
      onKeyPress={props.keyPressHandler}
      type="text"
    />
    <button type="submit" className="addToDo" onClick={props.addToDo}>
			Add ToDo
    </button>
    <button type="button" className="clearComplete">
			Clear Completed
    </button>
  </div>
);

export default ToDoForm;
