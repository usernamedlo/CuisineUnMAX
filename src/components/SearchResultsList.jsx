import React from "react";
import SearchResultCard from "./SearchResultCard";

function SearchResultsList(props) {
  const { results } = props;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3">
      {results.map((result) => (
        <SearchResultCard
          key={result.id}
          recipe={{
            title: result.title,
            imageUrl: result.image,
            sourceUrl: result.sourceUrl,
          }}
        />
      ))}
    </div>
  );
}

export default SearchResultsList;
