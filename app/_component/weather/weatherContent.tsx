"use client";
import { CityWeather, useStore } from "@/app/store/weatherStore";
import React, { useEffect, useState } from "react";

const WeatherContent = () => {
  const datas = useStore((state) => state.datas);
  const selectedCity = useStore((state) => state.selectedCity);
  const [data, setData] = useState<CityWeather | undefined>(undefined);

  useEffect(() => {
    const initialData = datas.find((city) => city.name === selectedCity);
    setData(initialData);
  }, [datas, selectedCity]);

  if (datas.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center pt-10 pl-52 pb-10 text-3xl text-white font-thin bg-white">
        loading...
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center pt-10 pl-52 pb-10 text-3xl text-white font-thin bg-${data?.weather}
     bg-cover`}
    >
      <p className="text-4xl">{data?.name}</p>
      <p className="text-base mb-2">{data?.country}</p>
      <p className="text-5xl">{data?.temp.slice(0, 2)}°</p>
      <p className="text-base">{data?.description}</p>
      <div className="w-32 text-base flex justify-between">
        <p>최고:{data?.temp_max.slice(0, 2)}°</p>
        <p>최저:{data?.temp_min.slice(0, 2)}°</p>
      </div>
    </div>
  );
};

export default WeatherContent;
