import React from "react";
import SearchResultCardComponent from "./SearchResultCardComponent";

function SearchResultsListComponent(props) {
  const { results } = props;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 lg:max-w-5xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3">
      {results.map((result) => (
        <SearchResultCardComponent
          key={result.id}
          recipe={{
            img: result.img,
            nom: result.nom,
            temps: result.temps,
            portion: result.portion,
            ingredients: result.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            )),
            recette: result.recette
          }}
        />
      ))}
    </div>
  );
}

export default SearchResultsListComponent;
