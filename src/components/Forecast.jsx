import React from "react";

function Forecast({ forecast }) {
  if (!forecast || !forecast.list) return null;

  // Pick one forecast every 8 steps (3h * 8 = 24h → daily)
  const daily = forecast.list.filter((item, index) => index % 8 === 0);

  return (
    <div className="Forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {daily.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const options = { weekday: "short" };
          const dayName = new Intl.DateTimeFormat("en-US", options).format(date);

          return (
            <div key={index} className="forecast-card">
              <h3>{dayName}</h3>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
              <p>🌡️ {Math.round(day.main.temp)}°C</p>
              <p>🌤️ {day.weather[0].main}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;