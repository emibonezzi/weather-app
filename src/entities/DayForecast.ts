import { Summary } from "./Summary";
import { WeatherData } from "./WeatherData";

export interface DayForecast {
  dt: number;
  main: WeatherData;
  weather: Summary[];
}
