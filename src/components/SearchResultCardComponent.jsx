import React, { useState } from "react";

function SearchResultCardComponent({ recipe }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="h-[32rem] w-[19rem] relative overflow-hidden rounded-lg"
      onMouseEnter={() => {
        setIsZoomed(true);
        setShowDescription(true);
      }}
      onMouseLeave={() => {
        setIsZoomed(false);
        setShowDescription(false);
      }}
    >
      <img
        src={require(`../data/${recipe.img}`)}
        alt={recipe}
        className={`h-full w-full rounded-lg object-cover ${
          isZoomed ? "absolute" : ""
        }`}
        style={{
          transform: isZoomed ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div
          className="relative"
          style={{
            height: showDescription ? "100%" : "1.5rem",
            transition: "height 0.4s ease",
          }}
        >
          <h3
            className="text-2xl font-medium text-white absolute bottom-0"
            style={{
              transform: showDescription
                ? "translateY(-100%)"
                : "translateY(0)",
              transition: "transform 0.4s ease",
            }}
          >
            {recipe.nom}
          </h3>
          <p
            className="text-sm text-gray-200 absolute bottom-0 mt-6 opacity-0"
            style={{
              opacity: showDescription ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            {recipe.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchResultCardComponent;



{
  /*    <div
      className="h-[32rem] w-[19rem] relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
    >
      <img
        src={require(`../data/${recipe.img}`)}
        alt={recipe}
        className={`h-full w-full rounded-lg object-cover ${
          isZoomed ? "absolute" : ""
        }`}
        style={{
          transform: isZoomed ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <h3 className="text-2xl font-medium text-white">{recipe.nom}</h3>
        <p className="text-sm text-gray-200">{recipe.description}</p>
      </div>
    </div>*/
  // https://codepen.io/mrtrimble/pen/RwPazwg
}
