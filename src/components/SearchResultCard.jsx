import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function SearchResultCard({ recipe }) {
  return (
    <div className="h-96 rounded-lg bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div
          className="absolute backface-hidden  w-full h-full bg-gray-100  bg-center bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(${recipe.imageUrl})`,
          }}
        >
          <p className="absolute top-6 left-6 text-white">fesfe</p>
          <div className="absolute bottom-0 w-full h-1/3 bg-black">
            <div className="h-full flex flex-col justify-end  ">
              <div className="py-4 px-6">
                <h3 className="text-xl font-bold text-white text-center">
                  {recipe.title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"></div>
      </div>
    </div>
  );
}

export default SearchResultCard;
