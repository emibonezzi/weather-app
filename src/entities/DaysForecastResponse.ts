import { City } from "./City";
import { DayForecast } from "./DayForecast";

export interface DaysForecastResponse {
  cod: string;
  message: string;
  cnt: number;
  list: DayForecast[];
  city: City;
}
