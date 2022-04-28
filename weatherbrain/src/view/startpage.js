import { WeatherTile } from "../components/weathertile";
import { Weathertileholder } from "../components/weathertile-holder";
import '../styling/pages/startpage.css'


export const Startpage = () => {
    return (
        <>
        
            <h1>WeatherBrain</h1>
            <p>A simple weather app</p>
            <Weathertileholder/>
            

        </>
    );
}
