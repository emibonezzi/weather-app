import DayCard from "@/components/DayCard";
import useWeather from "@/hooks/useWeather";
import useCurrentLocationStore from "@/state-management/location/store";
import { LuSun } from "react-icons/lu";

const WeatherForecast = () => {
  const { uniqueDays, isLoading, error } = useWeather();
  const { currentLocation } = useCurrentLocationStore();

  return (
    <>
      <div className="text-[500px] z-[-99] text-yellow-200 absolute top-[-100px] right-[-100px]">
        <LuSun />
      </div>
      <section className="flex flex-col justify-center px-[100px] mt-[150px]">
        <h1 className="text-slate-400 mb-10 text-5xl">
          Today there is{" "}
          {uniqueDays ? uniqueDays[0].weather[0].description : ""} in{" "}
          {currentLocation?.name}, {currentLocation?.state}.
        </h1>
        <article className="grid grid-cols-5 gap-x-3">
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
      </section>
    </>
  );
};

export default WeatherForecast;
