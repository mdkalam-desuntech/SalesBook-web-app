import React from "react";
import ChartWithLabels from "./ChartWithLabels";
const ContactGroup = () => {
  const data = [
    { id: "Open", value: 300 },
    { id: "Contacted", value: 200 },
    { id: "Interested", value: 150 },
    { id: "Had Interviewed", value: 100 },
    { id: "Followed Up", value: 50 },
    { id: "Sale Done", value: 10 },
  ];
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A8",
    "#57FF33",
    "#FFA833",
  ];
  return (
    <div className="w-full ">
      <div className="bg-white p-2">
        <label className="block text-black text-center text-sm font-bold mb-2">
          Contact Groups
        </label>
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="Group1">Backdate 5th July 2024</option>
            <option value="Group2">...</option>
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
      </div>
      <div className="bg-white mt-12 border  flex-1">
        {/* Lead Distribution Chart */}
        {/* <ChartWithLabels
          title="LEAD DISTRIBUTION"
          data={data}
          colors={colors}
        /> */}
      </div>
    </div>
  );
};

export default ContactGroup;
