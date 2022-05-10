/* Philip Hägg*/
import { CurrentWeatherTileHolder } from "../components/currentWeatherTileHolder";
import { Weathertileholder } from "../components/weathertile-holder";
import { Graph } from "../components/plotGraph";
import '../styling/pages/startpage.css'


export const Startpage = () => {

    return (
        <>
            <div>
                <div class="animation">
                    <h1>Weather Brain</h1>
                </div>

                <h2>Predicting weather with state of the art Macheine Learning </h2>

            </div>

            <CurrentWeatherTileHolder />            
            <Weathertileholder />
            <Graph />


        </>
    );
}
