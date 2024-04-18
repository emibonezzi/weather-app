import useUnitStore from "@/state-management/unit/store";

interface Props {
  day: string;
  forecast: string;
  description: string;
  temp: number;
  feelsLike: number;
  icon: string;
}

const DayCard = ({ day, forecast, feelsLike, temp, icon }: Props) => {
  const { currentUnit } = useUnitStore();
  return (
    <article className="flex flex-col gap-3 shadow-md py-5 px-3 border-2 border-slate-400 rounded-md bg-white text-slate-500 text-2xl">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl lg:text-2xl">{day}</h2>
        <img
          className="max-w-[100px]"
          src={`https://openweathermap.org/img/wn/${icon.replace(
            "n",
            "d"
          )}@2x.png`}
        />
        <p className="text-2xl">{forecast}</p>
      </div>
      <div className="flex justify-center mt-3">
        <h2 className="text-5xl">{temp.toFixed(0)}°</h2>
      </div>
      <div className="flex mt-5 justify-center text-slate-400">
        <h2>
          It will feel like {feelsLike.toFixed(0)}°
          {currentUnit === "metric" ? "C" : "F"}
        </h2>
      </div>
    </article>
  );
};

export default DayCard;
