import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/styles/weather.css';

import weatherIcon from './../assets/images/weather/sunny.png';

const Weather = () => {
  const cityName = 'Lubbock';
  const currentTemp = '99';
  return (
    <Link className="weather-container" to="/weather">
      <div className="weather">
        <h2>{cityName}</h2>
        <div className="weather-info">
          <div className="temp">
            <p>{currentTemp}</p>
            <span
              style={{
                fontSize: '12px',
                position: 'relative',
                top: '0',
                left: '0',
              }}
            >
              °f
            </span>
          </div>
        </div>
        <div className="weather-icon">
          <img src={weatherIcon} alt="weather-icon" />
        </div>
      </div>
    </Link>
  );
};

export default Weather;
