import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface UnitStore {
  currentUnit: "imperial" | "metric" | "standard";
  setCurrentUnit: (unit: "imperial" | "metric" | "standard") => void;
}

const useUnitStore = create<UnitStore>((set) => ({
  currentUnit: "imperial",
  setCurrentUnit: (newUnit) => set(() => ({ currentUnit: newUnit })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("UnitStore", useUnitStore);
}

export default useUnitStore;
