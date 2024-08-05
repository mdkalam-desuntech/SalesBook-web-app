import React, { useState } from "react";
import FunnelChart from "./FunnelChart";

const Staff = () => {
  const [selectedContacts, setSelectedContacts] = useState([
    "Arghya Dutta",
    "+6",
  ]);
  const [totalContacts] = useState(1918);
  return (
    <div>
      <div className="w-full">
        <div className="bg-white  p-2">
          <label className="block text-black text-center text-sm font-bold mb-2">
            Staff
          </label>
          <div className="relative">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              {selectedContacts.map((contact, index) => (
                <option key={index} value={contact}>
                  {contact}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
          <p className="mt-2 text-black text-sm">
            {totalContacts} contacts selected
          </p>
        </div>
        <div className="bg-white mt-5 border border flex-1 h-full p-2">
          <h2 className="text-center text-black font-medium mb-4">
            SALES FUNNEL
          </h2>
          {/* Sales Funnel Chart */}
          <FunnelChart/>
        </div>
      </div>
    </div>
  );
};

export default Staff;
