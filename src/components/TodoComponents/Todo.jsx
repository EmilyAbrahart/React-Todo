/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default function ToDo({ markComplete, task, id }) {
  const onMarkComplete = (event) => {
    markComplete(id);
  };

  return (
    <p>
      {task}
      <button className="completeBtn" type="submit" onClick={onMarkComplete}>
				Complete
      </button>
    </p>
  );
}
