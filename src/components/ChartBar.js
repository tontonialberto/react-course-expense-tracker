// @ts-check

import React from "react";
import "./ChartBar.css";

/**
 * @param {{label: string, value: number, maxValue: number}} props 
 * @returns 
 */
function ChartBar(props) {

    const barHeightPct = props.maxValue === 0 ?
        0
        : 100 * props.value / props.maxValue;

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: `${barHeightPct}%` }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}

export default ChartBar;