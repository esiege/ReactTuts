import { useState } from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((d) => d.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((d) => (
        <ChartBar
          key={d.label}
          value={d.value}
          maxValue={totalMaximum}
          label={d.label}
        />
      ))}
    </div>
  );
};
export default Chart;
