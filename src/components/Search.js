import { useState } from 'react';
import './Search.css'

const Search = ({setSearch}) => {
    const [searchText, setSearchText] = useState();
  return (
    <div>
        <label for="search"></label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          autofocus
          required
        />
        <button className="button" onClick={() => setSearch(searchText)} ><i class="fas fa-search"></i> Search</button>
    </div>
  );
};

export default Search;
