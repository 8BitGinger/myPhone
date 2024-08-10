import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/styles/weather.css';

import weatherIcon from './../assets/images/weather/sunny.png';

const Weather = () => {
  const cityName = 'Lubbock';
  const currentTemp = '99';
  return (
    <div className="weather-page">
      <div className="weather-info2">
        <h2>{cityName}</h2>
        <div className="temp">
          <p>{currentTemp}</p>
          <span>°f</span>
        </div>
      </div>
      <div className="weather-info3">
        <img src={weatherIcon} alt="weather icon" />
      </div>
      <div className="forecast">
        <div className="forecast-day">
          <h3>Monday</h3>
          <p>99°f</p>
        </div>
        <div className="forecast-day">
          <h3>Tuesday</h3>
          <p>99°f</p>
        </div>
        <div className="forecast-day">
          <h3>Wednesday</h3>
          <p>99°f</p>
        </div>
        <div className="forecast-day">
          <h3>Thursday</h3>
          <p>99°f</p>
        </div>
        <div className="forecast-day">
          <h3>Friday</h3>
          <p>99°f</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
