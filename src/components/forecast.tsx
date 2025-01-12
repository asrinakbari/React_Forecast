import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import utils from "../utils/index.tsx";
import ForecastProps from "../interface/ForecastProps.tsx";
import ForecastItems from "./forecastItems.tsx";

const Forecast = ({ weather }: ForecastProps) => {
  const { data } = weather;

  return (
    <>
      <div className="rounded-lg mt-4 font-black bg-[rgb(192,228,241)] bg-opacity-80 w-[86%] max-w-3xl h-auto mx-auto text-white text-center py-10 shadow-lg">
        <div className="text-4xl font-bold mb-4">
          {data.city}, {data.country}
        </div>

        <div className="text-md font-light mb-8">
          {utils.convertTimestampToDate(data.time)}
        </div>

        <div className="text-4xl font-bold ml-10 mb-4 flex">
          {data.condition.icon_url && (
            <img
              src={data.condition.icon_url}
              alt={data.condition.description}
              className=""
            />
          )}
          <div className="mt-8">
            {data.temperature.current} <sup>"°F"</sup>
          </div>
        </div>

        <p>{data.condition.description}</p>

        <div className="mt-8 flex justify-around">
          <div className="w-[50%] pl-8">
            <ReactAnimatedWeather
              icon="WIND"
              size="48"
              color="#fff"
              animate={true}
            />
            <div>
              <p className="wind">{data.wind.speed} m/s</p>
              <p>Wind speed</p>
            </div>
          </div>
          <div className="w-[50%] pl-8">
            <ReactAnimatedWeather
              icon="RAIN"
              size="48"
              color="#fff"
              animate={true}
            />
            <div>
              <p className="humidity">{data.temperature.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
      {data && data.city && <ForecastItems city={data.city} />}
    </>
  );
};

export default Forecast;
