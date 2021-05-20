import React from "react";
import { Line } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import classes from "./Chart.module.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
const increasingData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
  datasets: [
    {
      data: [0, 4, 3, 4, 2, 7, 6, 9],
      fill: true,
      backgroundColor: "#2eab6e",
      borderColor: "#00e676",
      borderWidth: 1,
    },
  ],
};
const decreasingData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
  datasets: [
    {
      data: [9, 6, 7, 2, 4, 3, 4, 0],
      fill: true,
      backgroundColor: "#B31041",
      borderColor: "#f10b50",
      borderWidth: 1,
    },
  ],
};
const options = {
  elements: {
    point: {
      radius: 0,
    },
    line: {
      tension: 0,
    },
  },
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = (props) => (
  <>
    <Grid container direction="row" alignItems="center" spacing={2}>
      <Grid item xs={12} sm={12} lg={6}>
        <div className={classes.br}>
          <Line
            data={props.rating === "down" ? decreasingData : increasingData}
            options={options}
          />
        </div>
      </Grid>

      <Grid item xs={6} sm={6} lg={3}>
        1.22
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        {props.rating === "up" ? (
          <ArrowUpwardIcon className={classes.upArrow} />
        ) : (
          <ArrowDownwardIcon className={classes.downArrow} />
        )}
      </Grid>
    </Grid>
  </>
);

export default LineChart;
