import React from "react";

const SearchBox = ({ SearchChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots Near You..."
        onChange={SearchChange}
      />
    </div>
  );
};

export default SearchBox;
