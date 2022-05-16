import CurrentWeatherTile from "./currentWeatherTile";
import '../styling/components/currentweathertileholder.css';
import { weatherSource } from "../js/fetch";
import React from "react";

export const CurrentWeatherTileHolder = () => {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setPromise(
            weatherSource.getCurrentWeather().then(data => {
                setData(data.json().then(data => {data; console.log(data)}));
            }
            ).catch(error => setError(error))
        );
    },[]);

    return (
        <div className="container">
            <CurrentWeatherTile
                promise={promise}
                data={data}
                error={error}
            />
        </div>
    );
}