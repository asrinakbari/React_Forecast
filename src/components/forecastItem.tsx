import ForecastItemProps from "../interface/forecastItemProps";
import utils from "../utils/index.tsx";

const ForecastItem = ({ data }: { data: ForecastItemProps }) => {
  return (
    <div
      className="rounded-[20px] text-white mx-2 mt-4 border-solid border-2 border-[#53D1EC]
        bg-gradient-to-r from-[#2ea4d4] to-[#51D1EF] w-[15%] h-64 font-normal text-sm"
    >
      <div className="my-8 text-center">
        <div className="my-2">
          {utils.convertTimestampToDay(data.time) || "N/A"}
        </div>
        <img
          className="my-2 w-[50px] h-[50px] mx-auto"
          src={data.condition.icon_url}
          alt="Weather icon"
        />
        <div className="my-2">{data.temperature.minimum}°F</div>
        <div className="my-2">{data.temperature.maximum}°F</div>
      </div>
    </div>
  );
};

export default ForecastItem;
