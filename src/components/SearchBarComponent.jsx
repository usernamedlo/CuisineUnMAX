import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchResultsList from "./SearchResultsList";

const API_KEY = "b020cce81bmshb98ba7ac6281b6bp14f2aajsn1efb7c2fd2ca";

function SearchBarComponent() {
  const [query, setQuery] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (query !== "") {
        try {
          const response = await axios.get(
            `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&lc=fr-FR&number=10&addRecipeInformation=true&instructionsRequired=true`,
            {
              headers: {
                "X-RapidAPI-Key": API_KEY,
              },
            }
          );
          setDatas(response.data.results);
        } catch (error) {
          console.log(error);
        }
      } else {
        setDatas([]);
      }
    }

    fetchData();
  }, [query]);

  const handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    if (value.length >= 3) {
      setQuery(value);
    } else {
      setDatas([]);
    }
  };

  return (
    <div>
      <div className="mt-5 space-x-1 flex flex-col items-center justify-center">
        <form className="h-12">
          <input
            type="text"
            className="block w-80 px-6 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Recherchez une recette..."
            onChange={handleInputChange}
          />
        </form>
      </div>
      <SearchResultsList results={datas} />
    </div>
  );
}

export default SearchBarComponent;
