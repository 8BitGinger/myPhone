import React from 'react';

const getWeather = (wLocation) => {
  console.log(wLocation);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${wLocation}&appid=${apiKey}&units=imperial`
  );
};

export default getWeather;
