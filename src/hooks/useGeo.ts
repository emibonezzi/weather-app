import { LocationData } from "@/entities/LocationData";
import APIClient from "@/services/api-service";
import useQueryStore from "@/state-management/query/store";
import { sampleResponseGeoCoding } from "@/utils/sampleResponses";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
const apiClient = new APIClient<LocationData[]>("/geo/1.0/direct");

const useGeo = () => {
  /* const { query } = useQueryStore();
  const { data, isLoading, error, refetch } = useQuery<LocationData[]>({
    queryKey: ["geo", query],
    queryFn: () =>
      apiClient.getAll({
        params: { q: query, limit: 5 },
      }),
    staleTime: ms("24h"),
    refetchOnMount: false,
  }); */

  const data = sampleResponseGeoCoding;

  return { data };
};

export default useGeo;
