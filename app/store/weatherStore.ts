import { create } from "zustand";

export type CityWeather = {
  name: string;
  country: string;
  temp: string;
  temp_max: string;
  temp_min: string;
  description: string;
  weather: string;
};

type Store = {
  datas: CityWeather[];
  pushData: (data: CityWeather) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  cleanData: () => void;
};

export const useStore = create<Store>()((set) => ({
  datas: [],
  pushData: (data) => set((state) => ({ datas: [...state.datas, data] })),
  selectedCity: "Seoul",
  setSelectedCity: (city) => set(() => ({ selectedCity: city })),
  cleanData: () => set(() => ({ datas: [] })),
}));
