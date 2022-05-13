import CurrentWeatherTile from "./currentWeatherTile";
import '../styling/components/currentweathertileholder.css';
import { weatherSource } from "../js/fetch";
import React from "react";
import { promiseNoWeather } from "../js/promiseNoWeather";
import { Placeholder, Spinner, Card } from "react-bootstrap";

export const CurrentWeatherTileHolder = () => {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setPromise(
            weatherSource.getCurrentWeather().then(data => {
                setData(data);
            }
            ).catch(error => setError(error))
        );
    },[]);

    return (
        <div class="container">
            <CurrentWeatherTile
                promise={promise}
                data={data}
                error={error}
            />
        </div>
    );
}