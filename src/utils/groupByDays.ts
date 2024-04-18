import { DayForecast } from "@/entities/DayForecast";

export function groupByDays(data: DayForecast[] | undefined) {
  if (!data) {
    return;
  }

  const daysForecasted = new Set();
  const forecastByUniqueDay = [];

  for (const day of data) {
    if (!daysForecasted.has(new Date(day.dt * 1000).getDate())) {
      daysForecasted.add(new Date(day.dt * 1000).getDate());
      forecastByUniqueDay.push(day);
    }
  }

  return forecastByUniqueDay;
}
