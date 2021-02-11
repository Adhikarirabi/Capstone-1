import { useState } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <form className="searchForm">
      <input
        type="text"
        placeholder="Search Items"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="searchQuery"
      />
      <button type="submit">
        <GiMagnifyingGlass className="searchGlass" />
      </button>
    </form>
  );
};

export default SearchBar;
