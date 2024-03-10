import React from "react";
import Logo from "../images/logo.jpg";

function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto sm:flex flex-wrap pb-0 sm:pb-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 px-5 pt-3 sm:p-0">
          <button className="visible sm:invisible px-1 pr-16 sm:p-0 ">
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>
          <img
            src={Logo}
            alt="MS Production"
            className="w-10 h-10 text-white p-1 bg-white rounded-full"
          />
          <span className="ml-3 text-xl">MS Production</span>
        </a>
        <nav className="ml-auto mr-auto invisible sm:visible flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 px-2 hover:text-white ">Home</a>
          <a className="mr-5 px-2 hover:text-white ">Product</a>
          <a className="mr-5 px-2  hover:text-white ">Skills</a>
          <a className="mr-5 px-2  hover:text-white ">Contact</a>
        </nav>
        <button className="invisible sm:visible inline-flex items-center border-none border-0 py-1 px-3 rounded mt-4 md:mt-0">
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
