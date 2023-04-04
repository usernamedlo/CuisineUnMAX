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
        className={`h-full w-full rounded-lg object-cover -z-30 ${
          isZoomed ? "absolute" : ""
        }`}
        style={{
          transform: isZoomed ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />
      
      <div
        className="h-12 w-12 m-2 rounded-full border-4 border-red-500 bg-red-500 flex justify-center items-center text-center"
        style={{
          transform: showDescription ? "translateX(10%)" : "translateX(0)",
          transition: "transform 0.4s ease",
        }}
      >
        <p className="text-white">{recipe.temps}</p>
      </div>

      <div
        className="h-12 w-12 m-2 rounded-full border-4 border-blue-900 bg-blue-500 flex justify-center items-center text-center"
        style={{
          transform: showDescription ? "translateX(10%)" : "translateX(0)",
          transition: "transform 0.4s ease",
        }}
      >
        <p className="text-white">{recipe.portion}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4 mb-1">
        <div
          className="relative"
          style={{
            height: showDescription ? "100%" : "1.5rem",
            transition: "height 0.4s ease",
          }}
        >
          <h3
            className="text-5xl font-medium text-white bottom-0 absolute"
            style={{
              transform: showDescription
                ? "translateY(-100%)"
                : "translateY(0)",
              transition: "transform 0.4s ease",
            }}
          >
            {recipe.nom}
          </h3>
          {/* <div
            className="h-full w-full"
            style={{
              opacity: showDescription ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <p className="h-24 text-center text-basic text-gray-200 bg-black">
              {recipe.description}
            </p>
          </div> */}
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
