import '../styling/components/weathertile.css';

function WeatherTile  (props)  {
    return (
        <div class="tilediv">

            <div class="content-holder">
                <div class="date">
                    {props.date}
                </div>

                <div>
                    <div class="icon-holder">
                        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                        <span class="material-symbols-outlined">
                        sunny
                        </span>
                    </div>
                    <div class="temperature-holder">
                        22°C
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default WeatherTile;
