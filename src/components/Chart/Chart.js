import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = function (props) {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxDataPointValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxDataPointValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
