import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../assets/styles/weather.css';
import getWeather from '../helpers/getWeather';

const Weather = () => {
  const [wLocation, setWLocation] = useState('Lubbock');

  const [weather, setWeather] = React.useState(null);
  React.useEffect(() => {
    getWeather(wLocation).then((res) => {
      res.json().then((data) => {
        setWeather(data);
        console.log(data);
      });
    });
  }, [wLocation]);

  const cityName = wLocation;
  const currentTemp = weather ? Math.round(weather.main.temp) : '';
  const weatherPic = weather
    ? 'https://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'
    : '';
  const weatherDesc = weather ? weather.weather[0].description : '';

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
          <img src={weather ? weatherPic : ''} alt="weather-icon" />
        </div>
      </div>
    </Link>
  );
};

export default Weather;
