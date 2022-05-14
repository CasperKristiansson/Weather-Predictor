import React from "react";
import ReactEcharts from "echarts-for-react";
import { color } from "echarts";
// function Chart() {
    export const Chart = () => {

    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            // ,
            // axisPointer: { type: 'cross' }
            
            
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [22, 15, 12, 16, 21, 19, 25],
                type: 'line',
                color:'#FFFF00'
            }
        ]
    };
    return <ReactEcharts option={option} />;
}
//export default Chart;