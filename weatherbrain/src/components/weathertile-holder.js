import { WeatherTile } from "./weathertile";
import '../styling/components/weathertile-holder.css';


export const Weathertileholder = () => {
    return (
        <div class="parent-container">
            <WeatherTile/>
            <WeatherTile/>
            <WeatherTile/>
            <WeatherTile/>
            <WeatherTile/>
        </div>
    );
}