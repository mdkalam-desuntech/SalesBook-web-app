import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoPlaystation } from "react-icons/io";
import Button from "./layout/Button";

const Header = ({ setIsShow }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 py-3 px-4 flex-wrap">
      <div className="flex justify-between items-center w-full sm:w-auto mb-2 sm:mb-0">
        <div className="flex items-center">
          <IoLogoPlaystation className="mx-2" color="blue" />
          <h1 className="text-xl font-bold">Superfone</h1>
        </div>
        <div className="flex items-center ml-16">
          <GiHamburgerMenu
            className="cursor-pointer mr-4"
            onClick={() => setIsShow((prevState) => !prevState)}
          />
          <h4 className="text-xs font-medium">Desun Academy</h4>
          <h4 className="text-xs font-medium ml-2">+91 94287867867</h4>
        </div>
      </div>

      <div className="flex justify-center w-full sm:w-auto mb-2 sm:mb-0">
        <Button
          type="submit"
          className="relative bg-transparent border border-blue-900 rounded shadow-md	 shadow-blue-200	focus:ring-4 focus:ring-blue-300 font-sm text-sm px-2 py-1 text-center text-gray-900	text-xs	 dark:shadow-sm dark:shadow-blue-800/80"
        >
          Live Call Dashboard
          <span className="absolute top-[-2px] right-[-2px] h-1.5 w-1.5 rounded-full bg-green-500"></span>
        </Button>
      </div>

      <div className="flex items-center w-full sm:w-auto">
        <div className="mx-4 text-center sm:text-left ">
          <h4 className="text-sm font-medium">Arghya Dutta</h4>
          <h4 className="text-xs font-natural mt-[1px] text-end text-gray-500">
            94287867867
          </h4>
        </div>
        <Button
          type="submit"
          className="relative bg-transparent border border-gray-500 rounded focus:ring-4 focus:ring-blue-300 font-sm text-sm px-2 py-1 text-center text-gray-500	text-xs	 dark:shadow-sm dark:shadow-blue-800/80"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
