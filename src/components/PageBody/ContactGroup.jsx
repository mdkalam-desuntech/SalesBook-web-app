import React, { useState } from "react";
import ChartWithLabels from "./ChartWithLabels";
import MultiSelectDropDown from "../layout/MultiSelectDropDown";
const ContactGroup = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
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
