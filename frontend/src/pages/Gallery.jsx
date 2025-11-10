import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import Results from "../components/Gallery/Results";
import Search from "../components/Gallery/Search";
import Filters from "../components/Gallery/Filters";

function Gallery() {
  const [ids, setIds] = useState([]); // list of IDs obtained from choosing a department or from researching a query
  const [allDepartments, setAllDepartments] = useState([]);
  const [searchIdDepartment, setSearchIdDepartment] = useState();
  const [search, setSearch] = useState(""); // word or query added to the input search bar
  const [isProcessing, setIsProcessing] = useState(false); // state to know when display the loader
  const [isFiltersCleared, setIsFiltersCleared] = useState(false);

  useEffect(() => {
    loadDefaultArtworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadDefaultArtworks = (showLoader = true) => {
    if (showLoader) {
      setIsProcessing(true);
    }
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=art`
    )
      .then((response) => {
        if (response.status === 404) {
          // throw new Error("Network response was not ok");
          return { objectIDs: [] };
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setIds(result.objectIDs || []);
        setIsProcessing(false);
      })
      .catch((err) => {
        console.error("Error fetching artworks:", err);
        setIds([]);
      });
    // .finally(() => {
    //   setIsProcessing(false);
    // });
  };

const getSearchIds = () => {
  setIsFiltersCleared(false);
  setIsProcessing(true);

  let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true`;

  if (searchIdDepartment && search) {
    // Recherche avec département et terme de recherche
    url += `&departmentId=${searchIdDepartment}&q=${encodeURIComponent(search)}`;
  } else if (search) {
    // Recherche simple avec uniquement un terme
    url += `&q=${encodeURIComponent(search)}`;
  } else {
    // Si pas de recherche, on charge les œuvres par défaut
    return loadDefaultArtworks();
  }

    fetch(url)
    .then((response) => {
      if (!response.ok) {
        // Si la réponse n'est pas OK, on retourne un tableau vide
        return { objectIDs: [] };
      }
      return response.json();
    })
    .then((result) => {
      setIds(result.objectIDs || []);
       setIsProcessing(false);
    })
    .catch((err) => {
      console.error("Erreur lors de la recherche:", err);
      setIds([]); // En cas d'erreur, on vide les résultats
      setIsProcessing(false);
    });
  };

  const clearFilters = () => {
    setSearch("");
    setSearchIdDepartment(0);
    setIds([]);
    // loadDefaultArtworks(false);
    setIsFiltersCleared(true);
    setIsProcessing(false);
  };

  return (
    <div className="bg-primary min-h-screen w-screen">
      <Filters
        allDepartments={allDepartments}
        setAllDepartments={setAllDepartments}
        searchIdDepartment={searchIdDepartment}
        setSearchIdDepartment={setSearchIdDepartment}
        setIds={setIds}
        clearFilters={clearFilters}
      />
      <Search
        search={search}
        setSearch={setSearch}
        getSearchIds={getSearchIds}
      />
      <br />
      {/* ternary to display the loader or the result of the search (following the fetch) */}
      {isProcessing ? (
        <div className="flex justify-center">
          <CircleLoader color="#ECB365" size={300} />{" "}
        </div>
      ) : (
        <Results
          ids={ids}
          clearFilters={clearFilters}
          isFiltersCleared={isFiltersCleared}
          onResultsRendered={() => setIsFiltersCleared(false)}
          i
        />
      )}
    </div>
  );
}

export default Gallery;
