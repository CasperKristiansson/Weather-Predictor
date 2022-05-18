import React from "react";
import ReactEcharts from "echarts-for-react";


import { weatherSource } from "../js/fetch";


function Chart() {


    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        setPromise(
            weatherSource.getSevenDayPrediction().then(data => {
                // console.log(data);
                setData(data);
            }
            ).catch(error => setError(error))
        );
    }, []);

    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let dataX = ['', '', '', '', '', '', '']
    // let orderOfDays = [0, 0, 0, 0, 0, 0, 0]
    
    let todaysDate = new Date();
    let todaysDayOfWeek = todaysDate.getDay();

    for (let index = 0; index < 7; index++) 
    {
        let current = (todaysDayOfWeek + index) % 7;
        dataX[index] = weekDays[current];  
        // orderOfDays[index] = current;       
    }

    let dataY = draw(data, todaysDayOfWeek);

    const option = {
        xAxis:
        {
            type: 'category',
            data: dataX,
            axisLabel:
            {
                color: "white",
                borderColor: 'white',
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
            name: 'Predicted temperature (day and night average)',
            color: 'white',
            axisLabel: {
                color: "white",
                borderColor: 'white',
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


export default Chart;

export function draw(data, dayOfWeek) {

    let dataY = [0, 0, 0, 0, 0, 0, 0]
    let count = [0, 0, 0, 0, 0, 0, 0]
     
    if (data != null) {

        data.map
            (
                function (opt) {
                    let s = opt.date.split(" ");
                    let d = new Date(s[0]);
                    let day = d.getDay(); 
                    // console.log("d = " + d + " day = " + day)
                    // let current = orderOfDays[day];
                    day = (day - dayOfWeek);
                    if (day < 0)
                    {
                        day += 7;
                    }
                    dataY[day] += opt.temperature;
                    count[day]++;
                }
            )
    }
    for (let index = 0; index < count.length; index++) {
        if (count[index] > 0) {
            dataY[index] = (dataY[index] / count[index]).toFixed(1);
        }
    }
    return dataY;

}

