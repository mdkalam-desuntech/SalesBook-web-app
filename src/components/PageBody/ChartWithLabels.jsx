import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const ChartWithLabels = ({ title, data, colors }) => {
  return (
    <div className="bg-white flex-1  p-2">
      <h2 className="block text-black text-center text-sm font-bold mb-2">
        {title}
      </h2>
      <div className="flex justify-center pl-10 inline-block">
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
      <div className="mt-4">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex justify-between text-sm text-gray-700 mb-1"
          >
            <span className="flex items-center">
              <span
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: colors[index] }}
              ></span>
              {item.id}
            </span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartWithLabels;
