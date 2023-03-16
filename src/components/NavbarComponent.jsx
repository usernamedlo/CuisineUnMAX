import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet, faBars } from "@fortawesome/free-solid-svg-icons";

// const toggleMenuBtn = document.querySelector('#menu-btn');
// const toggleMenuImg = document.querySelector('#menu-btn img');
// const toggleMenu = document.querySelector('#toggle-menu');
// const menuLinks = document.querySelector('#main-nav ul a');

// toggleMenuBtn.addEventListener('click', toggleNav);

// function toggleNav(){
//     toggleMenu.classList.toggle('-translate-y-full');

//     if(toggleMenu.classList.contains('-translate-y-full')){
//         toggleMenuImg.setAttribute('src', {faXmark});
//         toggleMenuBtn.setAttribute('aria-expanded', 'false');
//     } else {
//         toggleMenuImg.setAttribute('src', {faBars});
//         toggleMenuBtn.setAttribute('aria-expanded', 'true');
//     }
// }

function NavbarComponent() {
  return (
    <header className="bg-[#3b3e6d] z-50 fixed top-0 w-full shadow">
      <nav
        className="bg-[#3b3e6d] max-w-5xl mx-auto font-poppins p-6
            flex items-center justify-center"
      >
        <a href="1" className="flex" aria-label="Page d'accueil">
          <FontAwesomeIcon
            icon={faKitchenSet}
            className="fa-2xl md:w-12 md:inline text-white"
            alt=""
          />
          <div className="text-[#BDC3C7] md:mt-0.5 text-xl">
            <span aria-hidden="true" className="text-4xl lg:text-xl"></span>
            Cuisine un&nbsp;
            <strong>
              MAX<span className="text-[#F5E6CA]">.</span>
            </strong>
          </div>
        </a>
      </nav>
    </header>
  );
}

export default NavbarComponent;
