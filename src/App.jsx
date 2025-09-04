function App() {
  // existing state and logic...

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
