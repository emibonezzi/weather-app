import { CloudsData } from "./CloudsData";
import { Coordinates } from "./Coordinates";
import { Forecast } from "./Forecast";
import { SysData } from "./SysData";
import { WeatherData } from "./WeatherData";
import { WindData } from "./WindData";

interface CurrentWeatherResponse {
  coord: Coordinates;
  weather: Forecast[];
  base: string;
  main: WeatherData;
  visibility: number;
  wind: WindData;
  clouds: CloudsData;
  dt: number;
  sys: SysData;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
