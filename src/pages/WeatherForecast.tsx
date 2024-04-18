import DayCard from "@/components/DayCard";
import useWeather from "@/hooks/useWeather";
import useCurrentLocationStore from "@/state-management/location/store";
import useUnitStore from "@/state-management/unit/store";
import { LuSun } from "react-icons/lu";

const WeatherForecast = () => {
  const { uniqueDays, isLoading, error } = useWeather();
  const { currentLocation } = useCurrentLocationStore();
  const { currentUnit, setCurrentUnit } = useUnitStore();

  return (
    <>
      <div className="text-[300px] lg:text-[500px] z-[-99] text-yellow-200 absolute top-[-100px] lg:right-[-100px]">
        <LuSun />
      </div>
      <section className="flex flex-col justify-center px-[20px] lg:px-[100px] mt-[100px]">
        <h1 className="text-slate-400 mb-10 text-2xl lg:text-5xl">
          Today there is{" "}
          {uniqueDays ? uniqueDays[0].weather[0].description : ""} in{" "}
          {currentLocation?.name}, {currentLocation?.state}. <br /> The current
          temperature is {uniqueDays ? uniqueDays[0].main.temp.toFixed(0) : ""}°
          {currentUnit === "imperial" ? "F" : "C"}.
        </h1>
        <article className="grid grid-cols-[250px] justify-center gap-y-3 lg:grid-cols-5 gap-x-3">
          {uniqueDays?.slice(1).map(
            (
              item // don't show current day in forecast
            ) => (
              <DayCard
                day={new Date(item.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
                forecast={item.weather[0].main}
                description={item.weather[0].description}
                icon={item.weather[0].icon}
                temp={item.main.temp}
                feelsLike={item.main.feels_like}
              />
            )
          )}
        </article>
        <div className="flex items-center mt-10 mb-10 justify-center">
          <button
            onClick={() => {
              setCurrentUnit(
                currentUnit === "imperial" ? "metric" : "imperial"
              );
            }}
            className="shadow-md py-5 bg-white px-3 border-2 border-slate-400 rounded-md  text-slate-500 text-2xl"
          >
            Show in {currentUnit === "imperial" ? "Celsius" : "Fahrenheit"}
          </button>
        </div>
      </section>
    </>
  );
};

export default WeatherForecast;
