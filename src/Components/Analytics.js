import React, { useEffect, useContext, useState } from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { stateContext } from "../App";
import BarChart from "./ChartComponents/BarChart";
import PieChart from "./ChartComponents/PieChart";

const Analytics = () => {
  console.log("rendering takes place");
  const { chatDetails } = useContext(stateContext);
  // console.log(chatDetails.messages);
  const [topSenders, setTopSenders] = useState();
  const [topSenderNumbers, setTopSenderNumbers] = useState();
  const [topDates, settopDates] = useState();
  const [topDatesNumbers, settopDatesNumbers] = useState();
  const [everyDates, seteveryDates] = useState();
  const [everyDatesNumbers, seteveryDatesNumbers] = useState();
  const [everySender, seteverySender] = useState();
  const [everySenderNumber, seteverySenderNumber] = useState();
  useEffect(() => {
    let date_map = {};
    let sender_map = {};
    chatDetails.messages.forEach((item) => {
      if (date_map[item.time.split(",")[0]]) {
        ++date_map[item.time.split(",")[0]];
      } else {
        date_map[item.time.split(",")[0]] = 1;
      }
      if (item.sender != "none") {
        if (sender_map[item.sender]) {
          ++sender_map[item.sender];
        } else {
          sender_map[item.sender] = 1;
        }
      }
    });
    seteveryDates(Object.keys(date_map));
    seteveryDatesNumbers(Object.values(date_map));
    seteverySender(Object.keys(sender_map));
    seteverySenderNumber(Object.values(sender_map));

    date_map = Object.fromEntries(
      Object.entries(date_map)
        .sort((a, b) => parseInt(b[1]) - parseInt(a[1]))
        .slice(0, 5)
    );
    sender_map = Object.fromEntries(
      Object.entries(sender_map)
        .sort((a, b) => parseInt(b[1]) - parseInt(a[1]))
        .slice(0, 5)
    );
    setTopSenderNumbers(Object.values(sender_map));
    setTopSenders(Object.keys(sender_map));
    settopDates(Object.keys(date_map));
    settopDatesNumbers(Object.values(date_map));
  }, []);
  return (
    <div className="analytics">
      <div className="chartContainer">
        Most active dates of this chat
        <BarChart data={{ labels: topDates, dataValues: topDatesNumbers }} />
      </div>
      <div className="chartContainer">
        Most active members of this chat
        <PieChart data={{ labels: topSenders, dataValues: topSenderNumbers }} />
      </div>
      {topSenders?.length === everySender?.length ? (
        ""
      ) : (
        <div className="chartContainer">
          Each member of the group and there corresponding number of messages
          (Click any line to check the sender name)
          <BarChart
            data={{
              labels: everySender,
              dataValues: everySenderNumber,
            }}
          />
        </div>
      )}
      <div className="chartContainer">
        Messages timeline according to dates
        <Line
          height={400}
          width={500}
          data={{
            labels: everyDates,
            datasets: [
              {
                data: everyDatesNumbers,
                // backgroundColor: [
                //   "rgba(255, 99, 132, 0.2)",
                //   "rgba(54, 162, 235, 0.2)",
                //   "rgba(255, 206, 86, 0.2)",
                //   "rgba(75, 192, 192, 0.2)",
                //   "rgba(153, 102, 255, 0.2)",
                //   "rgba(255, 159, 64, 0.2)",
                // ],
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
                borderJoinStyle: "round",
                fill: true,
                borderCapStyle: "round",
                pointRadius: 0,
              },
            ],
          }}
          options={{
            // aspectRatio: 2.5,
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
      </div>
      {/* <div className="chartContainer">
        <Pie height={400} width={500} data={data} />
      </div> */}
    </div>
  );
};

export default Analytics;
