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
          <h3>Friday 27 July 15:00</h3>
          <h1>+22°C</h1>
        </div>
        <div className="currentDetails">
          <h3>MORE DETAILS:</h3>
          <p>Air Humidity: <bold className="textBold">42-76%</bold></p>
          <p>Pressure: <bold className="textBold">750-800mm</bold></p>
        </div>
        <div className="currentDay">
          {Array.from({ length: 6 }, (v, k) => k).map(day => (
            <div>
              <img src={cloudy} alt="cloudy" />
              <p>+22°C</p>
              <p>22:00</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};