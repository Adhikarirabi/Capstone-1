import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = ({ query, setQuery }) => {
  let history = useHistory();
  useEffect(() => {
    let params = new URLSearchParams();
    if (query) {
      params.append("name", query);
    } else {
      params.delete("name");
    }
    history.push({ search: params.toString() });
  }, [query, history]);
  return (
    <input
      type="text"
      placeholder="Search by name or manufacturer"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value.toLowerCase());
      }}
      className="searchQuery"
    />
  );
};

export default SearchBar;
