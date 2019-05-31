/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default function ToDo({
  markComplete, task, id, completed, isFiltered,
}) {
  const onMarkComplete = (event) => {
    markComplete(id);
  };

  const taskStyle = {
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? '#aab6c7' : '#2f3e50',
    display: isFiltered ? 'none' : 'inline-block',
  };
  const taskButtonStyle = {
    opacity: completed ? '0' : '100',
    display: isFiltered ? 'none' : 'inline-block',
  };

  return (
    <div className="todo">
      
      <button style={taskButtonStyle} className="completeBtn" type="submit" onClick={onMarkComplete}>
				Complete
      </button>
      <span style={taskStyle}>{task}</span>
    </div>
  );
}
