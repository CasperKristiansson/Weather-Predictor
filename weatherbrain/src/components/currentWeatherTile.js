import '../styling/components/currentweathertile.css'
import { promiseNoWeather } from '../js/promiseNoWeather';
import { promiseNoSpinner } from '../js/promiseNoSpinner';

function CurrentWeatherTile(props) {
    var today = new Date();

    return (

        <div class="tilediv-current">

            <div class="content-holder-current">
                <div class="date-current">
                {promiseNoWeather(props.promise,props.data,props.error) || today.getUTCFullYear() + '-' +today.getMonth()+'-'+today.getDate()+' '+today.getHours()+':'+today.getMinutes()}
                </div>

                <div>
                    <div class="icon-holder-current">
                        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                        <span class="material-symbols-outlined">
                            sunny
                        </span>
                    </div>
                    <div class="temp-textfield-container">
                        <div class="temperature-holder-current">
                            {promiseNoWeather(props.promise,props.data,props.error) || props.data.temperature}
                        </div>
                        <div class="textfield">
                            <style>
                                @import url('https://fonts.googleapis.com/css2?family=Radio+Canada:wght@584&display=swap');
                            </style>    
                            {promiseNoWeather(props.promise,props.data,props.error) || <p>Today it's sunny with low probabillity for rain. </p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurrentWeatherTile;