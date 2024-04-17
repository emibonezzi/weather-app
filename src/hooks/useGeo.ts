import APIClient from "@/services/api-service";
import useQueryStore from "@/state-management/query/store";
import { useQuery } from "@tanstack/react-query";
const apiClient = new APIClient("/geo/1.0/direct");
import ms from "ms";
import { mountStoreDevtool } from "simple-zustand-devtools";

const useGeo = (query: string) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["geo"],
    queryFn: () =>
      apiClient.getAll({
        params: { q: query, limit: 5 },
      }),
    staleTime: ms("24h"),
    refetchOnMount: false,
  });

  return { data, isLoading, error, refetch };
};

export default useGeo;
