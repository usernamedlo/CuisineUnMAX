import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function FootComponent() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">À propos de nous</h3>
            <p className="mb-2">Lorem ipsum dolor sit amet</p>
            <p className="mb-2">Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Accueil</a>
              </li>
              <li className="mb-2">
                <a href="#">Recettes</a>
              </li>
              <li className="mb-2">
                <a href="#">À propos</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex mb-4">
              <a href="#" className="mr-4">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="mr-4">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="mr-4">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
            <p>Inscrivez-vous à notre newsletter pour recevoir nos dernières recettes.</p>
            <form className="mt-2 flex">
              <input
                type="email"
                className="block w-full bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-l py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Votre adresse e-mail"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
        <hr className="border-gray-600 my-12" />
        <div className="flex justify-between items-center">
          <p>&copy; 2023 MonSiteDeRecettes. Tous droits réservés.</p>
          <p>Designed by John Doe</p>
        </div>
      </div>
    </footer>
  );
}

export default FootComponent;
