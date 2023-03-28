import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";

function HeaderComponent() {
  return (
    <div className="mt-52 flex justify-center items-center flex-col">
      <h1 className="text-7xl text-center font-abril text-black ">
        Cuisine un&nbsp;
        <strong>
          MAX<span className="text-[#5e5c59]">.</span>
        </strong>
      </h1>
      <p className="text-2xl text-center font-abril text-gray-800 w-[550px]">
        Découvrez des recettes simples et savoureuses pour tous les goûts sur
        notre site de cuisine. Suivez nos instructions étape par étape pour
        créer des repas délicieux en un rien de temps.
      </p>
    </div>
  );
}

export default HeaderComponent;
