import React, { useEffect, useMemo} from "react";
import './home.css'
import background from './6317024.jpg'
import CurrentWeatherDisplay from './currentWeatherDisplay'
import UpcomingWeatherDisplay from './upcomingWeatherDisplay'
import Navigation from './navigation'
import { Store } from 'react-notifications-component'

export default () => {

  useEffect(() => {
    Store.addNotification({
      title: "Predictions are no longer being made",
      message: "Azure credits ran out, the website now only has place holder data. Please visit this website for more information: github.com/CasperKristiansson/Weather-Predictor",
      type: "info",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 15000,
        onScreen: true,
        pauseOnHover: true
      },
      width: 600
    });
  }, [])

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

