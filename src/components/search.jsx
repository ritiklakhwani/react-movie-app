const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        {searchTerm ? (
          <button
            type="button"
            className="clear-search"
            aria-label="Clear search"
            onClick={() => setSearchTerm("")}
          >
            x
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
