import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoPlaystation } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 py-3 px-4 flex-wrap">
      <div className="flex justify-between items-center w-full sm:w-auto mb-2 sm:mb-0">
        <div className="flex items-center">
          <IoLogoPlaystation className="mx-2" />
          <h1 className="text-xl font-bold">Superfone</h1>
        </div>
        <div className="flex items-center ml-8">
          <GiHamburgerMenu className="cursor-pointer mr-4" />
          <h4 className="text-xs font-medium">Desun Academy</h4>
          <h4 className="text-xs font-medium ml-2">+91 94287867867</h4>
        </div>
      </div>

      <div className="flex justify-center w-full sm:w-auto mb-2 sm:mb-0">
        <button
          type="button"
          className="relative bg-transparent border border-blue-700 rounded-md shadow-lg shadow-blue-500/50 hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-1.5 text-center dark:shadow-lg dark:shadow-blue-800/80"
        >
          Live Call Dashboard
          <span className="absolute top-[-2px] right-[-2px] h-2 w-2 rounded-full bg-green-500"></span>
        </button>
      </div>

      <div className="flex items-center w-full sm:w-auto">
        <div className="mx-4 text-center sm:text-left">
          <h4 className="text-sm font-medium">Arghya Dutta</h4>
          <h4 className="text-xs font-medium text-slate-400">94287867867</h4>
        </div>
        <button
          type="button"
          className="relative bg-transparent border border-gray-500 rounded focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 py-1 text-center dark:shadow-lg dark:shadow-blue-800/80"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
