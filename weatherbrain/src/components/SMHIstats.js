import { weatherSource } from "../js/fetch";
import React from "react";

let averageTemperature;
let minTemperature;
let maxTemperature;

    export function Calc2() 
{

    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        setPromise(

            
            weatherSource.getSMHIPrediction().then(data => {
                setData(data);
            }
            ).catch(error => setError(error))
        );
    },[]);

    var currentDate = new Date();
        averageTemperature = 0;
        minTemperature = 9999;
        maxTemperature = -9999;
        let count = 0;

    if (data != null)
    {
    data.timeSeries.map
    (
        function (opt) 
        {
            opt.parameters.map 
            (
                function (opt2)
                {                    
                    if (opt2.name === "t")
                    {
                        let datum = opt.validTime.split("T")[0];
                        let d = new Date(datum);
                        if ((d - currentDate) / (1000 * 60 * 60 * 24) <= 9)
                        {
                        let current = opt2.values[0];
                        averageTemperature += current;
                        if (current < minTemperature)
                        {
                            minTemperature = current;
                        }
                        if (current > maxTemperature)
                        {
                            maxTemperature = current;
                        }
                        count++;
                        }

                    }
                }
            )
        }
    )
    }

    if (count > 0)
    {
    averageTemperature /= count;
    }
}

export default Calc2;
export {averageTemperature};
export {minTemperature};
export {maxTemperature};