import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const ChartWithLabels = ({ title, data, colors, className = "" }) => {
  return (
    <div className="w-full ">
      <h2 className="text-center text-black font-medium mb-4">{title}</h2>
      <div className="flex justify-center pl-12 inline-block  mt-[-40px]">
        <PieChart
          width={350}
          height={350}
          series={[
            {
              data: data.map((item, index) => ({
                name: item.id,
                value: item.value,
                color: colors[index],
              })),
            },
          ]}
        />
      </div>
      <div className={`${className} mt-4`}>
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex justify-between text-sm text-gray-700 mb-1"
          >
            <span className="flex items-center">
              <span className="mr-2">{index + 1}</span>
              {item.id}
            </span>
            <span className="flex items-center text-blue-700 underline">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartWithLabels;
