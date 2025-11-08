import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";

function Results({ ...props }) {
  const { ids, clearFilters, isFiltersCleared, onResultsRendered } = props;
  const [idsToShow, setIdsToShow] = useState([]); // temporary list, creating a limited amount of ID's to show related to the limit
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // amount of Item components we want mounted per page
  const isMount = useRef(false);

  const setShowIdsWithPagination = () => {
    const start = page * limit - limit;
    const end = page * limit;
    setIdsToShow(ids.slice(start, end));
  };

  useEffect(() => {
    // when ids change, set the page back to one
    if (page !== 1) setPage(1);
    else setShowIdsWithPagination();
  }, [ids]);

  useEffect(() => {
    if (!isMount.current) isMount.current = true;
    else setShowIdsWithPagination();
  }, [page]);

  // useEffect(() => {
  //   if (isFiltersCleared && onResultsRendered) {
  //     onResultsRendered();
  //   }
  // }, [isFiltersCleared, onResultsRendered]);

  return ids.length > 0 ? ( // Show item components and "Next" button only if there's been a successful research
    <div className="resultsPage">
      {idsToShow.map((id) => (
        <Item id={id} key={id} />
      ))}
      <div className="flex justify-center pb-10 lg:mt-6">
        <button
          className={
            page > 1
              ? "bg-secondary text-white hover:border hover:border-secondary hover:bg-transparent font-bold py-4 px-8 rounded-l-lg"
              : "hidden"
          }
          type="button"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
          className={
            page > 1
              ? "bg-white text-secondary hover:border hover:border-secondary hover:bg-transparent font-bold py-4 px-8 lg:py-6 lg:px-8 rounded-r-lg focus:outline-none appearance-none"
              : "bg-white text-secondary hover:border hover:border-secondary hover:bg-transparent font-bold py-4 px-8 lg:py-6 lg:px-16 rounded-lg focus:outline-none appearance-none"
          }
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center p-4">
      {isFiltersCleared ? (
        <>
          <h1 className="text-white font-bold text-center text-5xl p-2">
            Filters canceled
          </h1>
          <h2 className="text-white italic text-2xl p-2">
            Search for your favorite works !
          </h2>
        </>
      ) : (
        <>
          <h1 className="text-white font-bold text-center text-5xl p-2">
            No results were found
          </h1>
          <h2 className="text-white italic text-2xl p-2">
            Try a different keyword
          </h2>
        </>
      )}
    </div>
  );
}

export default Results;
