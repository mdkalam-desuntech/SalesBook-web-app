import React, { useState } from "react";
import ChartWithLabels from "./ChartWithLabels";
import MultiSelectDropDown from "../layout/MultiSelectDropDown";
const ContactGroup = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const data = [
    { id: "Open", value: 100 },
    { id: "Contacted", value: 80 },
    { id: "Interested", value: 50 },
    { id: "Had Interviewed", value: 20 },
    { id: "Followed Up", value: 5 },
    { id: "Sale Done", value: 2 },
  ];
  const colors = [
    "#FF6384",
    "#FF5733",
    "#FFA833",
    "#4BC0C0",
    "#FF33A8",
    "#36A2EB",
  ];

  const options = [
    { id: 1, name: "Backdate 5th July 2024" },
    { id: 2, name: "Backdate 6th July 2024" },
    { id: 3, name: "Backdate 7th July 2024" },
  ];

  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="w-full ">
      <div className="bg-white p-2">
        <label className="block text-black text-center text-sm font-bold mb-2">
          Contact Groups
        </label>
        <MultiSelectDropDown
          options={options}
          selectedOptions={selectedOptions}
          handleSelect={handleSelect}
        />
      </div>
      <div className="bg-white mt-11 border  flex-1  p-2 m-1">
        {/* Lead Distribution Chart */}
        <ChartWithLabels
          title="LEAD DISTRIBUTION"
          data={data}
          colors={colors}
          className="mt-32"
        />
      </div>
    </div>
  );
};

export default ContactGroup;
