import React from "react";
import { Bar } from "react-chartjs-2";
const BarChart = ({ data }) => {
  return (
    <Bar
      height={400}
      width={500}
      data={{
        labels: data.labels,
        datasets: [
          {
            label: "",
            data: data.dataValues,
            backgroundColor: [
              "#54009E",
              "#6F00D1",
              "#8A05FF",
              "#A238FF",
              "#BA6CFF",
            ],
            borderWidth: 0,
          },
        ],
      }}
      options={{
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
        },
        legend: {
          display: false,
        },
      }}
    />
  );
};

export default BarChart;
