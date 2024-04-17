import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface QueryStore {
  query: string;
  setQuery: (query: string) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  query: "",
  setQuery: (newQuery) => set(() => ({ query: newQuery })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("QueryStore", useQueryStore);
}

export default useQueryStore;
