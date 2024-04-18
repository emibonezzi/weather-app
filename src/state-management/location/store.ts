import { LocationData } from "@/entities/LocationData";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface LocationStore {
  currentLocation: LocationData | undefined;
  setCurrentLocation: (location: LocationData) => void;
}

const useCurrentLocationStore = create<LocationStore>((set) => ({
  currentLocation: undefined,
  setCurrentLocation: (newLocation) =>
    set(() => ({ currentLocation: newLocation })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("CurrentLocationStore", useCurrentLocationStore);
}

export default useCurrentLocationStore;
