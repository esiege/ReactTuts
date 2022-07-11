import { useState } from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((d) => (
        <ChartBar
          key={d.label}
          value={d.value}
          maxValue={null}
          label={d.label}
        />
      ))}
    </div>
  );
};
export default Chart;
