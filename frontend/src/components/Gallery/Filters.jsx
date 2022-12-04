import React, { useEffect } from "react";

function Filters({
  allDepartments,
  setAllDepartments,
  searchIdDepartment,
  setSearchIdDepartment,
  setIds,
  clearFilters,
}) {
  // fetch to get all departments in the museum
  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/departments`
    )
      .then((response) => response.json())
      .then((result) => {
        setAllDepartments(result.departments);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (searchIdDepartment > 0)
      fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${searchIdDepartment}`
      )
        .then((response) => response.json())
        .then((result) => {
          setIds(result.objectIDs);
        })
        .catch((err) => console.error(err));
  }, [searchIdDepartment]);

  const clickClearFilters = () => {
    clearFilters();
    window.location.reload(true); // Last ressource solution: refreshes the page, clearing everything
  };

  return (
    <div>
      <section className="pt-24 w-full flex items-center justify-evenly sm:flex-col">
        <div className="pt-6 h-26 w-10 mt-10 mr-6 sm:mr-24 sm:pt-0 sm:mt-0 sm:items-center sm:w-44 md:w-96">
          <h1 className="page-title mt-14 text-5xl text-secondary sm:mt-0 sm:text-8xl sm:mb-6">
            Gallery
          </h1>
        </div>
        <div className="basis-64 sm:basis-0">
          <section className="text-center flex flex-col sm:flex-row items-center sm:justify-start sm:mb-2">
            <select
              name="Exhibitions"
              id="theme-select"
              className="svg-arrow mt-6 mb-2 rounded-full text-background h-12 w-full lg:w-full text-center text-xl bg-secondary hover:border hover:border-secondary hover:bg-transparent focus:outline-none appearance-none"
              value={searchIdDepartment}
              onChange={(event) => setSearchIdDepartment(event.target.value)}
            >
              <option value="0">Exhibition</option>
              {allDepartments.map((department) => (
                <option
                  value={department.departmentId}
                  key={department.departmentId}
                >
                  {department.displayName}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="w-56 mb-3 text-xl text-center text-background sm:mt-6"
              onClick={() => {
                clickClearFilters();
              }}
            >
              Clear Filters
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Filters;
