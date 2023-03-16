import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

// const API_ID = '20ce5b59';
// const API_KEY = '3860d1e02a44fd118e09f500213dd9bf';

// const API_URL = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=9&lang=fr`;

// axios.get(API_URL)
//   .then(response => {
//     console.log(response.data.hits);
//   })
//   .catch(error => {
//     console.error(error);
//   });


function RecipeComponent({ recipe }) {
  return (
    <div>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <ul>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
 
      {/*   className="bg-white shadow-lg rounded-lg" <img
        src={props.img}
        alt="japanese food"
        className="rounded-t-lg"
      ></img>
      <div className="p-4">
        <div className="flex mb-5">
          <h3 className="text-2xl text-gray-700">{props.title}</h3>
          <p className="mt-1 ml-auto text-lg font-medium text-gray-900">
            60min
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-1 w-full shadow-sm font-medium rounded-md bg-red-600"
        >
          <span className="text-gray-100 text-lg text-center">Cuisiner</span>
          <FontAwesomeIcon
            icon={faUtensils}
            className="ml-4 h-6 w-6 text-white"
            alt="Logo"
          />
        </a>
      </div> */}
    </div>
  );
}

export default RecipeComponent;
