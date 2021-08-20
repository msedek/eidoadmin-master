import React from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

import classes from "./Statistics.scss";

const Statistics = props => {
  const data = [
    { name: "12p", value: 21.5 },
    { name: "", value: 33 },
    { name: "3p", value: 39 },
    { name: "", value: 32 },
    { name: "6p", value: 20 },
    { name: "", value: 14 },
    { name: "9p", value: 17.5 },
    { name: "", value: 32.5 },
    { name: "", value: 43 }
  ];

  return (
    <div className={classes.ContainerStatistics}>
      <div className={classes.ZoneTitle}>
        <span className={classes.RealTitle}> {props.spanText} </span>
      </div>
      <div className={classes.ZoneStatistics}>
        <BarChart barCategoryGap={1.9} width={600} height={240} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 70, right: 21.5 }} />
          <YAxis />
          <Tooltip />
          <Bar radius={[10, 10, 0, 0]} dataKey="value" fill={props.confColor} />
        </BarChart>
      </div>
    </div>
  );
};
export default Statistics;
