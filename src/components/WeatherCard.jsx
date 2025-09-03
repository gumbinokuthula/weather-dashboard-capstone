import FormattedDate from "./FormattedDate";
import Forecast from "./components/Forecast";

function WeatherCard({ weather }) {
  const date = new Date(weather.dt * 1000); // OpenWeather gives Unix timestamp in seconds

  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-6 w-80 text-center">
      <h2 className="text-2xl font-semibold">{weather.name}</h2>
      <p className="text-sm text-gray-600 mb-2">
        <FormattedDate date={date} />
      </p>
      <p className="text-lg capitalize">{weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className="mx-auto"
      />
      <p className="text-3xl font-bold">{Math.round(weather.main.temp)}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {Math.round(weather.wind.speed)} km/h</p>
    </div>
  );
}

export default WeatherCard;
