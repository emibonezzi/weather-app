import { DaysForecastResponse } from "@/entities/DaysForecastResponse";
import APIClient from "@/services/api-service";
import useCurrentLocationStore from "@/state-management/location/store";
import useUnitStore from "@/state-management/unit/store";
import { groupByDays } from "@/utils/groupByDays";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<DaysForecastResponse>("/data/2.5/forecast");

const useWeather = () => {
  const { currentLocation } = useCurrentLocationStore();
  const { currentUnit } = useUnitStore();
  const { data, isLoading, error, refetch } = useQuery<DaysForecastResponse>({
    queryKey: ["weather", currentLocation, currentUnit],
    queryFn: () =>
      apiClient.getAll({
        params: {
          lat: currentLocation?.lat,
          lon: currentLocation?.lon,
          units: currentUnit,
        },
      }),
    staleTime: ms("24h"),
    refetchOnMount: false,
  });

  const uniqueDays = groupByDays(data?.list);
  const city = data?.city;

  console.log(uniqueDays);

  return { uniqueDays, city, isLoading, error, refetch };
};

export default useWeather;
