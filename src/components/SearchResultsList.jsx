import React from "react";
import SearchResultCard from "./SearchResultCard";

function SearchResultsList(props) {
  const { results } = props;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      {results.map((result) => (
        <SearchResultCard key={result.recipe.uri} recipe={result.recipe} />
      ))}
    </div>
  );
}

export default SearchResultsList;
