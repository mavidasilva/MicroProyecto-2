import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-orange-600 flex justify-between items-center p-4 border-b-4 border-orange-600 flex-wrap">
      <div className="logo">
        <img src="image.png" alt="Logo" className="h-8" />
      </div>
      <nav>
        <ul className="flex space-x-4 flex-wrap m-0 p-0 list-none">
          <li>
            <a
              href="#"
              className="text-orange-600 text-lg font-bold hover:border-b-2 border-orange-600"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-orange-600 text-lg font-bold hover:border-b-2 border-orange-600"
            >
              Menú
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-orange-600 text-lg font-bold hover:border-b-2 border-orange-600"
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-orange-600 text-lg font-bold border-b-2 border-orange-600"
            >
              Ingresar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
