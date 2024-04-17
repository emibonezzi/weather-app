import { LocationData } from "@/entities/LocationData";
import { LocationRequest } from "@/entities/LocationRequest";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface LocationStore {
  currentLocation: LocationRequest | undefined;
  setCurrentLocation: (location: LocationRequest) => void;
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
