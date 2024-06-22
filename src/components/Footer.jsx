import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white text-center p-4 w-full mt-10 box-border">
      <ul className="flex justify-center flex-wrap m-0 p-0 list-none">
        <li className="mx-2 my-1">
          <a href="#" className="text-white text-xs">
            User Agreement
          </a>
        </li>
        <li className="mx-2 my-1">
          <a href="#" className="text-white text-xs">
            Privacy Policy
          </a>
        </li>
        <li className="mx-2 my-1">
          <a href="#" className="text-white text-xs">
            Community Guidelines
          </a>
        </li>
        <li className="mx-2 my-1">
          <a href="#" className="text-white text-xs">
            Cookies Policy
          </a>
        </li>
        <li className="mx-2 my-1">
          <a href="#" className="text-white text-xs">
            Copyright Policy
          </a>
        </li>
        <li className="mx-2 my-1">
          <a href="#" className="text-white text-xs">
            Send Feedback
          </a>
        </li>
        <li className="mx-2 my-1">
          <a href="#" className="text-white text-xs">
            Help
          </a>
        </li>
      </ul>
      <p className="mt-2 text-xs">&copy; 2024</p>
    </footer>
  );
};

export default Footer;
