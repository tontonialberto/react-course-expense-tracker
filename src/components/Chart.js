// @ts-check

import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

/**
 * @param {object} props
 * @param {{value: number, name: string}[]} props.dataPoints Data to be displayed in the chart. 
 */
function Chart(props) {

    const total = props.dataPoints.reduce((acc, dataPoint) => {
        return acc + dataPoint.value;
    }, 0);
    
    return (
        <div className="chart">
            {
                props.dataPoints.map(
                    dataPoint => <ChartBar label={dataPoint.name} value={dataPoint.value} key={dataPoint.name} maxValue={total}/>
                )
            }
        </div>
    )
}

export default Chart;