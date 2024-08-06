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
import Button from "./layout/Button";
import { BsYoutube } from "react-icons/bs";

const sidebarItems = [
  { name: "Home", icon: <RxHome size={22} color={"gray"} />, href: "#" },
  { name: "Teams", icon: <TbBrandTeams size={22} color={"gray"} />, href: "#" },
  {
    name: "Team members",
    icon: <MdOutlinePeopleAlt size={22} color={"gray"} />,
    href: "#",
  },
  {
    name: "Contacts",
    icon: <AiOutlineContacts size={22} color={"gray"} />,
    href: "#",
  },
  { name: "To Dos", icon: <SlNote size={22} color={"gray"} />, href: "#" },
  {
    name: "Call History",
    icon: <IoCallOutline size={22} color={"gray"} />,
    href: "#",
  },
  {
    name: "Notes",
    icon: <MdOutlineNotes size={22} color={"gray"} />,
    href: "#",
  },
  {
    name: "Whatsapp",
    icon: <FaWhatsapp size={22} color={"gray"} />,
    href: "#",
  },
  {
    name: "Reports",
    icon: <TbReportSearch size={22} color={"gray"} />,
    href: "#",
  },
  {
    name: "Settings",
    icon: <CiSettings size={22} color={"gray"} />,
    href: "#",
  },
];

const Sidebar = ({ isShow }) => {
  return (
    <div className="flex flex-col space-y-8 justify-between mx-2">
      <nav className="flex-1 p-2 space-y-2">
        {sidebarItems.map((item, index) => (
          <li key={index} className="flex items-center p-2">
            {item.icon}
            {isShow && (
              <a
                href={item.href}
                className="block p-2 text-gray-500 rounded hover:bg-gray-200"
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </nav>

      <div className="w-full">
        <Button
          type="submit"
          className="w-full flex items-center justify-center relative bg-blue-700 border border-gray-500 rounded focus:ring-4 focus:ring-blue-300 font-sm text-sm px-2 py-1.5 text-center text-white text-xs dark:shadow-sm dark:shadow-blue-800/80"
        >
          <BsYoutube size={isShow ? 14 : 20} className="mx-1" />
          <span className="block truncate">Watch tutorial</span>
        </Button>
        <Button
          type="submit"
          className="w-full my-2 relative bg-blue-700 border border-gray-500 rounded focus:ring-4 focus:ring-blue-300 font-sm text-sm px-2 py-1.5 text-center text-white text-xs dark:shadow-sm dark:shadow-blue-800/80"
        >
          <span className="block truncate">Contact Us to Buy a New Num</span>
        </Button>

        <Button
          type="submit"
          className="w-full flex items-center justify-center mb-2 relative bg-transprant border border-gray-500 rounded focus:ring-4 focus:ring-blue-300 font-sm text-sm px-2 py-1.5 text-center text-black text-xs dark:shadow-sm dark:shadow-blue-800/80"
        >
          <IoCallOutline size={isShow ? 12 : 16} className="mx-1" />
          <span className="block truncate">Contact Us</span>
        </Button>

        <p className="text-blue-800 text-center font-medium mb-2 text-sm underline block truncate">
          chat with live agent
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
