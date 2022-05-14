import React from "react";
import './currentWeatherDisplay.css'

import cloudy from './weather-icons/cloudy.png'

export default () => {
  return (
    <>
      <div className="currentWeatherDisplay">
        <div className="currentMinMax">
          <img src={cloudy} alt="cloudy" />
          <p>Min: +17°</p>
          <p>Max: +27°</p>
        </div>
        <div className="currentOverview">

        </div>
        <div className="currentDetails">

        </div>
        <div className="currentDay">

        </div>
      </div>
    </>
  );
};