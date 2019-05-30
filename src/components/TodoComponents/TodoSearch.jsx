import React from 'react';

const ToDoSearch = ({
  searchQuery, searchChangeHandler, searchToDo, searchKeyPressHandler,
}) => (
  <div className="searchDiv">
    <input
      className="searchInput"
      type="text"
      placeholder="Search"
      onChange={searchChangeHandler}
      onKeyPress={searchKeyPressHandler}
      value={searchQuery}
    />
    {/* <button className="searchBtn" type="submit" onClick={searchToDo}>
			Search
    </button> */}
  </div>
);

export default ToDoSearch;
