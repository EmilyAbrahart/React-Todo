/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default function ToDo({
  markComplete, task, id, completed,
}) {
  const onMarkComplete = (event) => {
    markComplete(id);
  };

  const taskStyle = {
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? '#aab6c7' : '#2f3e50',
  };
  const taskButtonStyle = {
    opacity: completed ? '0' : '100',
  };

  return (
    <div className="todo">
      <span style={taskStyle}>{task}</span>
      <button style={taskButtonStyle} className="completeBtn" type="submit" onClick={onMarkComplete}>
				Complete
      </button>
    </div>
  );
}
