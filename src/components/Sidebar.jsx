import React from "react";
import { RxHome } from "react-icons/rx";
import { TbBrandTeams } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import { SlNote } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineNotes } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  return (
    <nav className="flex-1 p-4 space-y-2">
      <li className="flex items-center">
        <RxHome />
        <a
          href="#"
          className="block p-2 text-gray-700 rounded hover:bg-gray-200"
        >
          Home
        </a>
      </li>
      <li className="flex items-center">
        <TbBrandTeams />
        <a
          href="#"
          className="block p-2 text-gray-700 rounded hover:bg-gray-200"
        >
          Teams
        </a>
      </li>
      <li className="flex items-center">
        <MdOutlinePeopleAlt />
        <a
          href="#"
          className="block p-2 text-gray-700 rounded hover:bg-gray-200"
        >
          Team members
        </a>
      </li>

      <li className="flex items-center">
        <AiOutlineContacts />
        <a
          href="#"
          className="block p-2 text-gray-700 rounded hover:bg-gray-200"
        >
          Contacts
        </a>
      </li>
      <li className="flex items-center">
        <SlNote />
        <a
          href="#"
          className="block p-2 text-gray-700 rounded hover:bg-gray-200"
        >
          To Dos
        </a>
      </li>
      <li className="flex items-center">
        <IoCallOutline />
        <a
          href="#"
          className="block p-2 text-gray-700 rounded hover:bg-gray-200"
        >
          Call History
        </a>
      </li>

      <li className="flex items-center">
        <MdOutlineNotes />
        <a
          href="#"
          className="block p-2 text-gray-700 rounded hover:bg-gray-200"
        >
          Notes
        </a>
      </li>

      <li className="flex items-center">
        <FaWhatsapp />
        <a
          href="#"
          className="block p-2 text-gray-700 rounded hover:bg-gray-200"
        >
          Whatsapp
        </a>
      </li>
      <li className="flex items-center">
        <TbReportSearch />
        <a
          href="#"
          className="block p-2 text-gray-700 rounded hover:bg-gray-200"
        >
          Reports
        </a>
      </li>
      <li className="flex items-center">
        <CiSettings />
        <a
          href="#"
          className="block p-2 text-gray-700 rounded hover:bg-gray-200"
        >
          Settings
        </a>
      </li>
    </nav>
  );
};

export default Sidebar;
