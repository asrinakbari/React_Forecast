import axios from "axios";
import React, { useEffect, useState } from "react";
import ForecastItem from "./forecastItem.tsx";

const ForecastItems = ({ city }: { city: string }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
      try {
        const res = await axios.get(url);
        setForecastData(res.data.daily);
      } catch (error) {
        console.error(error);
      }
    };

    fetchForecastData();
  }, [city]);

  return (
    forecastData && (
      <div className="flex justify-center items-center mb-2 mx-4">
        {forecastData.slice(0, 5).map((data, index) => (
          <ForecastItem key={index} data={data} />
        ))}
      </div>
    )
  );
};

export default ForecastItems;
