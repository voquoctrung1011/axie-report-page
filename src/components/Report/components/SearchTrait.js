import React from "react";

const Search = () => {
  return (
    <div className="input-wrap">
      <svg viewBox="0 0 20 20" fill="none">
        <path
          d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
          stroke="#3A3F50"
        ></path>
        <path d="M17.5 17.5L13.875 13.875" stroke="#3A3F50"></path>
      </svg>
      <input
        type="text"
        data-testid="gene-search-input"
        placeholder="Search for trait or part..."
        defaultValue=""
      />
    </div>
  );
};
export default Search;
