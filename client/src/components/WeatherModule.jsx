import { useEffect, useState } from "react";

function WeatherModule() {
  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/weather?city=${city}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        else {
          setWeather(data);
          setError(null);
        }
      })
      .catch(() => setError("Failed to fetch weather"));
  }, [city]);

  return (
    <div className="card">
      <h2>🌦️ Weather Info</h2>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>{Math.round(weather.main.temp - 273.15)}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherModule;
