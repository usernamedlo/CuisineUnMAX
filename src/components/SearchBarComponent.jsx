import React, { useEffect, useState } from "react";
import SearchResultsListComponent from "./SearchResultsListComponent";
import data from "../data/data.json";

function SearchBarComponentComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [searchTermLength, setSearchTermLength] = useState(0);

  useEffect(() => {
    setRecipes(data.recipes);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchTermLength(event.target.value.length);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.nom.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className="mt-5 space-x-1 flex flex-col items-center justify-center">
        <form className="h-12">
          <input
            type="text"
            className="block w-80 px-6 py-2 text-gray-700 bg-white border rounded-full focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Recherchez une recette..."
            onChange={handleSearchChange}
            value={searchTerm}
          />
        </form>
      </div>
      {searchTermLength >= 3 && filteredRecipes.length > 0 ? (
        <SearchResultsListComponent results={filteredRecipes} />
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchBarComponentComponent;
