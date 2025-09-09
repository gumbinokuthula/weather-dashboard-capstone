import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./Weather.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    try {
      setError("");
      // Current weather
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);

      // 5-day forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const forecastData = await forecastRes.json();

      const daily = forecastData.list.filter((reading) =>
        reading.dt_txt.includes("12:00:00")
      );
      const formatted = daily.map((d) => ({
        day: new Date(d.dt * 1000).toLocaleDateString("en-US", {
          weekday: "short",
        }),
        icon: getWeatherEmoji(d.weather[0].main),
        max: Math.round(d.main.temp_max),
        min: Math.round(d.main.temp_min),
      }));
      setForecast(formatted);
    } catch (err) {
      setError(err.message);
    }
  };

  const getWeatherEmoji = (condition) => {
    switch (condition) {
      case "Clear":
        return "☀️";
      case "Clouds":
        return "☁️";
      case "Rain":
        return "🌧️";
      case "Snow":
        return "❄️";
      case "Thunderstorm":
        return "⛈️";
      default:
        return "🌡️";
    }
  };

  return (
    <div className="app">
      <h1 className="title">Weather Dashboard</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} forecast={forecast} />}
    </div>
  );
}

export default App;
