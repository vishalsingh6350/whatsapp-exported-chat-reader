import React from "react";
import { Pie } from "react-chartjs-2";
const PieChart = ({ data }) => {
  return (
    <Pie
      height={400}
      width={500}
      data={{
        labels: data.labels,
        datasets: [
          {
            data: data.dataValues,
            backgroundColor: [
              "#8A05FF",
              "#54009E",
              "#BA6CFF",
              "#A238FF",
              "#6F00D1",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 0,
          },
        ],
      }}
    />
  );
};

export default PieChart;
