import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const FunnelChart = () => {
  const chartRef = useRef(null);
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

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const labels = [
      "Open",
      "Contact",
      "Interested",
      "Not interested",
      "Followed up",
      "Sale closed",
      "Others",
      "Not Connected",
      "None",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          axis: "y",
          data: [20, 2, 4, 50, 10, 0, 1, 40, 280],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 205, 86, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
            "rgb(255, 99, 132)",
            "rgb(255, 205, 86)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        indexAxis: "y",
        scales: {
          x: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },
        maintainAspectRatio: false,
      },
    };

    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      <div className="chart-container h-80">
        <canvas ref={chartRef} />
      </div>
      <div className="mt-6 p-3">
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
    </>
  );
};

export default FunnelChart;

// import * as React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";

// const chartSetting = {
//   width: 340,
//   height: 320,
//   margin: { top: 20, right: 30, bottom: 40, left: 100 },
// };

// const dataset = [
//   { leadId: 20, leadValueType: "Open" },
//   { leadId: 2, leadValueType: "contact" },
//   { leadId: 4, leadValueType: "Interested" },
//   { leadId: 50, leadValueType: "Not interested" },
//   { leadId: 10, leadValueType: "Followed up" },
//   { leadId: 0, leadValueType: "Sale closed" },
//   { leadId: 1, leadValueType: "Others" },
//   { leadId: 40, leadValueType: "Not Connected" },
//   { leadId: 280, leadValueType: "None" },
// ];

// const valueFormatter = (value) => `${value}mm`;

// export default function FunnelChart({ title }) {
//   return (
//     <div className="w-full">
//       <h2 className="text-center text-black font-medium mb-4">{title}</h2>
//       <div>
//         <BarChart
//           dataset={dataset}
//           yAxis={[{ scaleType: "band", dataKey: "leadValueType" }]}
//           series={[
//             {
//               dataKey: "leadId",
//               // label: "Lead ID",
//               valueFormatter,
//               color: "rgba(0, 188, 212, 0.5)",
//             },
//           ]}
//           layout="horizontal"
//           grid={{ vertical: true, horizontal: true }}
//           {...chartSetting}
//         />
//       </div>

//       <div className="mt-5 p-3">
//         {dataset.map((item, index) => (
//           <div
//             key={item.leadId}
//             className="flex justify-between text-sm text-gray-700 mb-1"
//           >
//             <span>
//               <span className="mr-2">{index + 1}</span>
//               {item.leadValueType}
//             </span>
//             <span className="flex items-center text-blue-700 underline">
//               {item.leadId}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
