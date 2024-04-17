import { Location } from "react-router-dom";
import { create } from "zustand";

interface LocationStore {
  currentLocation: Location | undefined;
  setCurrentLocation: (location: Location) => void;
}

const useCurrentLocationStore = create<LocationStore>((set) => ({
  currentLocation: undefined,
  setCurrentLocation: (newLocation) =>
    set(() => ({ currentLocation: newLocation })),
}));

export default useCurrentLocationStore;
