import { useEffect, useState } from "react";

function Forecast({ city }) {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;

    const fetchForecast = async () => {
      try {
        setError("");
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }&units=metric`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch forecast");
        }

        const data = await res.json();

        // Extract 1 forecast per day (at 12:00)
        const dailyData = data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );

        setForecast(dailyData.slice(0, 5)); // Only 5 days
      } catch (err) {
        setError(err.message);
      }
    };

    fetchForecast();
  }, [city]);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-center">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {forecast.map((day) => {
          const date = new Date(day.dt * 1000);
          const options = { weekday: "long" };
          const dayName = date.toLocaleDateString("en-US", options);

          return (
            <div
              key={day.dt}
              className="bg-white text-black rounded-xl shadow-md p-4 text-center"
            >
              <p className="font-medium">{dayName}</p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="mx-auto"
              />
              <p className="text-lg font-bold">
                {Math.round(day.main.temp)}°C
              </p>
              <p className="text-sm capitalize">{day.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
