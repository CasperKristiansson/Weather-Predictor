import '../styling/components/weathertile.css';
import {BsFillSunFill, BsFillCloudDrizzleFill} from 'react-icons/bs';

function WeatherTile (props)  {
    let symbol = null;
    if(Math.round(props.day.humidity) <= 70){
        symbol = <BsFillSunFill className='weathertile-symbol' />;
    }else{
        symbol = <BsFillCloudDrizzleFill className='weathertile-symbol' />;
    }
    
    return (
        <div className="tilediv">
            <div className="content-holder">
                <div className="date">
                    {props.day.date}
                </div>
                <div>
                    <div className="temperature-holder">
                        <strong>{Math.round(props.day.temperature)}°</strong>
                    </div>
                    <div className="symbol-holder">   
                        {symbol}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WeatherTile;
