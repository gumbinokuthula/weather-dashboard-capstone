import React from "react";
import "../Weather.css";
import FormattedDate from "./FormattedDate";

function WeatherCard({ weather }) {
  if (!weather) return null;

  const date = new Date(weather.dt * 1000);

  return (
    <div className="Weather">
      <h1>{weather.name}</h1>
      <ul>
        <li>
          📅 <FormattedDate date={date} />
        </li>
        <li>🌤️ {weather.weather[0].description}</li>
        <li>
          🌡️ <span className="temperature">{Math.round(weather.main.temp)}</span>
          <span className="unit">°C</span>
        </li>
        <li>💧 Humidity: {weather.main.humidity}%</li>
        <li>💨 Wind: {Math.round(weather.wind.speed)} km/h</li>
      </ul>
    </div>
  );
}

export default WeatherCard;
