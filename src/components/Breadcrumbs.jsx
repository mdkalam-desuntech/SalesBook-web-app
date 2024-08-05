import React, { useState } from "react";

const Breadcrumbs = () => {
  const [active, setActive] = useState("Customers");

  const handleClick = (breadcrumb) => {
    setActive(breadcrumb);
  };

  return (
    <nav
      className="flex border-b-[1px] border-gray-400 "
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {["Call Activity", "Team", "Customers"].map((breadcrumb) => (
          <li key={breadcrumb} className="inline-flex items-center ">
            <a
              href="#"
              className={`inline-flex items-center text-sm font-normal p-1 ${
                active === breadcrumb
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-black hover:text-blue-600"
              }`}
              onClick={() => handleClick(breadcrumb)}
            >
              {breadcrumb}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
