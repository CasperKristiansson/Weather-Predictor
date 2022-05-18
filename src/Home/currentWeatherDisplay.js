import React from "react";
import './currentWeatherDisplay.css'

import cloudy from './weather-icons/cloudy.png'


const data = [6, 8, 10, 13, 16, 15]

export default () => {
  return (
    <>
      <div className="currentWeatherDisplay">
        <div className="currentMinMax">
          <img src={cloudy} alt="cloudy" />
          <p>Min: +6°</p>
          <p>Max: +17°</p>
        </div>
        <div className="currentOverview">
          <h3>Monday 18 May 19:00</h3>
          <h1>+22°C</h1>
          <p>The whole day will be without rain.</p>
        </div>
        <div className="currentDetails">
          <h3>MORE DETAILS:</h3>
          <p>Air Humidity: <bold className="textBold">70-76%</bold></p>
          <p>Pressure: <bold className="textBold">1022-1055mm</bold></p>
        </div>
        <div className="currentDay">
          {Array.from({ length: 6 }, (v, k) => k).map(day => (
            <div>
              <img src={cloudy} alt="cloudy" />
              <h4>+{data[day]}°C</h4>
              <p>{day * 3}:00</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
