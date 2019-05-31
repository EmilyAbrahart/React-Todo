import React from 'react';

const ToDoSearch = ({
  searchQuery, searchChangeHandler, 
}) => (
  <div className="searchDiv">
    <input
      className="searchInput"
      type="text"
      placeholder="Search"
      onChange={searchChangeHandler}
      value={searchQuery}
    />
  </div>
);

export default ToDoSearch;
