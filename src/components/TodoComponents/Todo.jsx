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
  };
  return (
    <div>
      <span style={taskStyle}>{task}</span>
      <button className="completeBtn" type="submit" onClick={onMarkComplete}>
				Complete
      </button>
    </div>
  );
}
