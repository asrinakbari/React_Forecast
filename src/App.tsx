import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchEngine from "./components/searchEngine.tsx";
import Card from "./uI/card.tsx";
import Forecast from "./components/forecast.tsx";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    error: "",
    data: {},
  });

  const search = async (event) => {
    event.preventDefault();
    if (
      event.type === "Click" ||
      (event.type === "keypress" && event.key === "Enter")
    ) {
      setWeather({ ...weather, loading: true });
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

      try {
        const res = await axios.get(url);
        setWeather({ data: res.data, loading: false, error: false });
      } catch (error) {
        setWeather({ data: {}, loading: false, error: true });
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const url = `https://api.shecodes.io/weather/v1/current?query=Rabat&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        setWeather({ data: response.data, loading: false, error: false });
      } catch (error) {
        setWeather({ data: {}, loading: false, error: true });
        console.error("Error fetching initial weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Card>
        <SearchEngine query={query} setQuery={setQuery} search={search} />
        {weather && weather.data && weather.data.condition && (
          <Forecast weather={weather} />
        )}
      </Card>
    </div>
  );
}

export default App;
