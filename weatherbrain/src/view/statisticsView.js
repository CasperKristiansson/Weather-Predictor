import '../styling/pages/statisticsView.css';
import { weatherSource } from "../js/fetch";
import { Stats } from "../components/drawSMHIstats";
import  Chart  from '../components/chart';
import {averageTemperature} from "../components/SMHIstats";
import {minTemperature} from "../components/SMHIstats";
import {maxTemperature} from "../components/SMHIstats";



import React from "react";



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

                <div className="row2">
                <div>
                <Stats/>
            </div>
                    <div className="box3">

                        <h2>SMHI predictions for the next nine days</h2>
                        <div className="statistics">

                                Average temperature: {res.t1.toFixed(1)}°C<br></br>
                                Lowest temperature: {res.t2.toFixed(1)}°C<br></br>
                                Highest temperature: {res.t3.toFixed(1)}°C<br></br><br></br>

                                </div>
                        </div>

                        <div className="box4">

                            <h2>Our predictions for the next nine days</h2>
                            <div className="statistics">

                                Average temperature: {(res.averagePredictedTemperature).toFixed(1)}°C<br></br>
                                Lowest temperature: {(res.minTemperature).toFixed(1)}°C<br></br>
                                Highest temperature: {(res.maxTemperature).toFixed(1)}°C<br></br><br></br>

                                Average air pressure: {Math.round(res.averagePredictedAirPressure)} hPa<br></br>
                                Lowest air pressure: {Math.round(res.minAirPressure)} hPa<br></br>
                                Highest air pressure: {Math.round(res.maxAirPressure)} hPa<br></br><br></br>

                                Average humidity: {Math.round(res.averagePredictedHumidity)}%<br></br>
                                Lowest humidity: {Math.round(res.minHumidity)}%<br></br>
                                Highest humidity: {Math.round(res.maxHumidity)}%

                            </div>
                    </div>
                </div>
            </div>
        </>
    );
    }

    
export function calc(data)
{
    console.log("AVERAGE!!!! " + averageTemperature);
    console.log("min!!!! " + minTemperature);
    console.log("max!!!! " + maxTemperature);
    let t_1 = 0;
    let t_2 = 0;
    let t_3 = 0;
    if (typeof averageTemperature != "undefined")
    {
        t_1 = averageTemperature;
        t_2 = minTemperature;
        t_3 = maxTemperature;
    }

    let count = 0;
    let totalTemperature = 0;   
    let totalAirPressure = 0;   
    let totalHumidity = 0;   
    let current = 0;
    let minTemperature2 = 99999;
    let maxTemperature2 = -9999;
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
    t1 : t_1,
    t2 : t_2,
    t3 : t_3,

    }
    return ret;
}