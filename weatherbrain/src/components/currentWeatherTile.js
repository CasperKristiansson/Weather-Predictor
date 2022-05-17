import '../styling/components/currentweathertile.css'
import React from 'react';
import { useEffect, useState } from 'react';
import coalesceNonElementChildren from 'react-native-button/coalesceNonElementChildren';





function CurrentWeatherTile() {
    var today = new Date();

    return (

        <div className="tilediv-current">

            <div className="content-holder-current">
                <div className="date-current">
                {today.getUTCFullYear() + '-' +today.getMonth()+'-'+today.getDate()+' '+today.getHours()+':'+today.getMinutes()}
                </div>

                <div>
                    <div className="icon-holder-current">
                        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                        <span className="material-symbols-outlined">
                        sunny
                        </span>
                    </div>
                    <div className="temp-textfield-container">
                        <div className="temperature-holder-current">
                            {currentWeather}°C 
                        </div>
                        <div className="textfield">
                            <style>
                            @import url('https://fonts.googleapis.com/css2?family=Radio+Canada:wght@584&display=swap');
                            </style>    
                            <p>Today it's sunny with low probabillity for rain. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurrentWeatherTile;