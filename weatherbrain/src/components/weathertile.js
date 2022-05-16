import '../styling/components/weathertile.css';

function WeatherTile  (props)  {
    return (
        <div className="tilediv" key={props.identifier}>

            <div className="content-holder">
                <div className="date">
                    {props.date}
                </div>

                <div>
                    <div className="icon-holder">
                        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                        <span className="material-symbols-outlined">
                        sunny
                        </span>
                    </div>
                    <div className="temperature-holder">
                        22°C
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default WeatherTile;
