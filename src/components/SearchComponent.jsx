import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeListComponent from "./RecipeListComponent";

const API_ID = "20ce5b59";
const API_KEY = "3860d1e02a44fd118e09f500213dd9bf";

function SearchComponent() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const API_URL = `https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=9&lang=fr`;

    axios
      .get(API_URL)
      .then((response) => {
        setDatas(response.data.hits);
        console.log(response.data.hits);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  const handleSearchTerm = (event) => {
    event.preventDefault();

    let value = event.target.value;
    value.length > 2 && setSearchTerm(value);
  };

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }
  return (
    <div className="mt-28 space-x-1 flex justify-center">
      <input
        type="text"
        className="block w-80 px-6 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Search..."
        // value={searchTerm}
        onChange={handleSearchTerm}
      />
      {
        datas.filter((recipe) => {
          return recipe.recipe.label.toLowerCase().includes(searchTerm);
        })
        .map((recipe) => {
          return (
            <div>
              <h2>{recipe.recipe.label}</h2>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <ul>
                {recipe.recipe.ingredientLines.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          );
        })
      }
    </div>

    //   <button
    //     className={`px-4 text-white ${
    //       isMouseOver ? "bg-black text-white" : "bg-[#3b3e6d] text-black"
    //     } rounded-full relative right-14`}
    //     onMouseOver={handleMouseOver}
    //     onMouseOut={handleMouseOut}
    //     onClick={handleSearchSubmit}
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="w-5 h-5"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //       strokeWidth={2}
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //       />
    //     </svg>
    //   </button>
    //   <RecipeListComponent datas={datas} />
    // </div>
  );
}

export default SearchComponent;
