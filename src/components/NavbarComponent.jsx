import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";

function HeaderComponent() {
  return (
    <header className="">
        <a href="1" className="flex" aria-label="Page d'accueil">
          <FontAwesomeIcon
            icon={faKitchenSet}
            className="fa-2xl md:w-12 md:inline text-white"
            alt=""
          />
          <div className="text-[#191c1e] md:mt-0.5 text-xl">
            <span aria-hidden="true" className="text-4xl lg:text-xl"></span>
            Cuisine un&nbsp;
            <strong>
              MAX<span className="text-[#F5E6CA]">.</span>
            </strong>
          </div>
        </a>
    </header>
  );
}

export default HeaderComponent;
