import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <form className="search-panel">
      <input
        type="number"
        placeholder="Search Djuz of Quran 1 ... 30"
        min={1}
        max={30}
      />
    </form>
  );
};

export default Search;
