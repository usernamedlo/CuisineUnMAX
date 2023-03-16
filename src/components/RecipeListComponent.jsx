import React from "react";
import RecipeComponent from "./RecipeComponent";

function RecipeListComponent({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeComponent key={recipe.recipe.label} recipe={recipe.recipe} />
      ))}
    </div>
  );
}

export default RecipeListComponent;
