import '../styling/pages/statisticsView.css';
import { weatherSource } from "../js/fetch";
import React from "react";
//import { Graph } from "../components/plotGraph";

//Average
//Humidity
//statistics
//Highest
//History, last week?


const month =
    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate = new Date();
var startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
let nameOfMonth = month[currentDate.getMonth()];
var weekNumber = Math.ceil((currentDate.getDay() + 1 + days) / 7);
let year = startDate.getYear() + 1900;


export const StatisticsView = () => {

    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        setPromise(
            weatherSource.getSevenDayPrediction().then(data => {
                setData(data);
            }
            ).catch(error => setError(error))
        );
    },[]);

    let res = calc(data);

    return ( 
        <>
            <div className="statHeader">
                <h1>Statistics</h1>
            </div>
            <div className="detailContainer">

                <div className="row1">
                    <div className="box1">
                        <h2>This week (week number {weekNumber})</h2>
                        <div className="statistics">
                            Average temperature: <br></br>
                            Lowest temperature: <br></br>
                            Highest temperature: <br></br><br></br>

                            Average humidity: <br></br>
                            Lowest humidity: <br></br>
                            Highest humidity:
                        </div>

                        {/* <br></br><br></br> */}
                    </div>

                    <div className="box2">
                        <h2>Previous week (week number {weekNumber - 1})</h2>
                        <div className="statistics">

                            Average temperature: <br></br>
                            Lowest temperature: <br></br>
                            Highest temperature: <br></br><br></br>

                            Average humidity: <br></br>
                            Lowest humidity: <br></br>
                            Highest humidity:
                        </div>
                        {/* <br></br><br></br> */}
                    </div>
                </div>
                <div className="row2">

                    <div className="box3">

                        <h2>{nameOfMonth} {year}</h2>
                        <div className="statistics">

                            Average temperature: <br></br>
                            Lowest temperature: <br></br>
                            Highest temperature: <br></br><br></br>

                            Average humidity: <br></br>
                            Lowest humidity: <br></br>
                            Highest humidity:
                            {/* <br></br><br></br> */}
                        </div>
                        </div>

                        <div className="box4">

                            <h2>Predictions for the next seven days</h2>
                            <div className="statistics">

                                Average temperature: {res.averagePredictedTemperature}°C<br></br>
                                Lowest temperature: {res.minTemperature}°C<br></br>
                                Highest temperature: {res.maxTemperature}°C<br></br><br></br>

                                Average air pressure: {res.averagePredictedAirPressure}<br></br>
                                Lowest air pressure: {res.minAirPressure}<br></br>
                                Highest air pressure: {res.maxAirPressure}<br></br><br></br>

                                Average humidity: {res.averagePredictedHumidity}<br></br>
                                Lowest humidity: {res.minHumidity}<br></br>
                                Highest humidity: {res.maxHumidity}

                            </div>
                    </div>
                </div>
            </div>
        </>
    );
    }

    
export function calc(data)
{
    let count = 0;
    let totalTemperature = 0;   
    let totalAirPressure = 0;   
    let totalHumidity = 0;   
    let current = 0;
    let minTemperature2 = 99999;
    let maxTemperature2 = 0;
    let minAirPressure2 = 99999;
    let maxAirPressure2 = 0;
    let minHumidity2 = 99999;
    let maxHumidity2 = 0;  
        
    
    if (data != null)
    {
    data.map
    (
        function (opt) 
        {
            // if (typeof opt.airPressure === "undefined")
            // {
            //     console.log("first " + opt.airPressure);
            // }
            
            if (opt != null && !Number.isNaN(opt.temperature) && !Number.isNaN(opt.airPressure) && typeof opt.airPressure != "undefined")
            {            
            totalTemperature += opt.temperature;
            if (opt.temperature < minTemperature2)
            {
                minTemperature2 = opt.temperature;
            }

            if (opt.temperature > maxTemperature2)
            {
                maxTemperature2 = opt.temperature;
            }

            current = parseFloat(opt.airPressure)
            totalAirPressure += current;
            if (current < minAirPressure2)
            {
                minAirPressure2 = current;
            }

            if (current > maxAirPressure2)
            {
                maxAirPressure2 = current;
            }

            totalHumidity += opt.humidity;
            if (opt.humidity < minHumidity2)
            {
                minHumidity2 = opt.humidity;
            }

            if (opt.humidity > maxHumidity2)
            {
                maxHumidity2 = opt.humidity;
            }

            count++;
        }
    }
    )
}    

    let ret = 
    {
    minTemperature : minTemperature2,
    maxTemperature : maxTemperature2,
    minAirPressure : minAirPressure2,
    maxAirPressure : maxAirPressure2,
    minHumidity : minHumidity2,
    maxHumidity : maxHumidity2,  
    averagePredictedTemperature : totalTemperature/count,
    averagePredictedAirPressure : totalAirPressure/count,
    averagePredictedHumidity : totalHumidity/count,
    }
    return ret;
}

