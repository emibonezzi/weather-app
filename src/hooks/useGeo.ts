import APIClient from "@/services/api-service";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/geo/1.0/direct");

const useGeo = () => {
  useQuery({
    queryKey: ["geo"],
    queryFn: () =>
      apiClient.getAll({
        params: {},
      }),
  });
};
