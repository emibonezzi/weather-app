import { CurrentWeatherResponse } from "@/entities/CurrentWeatherResponse";
import APIClient from "@/services/api-service";
import useCurrentLocationStore from "@/state-management/location/store";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<CurrentWeatherResponse>("/data/2.5/weather");

const useWeather = () => {
  const { currentLocation } = useCurrentLocationStore();
  const { data, isLoading, error, refetch } = useQuery<CurrentWeatherResponse>({
    queryKey: ["weather", currentLocation],
    queryFn: () =>
      apiClient.getAll({
        params: {
          lat: currentLocation?.lat,
          lon: currentLocation?.lon,
        },
      }),
    staleTime: ms("24h"),
    refetchOnMount: false,
  });

  return { data, isLoading, error, refetch };
};

export default useWeather;
