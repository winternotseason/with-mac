import { create } from "zustand";

type CityWeather = {
  name: string;
  country: string;
  temp: string;
  temp_max: string;
  temp_min: string;
  description: string;
  weather_id: number;
};

type Store = {
  datas: CityWeather[];
  pushData: (data: CityWeather) => void;
  cleanData: () => void;
};

export const useStore = create<Store>()((set) => ({
  datas: [],
  pushData: (data) => set((state) => ({ datas: [...state.datas, data] })),
  cleanData: () => set(() => ({ datas: [] })),
}));
