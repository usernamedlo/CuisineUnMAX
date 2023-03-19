import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function SearchResultCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="rounded-t-lg h-40 w-full object-cover"
      ></img>

      <div className="py-4 px-6">
        <h3 className="text-xl font-bold text-gray-800">{recipe.title}</h3>
      </div>

      <div className="bg-gray-100 flex justify-center">
        <a
          href={recipe.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-1 shadow-sm font-medium rounded-md bg-red-600 card-link m-2 text-white hover:bg-red-700"
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
