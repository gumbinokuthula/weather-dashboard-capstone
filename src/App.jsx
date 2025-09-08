import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setError("");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found. Please try again.");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Weather Dashboard</h1>

      <SearchBar onSearch={fetchWeather} />

      {error && <ErrorMessage message={error} />}

      {weather && (
        <>
          <WeatherCard weather={weather} />
          <Forecast city={weather.name} />
        </>
      )}
    </div>
  );
}

export default App;