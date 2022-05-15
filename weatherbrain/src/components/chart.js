import React from "react";
import ReactEcharts from "echarts-for-react";
import { color } from "echarts";
export const Chart = () => {

    const option = {
        xAxis: 
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: 
            {
                color: "white",
                borderColor:'#white',
                itemStyle: 
                {
                    emphasis: 
                    {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                    }
                }
            },
        },
        yAxis: {
            type: 'value', 
            name: 'Temperature', 
            color: '#000033',
            axisLabel: {
                color: "white",
                borderColor:'#white',
                formatter: '{value} °C',
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                    }
                }
            },

        },
        series: [
            {
                data: [22, 15, 12, 16, 21, 19, 25],
                type: 'line',
                color: '#000033',
                radius: '100%',
                itemStyle: 
                {
                    emphasis: 
                    {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                    }
                },
                label: 
                { 
                    //TO DO: DECIDE IF WE SHOULD KEEP THE TEMPERATURES ABOVE THE LINE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    show: true,
                    position: 'top',
                    color: "white",
                    fontSize: 12,
                },

            }
        ]

    };
    return <ReactEcharts option={option} />;
}
