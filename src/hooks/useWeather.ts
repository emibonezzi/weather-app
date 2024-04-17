import APIClient from "@/services/api-service";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/data/2.5/weather");

const useWeather = () => {
  useQuery({
    queryKey: ["weather"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useWeather;
