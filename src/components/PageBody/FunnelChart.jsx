import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
  width: 340,
  height: 400,
  margin: { top: 20, right: 30, bottom: 40, left: 100 },
};

const dataset = [
  { leadId: 20, leadValueType: "Open" },
  { leadId: 2, leadValueType: "contact" },
  { leadId: 4, leadValueType: "Interested" },
  { leadId: 50, leadValueType: "Not interested" },
  { leadId: 10, leadValueType: "Followed up" },
  { leadId: 0, leadValueType: "Sale closed" },
  { leadId: 1, leadValueType: "Others" },
  { leadId: 40, leadValueType: "Not Connected" },
  { leadId: 280, leadValueType: "None" },
];

const valueFormatter = (value) => `${value}mm`;

export default function FunnelChart() {
  return (
    <div className="w-full">
      <div>
        <BarChart
          dataset={dataset}
          yAxis={[{ scaleType: "band", dataKey: "leadValueType" }]}
          series={[
            {
              dataKey: "leadId",
              // label: "Lead ID",
              valueFormatter,
              color: "#2196F3",
            },
          ]}
          layout="horizontal"
          grid={{ vertical: true, horizontal: true }}
          {...chartSetting}
        />
      </div>

      <div className="mt-5 p-3">
        {dataset.map((item, index) => (
          <div
            key={item.leadId}
            className="flex justify-between text-sm text-gray-700 mb-1"
          >
            <span>
              <span className="mr-2">{index + 1}</span>
              {item.leadValueType}
            </span>
            <span className="flex items-center text-blue-700 underline">
              {item.leadId}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
