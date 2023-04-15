import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    //fetch
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    //fetch
  };

  return (
    <div className="searchBar">
      <form
        onSubmit={(e) => {
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="search for a pokemon..."
          value={search}
          onChange={(e) => handleChange()}
        ></input>
        <button>go</button>
      </form>
    </div>
  );
}
