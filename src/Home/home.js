import React, {useEffect} from "react";
import './home.css'
import background from './6317024.jpg'
import CurrentWeatherDisplay from './currentWeatherDisplay'
import UpcomingWeatherDisplay from './upcomingWeatherDisplay'
import Navigation from './navigation'

export default () => {

  return (
    <>
      <div className="FullPageBackground" style={{ backgroundImage: `url(${background})` }}/>
      <Navigation />

      <div className="weatherDisplay">
        <CurrentWeatherDisplay />
        <UpcomingWeatherDisplay />
      </div>
    </>
  );
};
