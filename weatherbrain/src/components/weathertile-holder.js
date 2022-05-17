import '../styling/components/weathertile-holder.css';
import '../styling/components/weathertile.css';
import { weatherSource } from "../js/fetch";
import React from "react";



function extractFunc(data){
    const days = [];
    data.forEach(element => {
        let date = new Date(element.date);
        if(date.getHours === 12){
            days.push(element);
        }
    });
    return days;
}

function Weathertileholder () {

    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setPromise(
            weatherSource.getSevenDayPrediction().then(data => {
                setData(extractFunc(data));
            }
            ).catch(error => setError(error))
        );
    },[]);




    return (
        <div className="parent-container">
            {Array.from({ length: 7 }, (v, k) => k).map(index =>
                <div className="tilediv" key={index}>

                    <div className="content-holder">
                        <div className="date">
                            days
                        </div>

                        <div>
                            <div className="icon-holder">
                                <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                                <span className="material-symbols-outlined">
                                sunny
                                </span>
                            </div>
                            <div className="temperature-holder">
                                22°C
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Weathertileholder;