import CurrentWeatherTile from "./currentWeatherTile";
import '../styling/components/currentweathertileholder.css';
import { weatherSource } from "../js/fetch";
import React from "react";

function CurrentWeatherTileHolder () {
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
        <div className="container">
            <CurrentWeatherTile
                promise={promise}
                data={data}
                error={error}
            />
        </div>
    );
}

export default CurrentWeatherTileHolder;