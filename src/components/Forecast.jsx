import React from "react";

function Forecast({ forecast }) {
  return (
    <div className="forecast">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-day">
          <div className="day">{day.day}</div>
          <div className="icon">{day.icon}</div>
          <div className="temps">
            {day.max}° <span className="min">{day.min}°</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
