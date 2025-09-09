import React from "react";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";

function WeatherCard({ weather, forecast }) {
  const date = new Date(weather.dt * 1000);

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <FormattedDate date={date} />
      <p>{weather.weather[0].description}</p>
      <div className="temperature">
        {Math.round(weather.main.temp)}°C
      </div>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} km/h</p>

      {/* 5-day forecast */}
      <Forecast forecast={forecast} />
    </div>
  );
}

export default WeatherCard;
