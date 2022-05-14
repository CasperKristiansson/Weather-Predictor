import React from "react";
import './home.css'
import background from './background.jpg'
import CurrentWeatherDisplay from './currentWeatherDisplay'
import Navigation from './navigation'

export default () => {
  return (
    <>
      <div className="" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'center', backgroundRepeat: 'no-repeat' }}/>

      <Navigation />
      <div className="weatherDisplay">
        <CurrentWeatherDisplay />
      </div>
    </>
  );
};
