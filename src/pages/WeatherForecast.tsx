import useWeather from "@/hooks/useWeather";

const WeatherForecast = () => {
  const { data, isLoading, error } = useWeather();
  return (
    <section>
      <h1>Weather in {data?.name}</h1>
    </section>
  );
};

export default WeatherForecast;
