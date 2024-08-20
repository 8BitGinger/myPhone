import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/styles/weather.css';
import { motion } from 'framer-motion';
import { fadeIn } from './../util/variants';
import getWeather from '../helpers/getWeather';
import { CiSearch } from 'react-icons/ci';

const Weather = () => {
  const [weather, setWeather] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('Lubbock');
  const [updatedValue, setUpdatedValue] = React.useState('');

  const wLocation = updatedValue || 'Lubbock';

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

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUpdate = () => {
    event.preventDefault();
    setUpdatedValue(inputValue);
  };

  return (
    <motion.div
      className="weather-page"
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="weather-info2">
        <form>
          <input type="text" placeholder={cityName} onChange={handleChange} />
          <button className="btn btn-wsearch" onClick={handleUpdate}>
            <CiSearch />
          </button>
        </form>
      </div>
      <div className="temp2">
        <p>{currentTemp}</p>
        <span>°f</span>
      </div>
      <div className="weather-info3">
        <img src={weatherPic} alt="weather icon" />
      </div>
      <p>{weatherDesc}</p>
      {/* <div className="forecast">
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
      </div> */}
    </motion.div>
  );
};

export default Weather;
