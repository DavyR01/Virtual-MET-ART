import React from "react";

function Search({ search, setSearch, getSearchIds }) {
  const handleEnterSubmit = (e) => {
    if (e.keyCode === 13) getSearchIds(); // begin seаrching results with Enter key
  };

  return (
    <div className="ml-8 sm:pl-10 sm:pt-6 md:px-16 lg:pt-18 lg:ml-0">
      <section className="flex">
        <input
          className="bg-background opacity-90 h-12 w-9/12 pl-6 mt-8 mb-8 rounded-l-md focus:outline-none sm:mt-0 lg:w-11/12"
          type="text"
          placeholder="Search a title, artist or key word..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleEnterSubmit} // indicates if the key Enter was pressed
        />
        <button
          className="bg-background svg-search text-background text-left opacity-90 h-12 w-16 text-[14px] sm:text-sm md:w-28 mt-8 mb-8 rounded-r-md focus:outline-none sm:mt-0"
          type="button"
          onClick={() => {
            getSearchIds(); // searching results on click
          }}
        >
          Search
        </button>
      </section>
    </div>
  );
}

export default Search;
