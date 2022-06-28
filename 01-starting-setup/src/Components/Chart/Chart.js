import { useState } from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((d) => (
        <ChartBar value={d.value} />
      ))}
    </div>
  );
};
export default Chart;
