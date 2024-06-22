import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-lightOrange flex justify-between items-center p-2 border-b-4 border-white flex-wrap">
      <div className="flex items-center">
        <img src="image.png" alt="Logo" className="h-8" />
      </div>
      <nav>
        <ul className="flex space-x-6 flex-wrap m-0 p-0 list-none">
          <li className="py-1.5">
            <a
              href="#"
              className="text-lightOrange text-lg font-bold hover:border-b-2 border-lightOrange"
            >
              Inicio
            </a>
          </li>
          <li className="py-1.5">
            <a
              href="#"
              className="text-lightOrange text-lg font-bold hover:border-b-2 border-lightOrange"
            >
              Menú
            </a>
          </li>
          <li className="py-1.5">
            <a
              href="#"
              className="text-lightOrange text-lg font-bold hover:border-b-2 border-lightOrange"
            >
              Nosotros
            </a>
          </li>
          <li>
            <button className="text-lightOrange text-lg font-bold border-2 border-lightOrange rounded-full px-4 py-1.5 hover:bg-lightOrange hover:text-white transition-colors duration-300">
              Ingresar
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
