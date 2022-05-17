import React from "react";
import ReactEcharts from "echarts-for-react";
import { weatherSource } from "../js/fetch";

/*import { color } from "echarts";*/
export const Chart = () => {

    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        setPromise(
            weatherSource.getSevenDayPrediction().then(data => {
                console.log(data);
                setData(data);
            }
            ).catch(error => setError(error))
        );
    }, []);

    let dataX, dataY = draw(data);

    const option = {
        xAxis:
        {
            type: 'category',
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            axisLabel:
            {
                color: "white",
                borderColor: '#white',
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
                borderColor: '#white',
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
                data: dataY,
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
                    //TO DO: DECIDE IF WE SHOULD KEEP THE TEMPERATURES ABOVE THE LINE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! change y axis label color??
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

export function draw(data) {

    let dataX = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let dataY = [0, 0, 0, 0, 0, 0, 0]
    let count = [0, 0, 0, 0, 0, 0, 0]

    if (data != null) {

        data.map
            (
                function (opt) {
                    let s = opt.date.split(" ");
                    let d = new Date(s[0]);
                    let day = d.getDay(); // 0 = sunday ?
                    console.log("d = " + d + " day = " + day)
                    dataY[day] += opt.temperature;
                    count[day]++;
                }
            )
    }
    for (let index = 0; index < count.length; index++) {
        if (count[index] > 0) {
            dataY[index] /= count[index];
        }
    }
    return dataX, dataY;

}
