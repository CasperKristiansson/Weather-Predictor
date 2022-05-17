import '../styling/components/currentweathertile.css'

import { promiseNoWeather } from '../js/promiseNoWeather';


function CurrentWeatherTile(props) {
    return (
        <div className="tilediv-current">
            <div className="content-holder-current">
                <div className="date-current">
                {promiseNoWeather(props.promise,props.data,props.error) || props.data.date}
                </div>

                <div>
                    <div className="temp-textfield-container">
                        <div className="temperature-holder-current">
                            {promiseNoWeather(props.promise,props.data,props.error) || <><strong>{Math.round(props.data.temperature)}°</strong></>}
                        </div>
                        <div className="temperature-holder-current">
                            {promiseNoWeather(props.promise,props.data,props.error) || <>Humidity: <strong>{Math.round(props.data.humidity)}%</strong></>}
                        </div>
                        <div className="temperature-holder-current">
                            {promiseNoWeather(props.promise,props.data,props.error) || <>Air Pressure: <strong>{Math.round(props.data.airPressure)}hPa</strong></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurrentWeatherTile;