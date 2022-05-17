import '../styling/components/weathertile-holder.css';
import '../styling/components/weathertile.css';
import { weatherSource } from "../js/fetch";
import React from "react";
import { promiseNoSpinner } from '../js/promiseNoSpinner';
import WeatherTile from "./weathertile";

function extractFunc(data) {
    let days = [];
    data.forEach(element => {
        let date = new Date(element.date);
        if (date.getHours() === 12) {
            days.push(element);
        }
    });
    days.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
    });
    return days;
}

function Weathertileholder() {
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
    }, []);

    return (
        <div className="parent-container">
            {promiseNoSpinner(promise, data, error) ||
                data.map(function (day) {
                    return (
                        <WeatherTile key={day.date} day={day} />
                    );
                })
            }
        </div>
    );
}
export default Weathertileholder;