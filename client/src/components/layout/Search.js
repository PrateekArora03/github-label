import React from "react";

const Search = ({ searchInput, setSearchInput }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        name="label"
        value={searchInput}
        onChange={({ target: { value } }) => setSearchInput(value)}
        placeholder="Search all labels"
      />
    </form>
  );
};

export default Search;
