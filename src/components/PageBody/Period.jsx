import React from "react";
import ChartWithLabels from "./ChartWithLabels";
import MultiDateSelect from "../layout/MultiDateSelect";

const Period = () => {
    const data = [
        { id: "New customer", value:900 },
        { id: "Not interested", value: 350 },
        { id: "Interested", value: 300 },
        { id: "No Interested", value: 100 },
        { id: "Call back", value: 75 },
        { id: "None", value: 45 },
        { id: "Hot lead", value: 44 },
        { id: "Follow up", value: 41 },
        { id: "Followed up", value: 13 },
        { id: "Others", value: 11 },
        { id: "Issue", value: 6 },

      ];
      const colors = [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
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
          Period
        </label>
        {/* <div className="flex space-x-4">
          <input
            type="date"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />
        </div> */}
        <MultiDateSelect/>
      </div>
      <div className="bg-white mt-11 border flex-1  p-2 m-1">
        {/* Tags Distribution Chart */}
        <ChartWithLabels
          title="TAGS DISTRIBUTION"
          data={data}
          colors={colors}
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default Period;
