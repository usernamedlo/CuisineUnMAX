import React from "react";

function HeaderComponent() {
  return (
    <div className="mt-28 flex justify-center items-center flex-col">
      {/* <img src={require('../resources/logo.png')} alt="logo" className="w-52 h-52" /> */}
      <h1 className="text-5xl lg:text-6xl 2xl:text-7xl text-center font-abril text-black ">
        Des Recettes Simples et Délicieuses
      </h1>
      <p className="text-sm w-80 sm:text-xl sm:w-[31.25rem] lg:text-2xl lg:w-[56.25rem] 2xl:text-3xl 2xl:w-[62.5rem] mt-1.5 text-center font-abril text-gray-800">
        Découvrez des recettes simples et savoureuses pour tous les goûts sur
        notre site de cuisine. Suivez nos instructions étape par étape pour
        créer des repas délicieux en un rien de temps.
      </p>
    </div>
  );
}

export default HeaderComponent;
