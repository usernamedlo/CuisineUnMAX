import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function SearchResultCard({ recipe }) {
  return (
    <div className="bg-white shadow-lg rounded-lg h-4/12">
      <img
        src={recipe.image}
        alt={recipe.label}
        className="rounded-t-lg w-72"
      ></img>
      <div className="p-4">
        <div className="flex mb-5">
          <h3 className="text-2xl text-gray-700">{recipe.label}</h3>
          {/* <p className="mt-1 ml-auto text-lg font-medium text-gray-900">
            {Math.round(recipe.calories)} kcal
          </p> */}
        </div>
        <a
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-1 w-full shadow-sm font-medium rounded-md bg-red-600 card-link"
        >
          <span className="text-gray-100 text-lg text-center">
            Voir la recette
          </span>
          <FontAwesomeIcon
            icon={faUtensils}
            className="ml-4 h-6 w-6 text-white"
            alt="Logo"
          />
        </a>
      </div>
    </div>
  );
}

export default SearchResultCard;
