import React, { useState } from "react";
import FunnelChart from "./FunnelChart";
import MultiSelectDropDown from "../layout/MultiSelectDropDown";

const Staff = () => {
  const [totalContacts] = useState(1918);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: 1, name: "Arghya Dutta" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
  ];

  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  return (
    <div>
      <div className="w-full">
        <div className="bg-white p-2">
          <label className="block text-black text-center text-sm font-bold mb-2">
            Staff
          </label>
          <MultiSelectDropDown
            options={options}
            selectedOptions={selectedOptions}
            handleSelect={handleSelect}
          />
          <p className="my-2 text-gray-900 text-md font-medium">
            {totalContacts} contacts selected
          </p>
        </div>
        <div className="bg-white  border flex-1  p-2 m-1">
          <h2 className="text-center text-black font-medium mb-4">
            SALES FUNNEL
          </h2>
          <FunnelChart title="SALES FUNNEL" />
        </div>
      </div>
    </div>
  );
};

export default Staff;
