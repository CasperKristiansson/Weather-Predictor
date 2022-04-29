import { WeatherTile } from "./weathertile";
import '../styling/components/weathertile-holder.css';


function addDays(days) {
    var result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }



export const Weathertileholder = () => {
    const numbers = [0,1,2,3,4,5,6];
    const listTiles = numbers.map((numbers) =>  
    <WeatherTile date={(addDays(numbers).toDateString())}/>
    );
    

    

    return (
        <div class="parent-container">
            {listTiles}
        </div>
    );
}